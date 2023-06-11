import { IProductId } from '../types/products';
import productService from './products.service';

export type IBasketItemId = IProductId;
export type IBasketItemQuantity = number;
export interface IBasketItem {
  id: IBasketItemId;
  quantity: IBasketItemQuantity;
}

class BasketService {
  get basket(): IBasketItem[] {
    const basket = sessionStorage.getItem('basket');
    return basket ? (JSON.parse(basket) as IBasketItem[]) : [];
  }

  set basket(basket: IBasketItem[]) {
    const basketStr = JSON.stringify(basket);
    sessionStorage.setItem('basket', basketStr);
  }

  add(id: IBasketItemId, quantity: IBasketItemQuantity) {
    const { basket } = this;
    const foundItem = this.findByProductId(id);
    if (foundItem) {
      this.updateQuantity(id, quantity);
    } else {
      basket.push({ id, quantity });
      this.basket = basket;
    }
  }

  remove(id: IBasketItemId) {
    const { basket } = this;
    const foundItem = this.findByProductId(id);
    if (foundItem) {
      this.basket = basket.filter((item) => item.id !== id);
    }
  }

  findByProductId(id: IBasketItemId) {
    const { basket } = this;
    return basket.find((item) => item.id === id);
  }

  updateQuantity(id: IBasketItemId, quantity: IBasketItemQuantity) {
    const { basket } = this;
    const foundProduct = this.findByProductId(id);
    if (foundProduct && foundProduct.quantity + quantity > 0) {
      foundProduct.quantity += quantity;
      this.basket = basket.map((item) => (item.id === id ? foundProduct : item));
    }
  }

  getProductSummaryCost(id: IBasketItemId) {
    const product = productService.getById(id);
    const record = this.findByProductId(id);
    if (product && record) {
      const { price } = product;
      const { quantity } = record;
      return price * quantity;
    }
  }

  getTotalCost() {
    const { basket } = this;

    const totalPrice = basket.reduce((total, itemInBasket) => {
      const itemInCatalogue = productService.getById(itemInBasket.id);
      if (itemInCatalogue) {
        const itemSummaryCost = itemInCatalogue.price * itemInBasket.quantity;
        return total + itemSummaryCost;
      }
      return total;
    }, 0);

    return totalPrice;
  }
}

const basketService = new BasketService();

export default basketService;
