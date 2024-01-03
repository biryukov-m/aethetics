import { QueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { IBasketItem } from '../../services/basket.service';
import productService from '../../services/products.service';

export const useFetchTotalCost = (basket: IBasketItem[], queryClient: QueryClient) => {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetchProductDetails = async () => {
      let sum = 0;

      await Promise.all(
        basket.map(async (item) => {
          const product = await queryClient.fetchQuery({
            queryKey: ['product', item.id],
            queryFn: () => productService.getById(item.id)
          });

          if (product) {
            sum += product.price * item.quantity;
          }
        })
      );

      setTotalCost(sum);
    };

    fetchProductDetails();
  }, [basket, queryClient]);

  return totalCost;
};
