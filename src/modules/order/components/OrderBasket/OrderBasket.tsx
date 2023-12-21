import React, { useContext } from 'react';
import * as Styled from './OrderBasket.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import OrderBasketItem from './OrderBasketItem';
import useFetchTotalCost from '../../../hooks/useFetchTotalCost';

export const OrderBasket: React.FC = () => {
  const { basket } = useContext(BasketContext);
  const totalCost = useFetchTotalCost(basket);

  return (
    <>
      <Styled.Wrapper>
        {basket.map((item) => (
          <OrderBasketItem key={item.id} item={item} />
        ))}
      </Styled.Wrapper>
      <Styled.TotalPrice>
        Загальна сума: {totalCost !== null ? `${totalCost} грн` : 'Завантажуємо...'}
      </Styled.TotalPrice>
    </>
  );
};
