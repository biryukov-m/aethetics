import React, { useContext, useMemo } from 'react';
import * as Styled from './OrderBasket.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import OrderBasketItem from '../OrderBasketItem/OrderBasketItem';
import basketService from '../../../../services/basket.service';

export const OrderBasket: React.FC = () => {
  const { basket } = useContext(BasketContext);
  const totalCost = useMemo(() => basketService.getTotalCost(), [basket]);

  return (
    <>
      <Styled.Wrapper>
        {basket.map((item) => (
          <OrderBasketItem key={item.id} {...{ item }} />
        ))}
      </Styled.Wrapper>
      <Styled.TotalPrice>Загальна сума: {totalCost} грн</Styled.TotalPrice>
    </>
  );
};
