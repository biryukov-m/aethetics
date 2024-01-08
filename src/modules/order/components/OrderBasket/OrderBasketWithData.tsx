import React from 'react';
import * as Styled from './OrderBasket.styled';
import { IBasketItem } from '../../../../services/basket.service';
import { useFetchBasket } from '../../../hooks/useFetchBasket';
import OrderBasketItem from './OrderBasketItem';
import { ProductModelMin } from '../../../models';

interface IProps {
  basket: IBasketItem[];
}

export const OrderBasketWithData: React.FC<IProps> = ({ basket }) => {
  const { queriesResults, totalCost } = useFetchBasket(basket);

  if (queriesResults.some((result) => result.isPending)) {
    return <Styled.Header>Завантажуємо...</Styled.Header>;
  }

  if (queriesResults.every((result) => result.status === 'success')) {
    const products = queriesResults.map((result) => result.data) as ProductModelMin[];
    return (
      <>
        <Styled.Header>В кошику {basket.length} товарів</Styled.Header>
        {products.map((item) => (
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
