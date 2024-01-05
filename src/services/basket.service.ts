import { IProductId } from '../types/products';
import { ProductModel } from '../modules/models/ProductModel';

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

  getQuantityOfProductId(id: IBasketItemId) {
    return this.findByProductId(id)?.quantity;
  }

  updateQuantity(id: IBasketItemId, quantity: IBasketItemQuantity) {
    const { basket } = this;
    const foundProduct = this.findByProductId(id);
    if (foundProduct && foundProduct.quantity + quantity > 0) {
      foundProduct.quantity += quantity;
      this.basket = basket.map((item) => (item.id === id ? foundProduct : item));
    }
  }

  getProductSummaryCost(price: ProductModel['price'], _id: ProductModel['_id']) {
    const record = this.findByProductId(_id);
    if (price && record) {
      const { quantity } = record;
      return price * quantity;
    }
    return 0;
  }

  getTotalItemsQuantity() {
    const { basket } = this;
    const totalItemsQuantity = basket.reduce((total, item) => total + item.quantity, 0);
    return totalItemsQuantity;
  }
}

const basketService = new BasketService();

export default basketService;
