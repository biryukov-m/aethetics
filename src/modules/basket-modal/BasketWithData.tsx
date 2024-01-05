import React from 'react';
import { useQuery } from '@tanstack/react-query';
import * as Styled from './BasketModal.styled';
import { QUERY_KEYS } from '../../constants/appKeys';
import productService from '../../services/products.service';
import { queryClient } from '../common/api/queryClient';
import { useFetchTotalCost } from '../hooks/useFetchTotalCost';
import { IBasketItem } from '../../services/basket.service';
import { BasketItem } from './BasketItem/BasketItem.component';

interface IProps {
  basket: IBasketItem[];
}

export const BasketWithData: React.FC<IProps> = ({ basket }) => {
  const totalCost = useFetchTotalCost(basket, queryClient);
  const idsFromBasket = basket.map((item) => item.id);
  const { isPending, data } = useQuery({
    queryKey: [QUERY_KEYS.products.name, QUERY_KEYS.products.options.minimized, ...idsFromBasket],
    queryFn: () => productService.getByIds(idsFromBasket)
  });

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
