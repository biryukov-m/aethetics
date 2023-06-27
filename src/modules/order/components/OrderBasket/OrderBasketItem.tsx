import React, { useContext } from 'react';
import * as Styled from './OrderBasketItem.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import basketService, { IBasketItem } from '../../../../services/basket.service';
import productService from '../../../../services/products.service';
import { QuantityInput } from '../../../common/QuantityInput/QuantityInput.component';
import { CloseButton } from '../../../common/CloseButton/CloseButton.component';

interface IProps {
  item: IBasketItem;
}

const OrderBasketItem: React.FC<IProps> = ({ item }) => {
  const product = productService.getById(item.id);
  const productSummaryCost = basketService.getProductSummaryCost(item.id);
  const { remove, updateQuantity } = useContext(BasketContext);

  const removeFromBasketHandler = () => {
    remove(item.id);
  };
  const increaseQuantityHandler = () => {
    updateQuantity(item.id, 1);
  };
  const decreaseQuantityHandler = () => {
    updateQuantity(item.id, -1);
  };

  if (product) {
    return (
      <Styled.Flex>
        <Styled.ImageCol>
          <img src={product.imageUrl} alt={product.imageAlt} />
        </Styled.ImageCol>
        <Styled.Name>{product.name}</Styled.Name>
        <Styled.QuantityInputWrapper>
          <QuantityInput
            value={item.quantity}
            onIncrease={increaseQuantityHandler}
            onDecrease={decreaseQuantityHandler}
          />
        </Styled.QuantityInputWrapper>
        <Styled.Price>{productSummaryCost} грн</Styled.Price>
        <CloseButton onClick={removeFromBasketHandler} />
      </Styled.Flex>
    );
  }
  return <>Product with id {item.id} not found </>;
};

export default OrderBasketItem;
