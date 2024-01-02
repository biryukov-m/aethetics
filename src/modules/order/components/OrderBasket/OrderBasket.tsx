import React, { useContext } from 'react';
import * as Styled from './OrderBasket.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import OrderBasketItem from './OrderBasketItem';

export const OrderBasket: React.FC = () => {
  const { basket } = useContext(BasketContext);
  const totalCost = 0;

  return (
    <>
      <Styled.Wrapper>
        {basket.map((item) => (
          <OrderBasketItem key={item.id} _id={item.id} quantity={item.quantity} />
        ))}
      </Styled.Wrapper>
      <Styled.TotalPrice>Загальна сума: {totalCost} грн</Styled.TotalPrice>
    </>
  );
};
