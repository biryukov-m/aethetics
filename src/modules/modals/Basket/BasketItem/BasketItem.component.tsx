import React from 'react';
import * as Styled from './BasketItem.styled';
import basketService, { IBasketItem } from '../../../../services/basket.service';
import productService from '../../../../services/products.service';
import CloseIcon from '../../../../assets/images/icon-delete-default-no-borders.png';

interface IProps {
  item: IBasketItem;
}

export const BasketItem: React.FC<IProps> = ({ item }) => {
  const product = productService.getById(item.id);
  const productSummaryCost = basketService.getProductSummaryCost(item.id);
  const removeFromBasketHandler = () => {
    basketService.remove(item.id);
  };
  return (
    <Styled.Flex>
      <Styled.ImageCol>
        <img src={product?.imageUrl} alt={product?.imageAlt} />
      </Styled.ImageCol>
      <Styled.NameAndQuantityCol>
        <Styled.Name>{product?.name}</Styled.Name>
        <Styled.QuantityInput type="number" value={item.quantity} />
      </Styled.NameAndQuantityCol>
      <Styled.RemoveAndPriceCol>
        <Styled.RemoveBtn onClick={removeFromBasketHandler}>
          <img src={CloseIcon} alt="remove from basket" />
        </Styled.RemoveBtn>
        <Styled.Price>{productSummaryCost} грн</Styled.Price>
      </Styled.RemoveAndPriceCol>
    </Styled.Flex>
  );
};
