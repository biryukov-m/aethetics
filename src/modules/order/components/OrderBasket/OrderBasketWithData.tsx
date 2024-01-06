import React from 'react';
import * as Styled from './OrderBasket.styled';
import { IBasketItem } from '../../../../services/basket.service';
import { useFetchBasket } from '../../../hooks/useFetchBasket';
import OrderBasketItem from './OrderBasketItem';

interface IProps {
  basket: IBasketItem[];
}

export const OrderBasketWithData: React.FC<IProps> = ({ basket }) => {
  const { isPending, data, totalCost } = useFetchBasket(basket);

  if (isPending) {
    return <Styled.Header>Завантажуємо...</Styled.Header>;
  }

  if (data) {
    return (
      <>
        <Styled.Header>В кошику {basket.length} товарів</Styled.Header>
        {data.map((item) => (
          <OrderBasketItem
            key={item._id}
            product={item}
            quantity={basket.find((record) => record.id === item._id)!.quantity}
          />
        ))}
        <Styled.TotalPrice>Загальна сума: {totalCost} грн</Styled.TotalPrice>
      </>
    );
  }

  return <Styled.Header>Сталася помилка</Styled.Header>;
};
