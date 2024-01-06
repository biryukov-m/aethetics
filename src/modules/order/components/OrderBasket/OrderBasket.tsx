import React, { useContext } from 'react';
import * as Styled from './OrderBasket.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import { OrderBasketWithData } from './OrderBasketWithData';

export const OrderBasket: React.FC = () => {
  const { basket } = useContext(BasketContext);
  const isBasketExists = basket && basket.length > 0;

  return (
    <Styled.Wrapper>
      {isBasketExists ? (
        <OrderBasketWithData basket={basket} />
      ) : (
        <Styled.Header>Кошик порожній</Styled.Header>
      )}
    </Styled.Wrapper>
  );
};
