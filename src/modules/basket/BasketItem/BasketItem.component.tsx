import React, { useContext } from 'react';
import * as Styled from './BasketItem.styled';
import basketService, { IBasketItem } from '../../../services/basket.service';
import productService from '../../../services/products.service';
import CloseIcon from '../../../assets/images/icon-delete-default-no-borders.png';
import { QuantityInput } from '../../common/QuantityInput/QuantityInput.component';
import { BasketContext } from '../Basket.provider';

interface IProps {
  item: IBasketItem;
}

export const BasketItem: React.FC<IProps> = ({ item }) => {
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
        <Styled.NameAndQuantityCol>
          <Styled.Name>{product.name}</Styled.Name>
          <Styled.QuantityInputWrapper>
            <QuantityInput
              value={item.quantity}
              onIncrease={increaseQuantityHandler}
              onDecrease={decreaseQuantityHandler}
            />
          </Styled.QuantityInputWrapper>
        </Styled.NameAndQuantityCol>
        <Styled.RemoveAndPriceCol>
          <Styled.RemoveBtn onClick={removeFromBasketHandler}>
            <img src={CloseIcon} alt="remove from basket" />
          </Styled.RemoveBtn>
          <Styled.Price>{productSummaryCost} грн</Styled.Price>
        </Styled.RemoveAndPriceCol>
      </Styled.Flex>
    );
  }
  return <>Product with id {item.id} not found </>;
};
