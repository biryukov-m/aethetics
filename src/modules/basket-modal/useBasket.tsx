import { useCallback, useState } from 'react';
import basketService, { IBasketItem } from '../../services/basket.service';

export const useBasket = () => {
  const [basket, setBasket] = useState<IBasketItem[]>(basketService.basket);

  const updateStateFromStorage = () => setBasket(basketService.basket);

  const add = useCallback(
    (id: number, quantity: number) => {
      basketService.add(id, quantity);
      updateStateFromStorage();
    },
    [updateStateFromStorage]
  );

  const remove = useCallback(
    (id: number) => {
      basketService.remove(id);
      updateStateFromStorage();
    },
    [updateStateFromStorage]
  );

  const updateQuantity = useCallback(
    (id: number, quantity: number) => {
      basketService.updateQuantity(id, quantity);
      updateStateFromStorage();
    },
    [updateStateFromStorage]
  );
  return { basket, add, remove, updateQuantity };
};
