import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { QUERY_KEYS } from '../../constants/appKeys';
import basketService, { IBasketItem } from '../../services/basket.service';
import productService from '../../services/products.service';

export const useFetchBasket = (basket: IBasketItem[]) => {
  const idsFromBasket = basket.map((item) => item.id);
  const [totalCost, setTotalCost] = useState(0);
  const { isPending, data, error } = useQuery({
    queryKey: [QUERY_KEYS.products.name, QUERY_KEYS.products.options.minimized, ...idsFromBasket],
    queryFn: () => productService.getByIds(idsFromBasket)
  });

  useEffect(() => {
    if (!isPending && !error && data) {
      setTotalCost(basketService.countTotalCost(data));
    }
  }, [basket, data]);

  return { isPending, data, totalCost };
};
