import React from 'react';
import * as Styled from './BasketModal.styled';
import { IBasketItem } from '../../services/basket.service';
import { BasketItem } from './BasketItem/BasketItem.component';
import { useFetchBasket } from '../hooks/useFetchBasket';

interface IProps {
  basket: IBasketItem[];
}

export const BasketWithData: React.FC<IProps> = ({ basket }) => {
  const { isPending, data, totalCost } = useFetchBasket(basket);

  if (isPending) {
    return <Styled.SubHeader>Завантажуємо...</Styled.SubHeader>;
  }

  if (data) {
    const basketItems = data.map((item) => (
      <BasketItem
        key={item._id}
        product={item}
        quantity={basket.find((record) => record.id === item._id)!.quantity}
      />
    ));

    return (
      <>
        <Styled.SubHeader>В кошику {basket.length} товарів</Styled.SubHeader>
        {basketItems}
        <Styled.TotalPrice>Загальна сума: {totalCost} грн</Styled.TotalPrice>
      </>
    );
  }

  return <Styled.SubHeader>Сталася помилка</Styled.SubHeader>;
};
