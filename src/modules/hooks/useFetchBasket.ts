import { useQueries } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { QUERY_KEYS } from '../../constants/appKeys';
import basketService, { IBasketItem } from '../../services/basket.service';
import productService from '../../services/products.service';
import { ProductModelMin } from '../models';

export const useFetchBasket = (basket: IBasketItem[]) => {
  const [totalCost, setTotalCost] = useState(0);
  const queriesResults = useQueries({
    queries: basket.map((item) => ({
      queryKey: [QUERY_KEYS.product.name, QUERY_KEYS.product.options.minimized, item.id],
      queryFn: () => productService.getByIdMin(item.id)
    }))
  });

  useEffect(() => {
    if (queriesResults.every((result) => !result.isError && !result.isPending && result.data)) {
      const products = queriesResults.map((result) => result.data);
      setTotalCost(basketService.countTotalCost(products as ProductModelMin[]));
    }
  }, [basket, queriesResults]);

  return { queriesResults, totalCost };
};
