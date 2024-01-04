import React, { useContext, useMemo } from 'react';
import * as Styled from './OrderBasket.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import OrderBasketItem from './OrderBasketItem';
import { queryClient } from '../../../common/api/queryClient';
import { useFetchTotalCost } from '../../../hooks/useFetchTotalCost';

export const OrderBasket: React.FC = () => {
  const { basket } = useContext(BasketContext);
  const totalCost = useFetchTotalCost(basket, queryClient);
  const basketItems = useMemo(
    () =>
      basket.map((item) => (
        <OrderBasketItem key={item.id} _id={item.id} quantity={item.quantity} />
      )),
    [basket]
  );

  return (
    <>
      <Styled.Wrapper>{basketItems}</Styled.Wrapper>
      <Styled.TotalPrice>Загальна сума: {totalCost} грн</Styled.TotalPrice>
    </>
  );
};
