import { useCallback, useState } from 'react';
import basketService, { IBasketItem, IBasketItemId } from '../../services/basket.service';

export const useBasket = () => {
  const [basket, setBasket] = useState<IBasketItem[]>(basketService.basket);

  const updateStateFromStorage = () => setBasket(basketService.basket);

  const add = useCallback(
    (id: IBasketItemId, quantity: number) => {
      basketService.add(id, quantity);
      updateStateFromStorage();
    },
    [updateStateFromStorage]
  );

  const remove = useCallback(
    (id: IBasketItemId) => {
      basketService.remove(id);
      updateStateFromStorage();
    },
    [updateStateFromStorage]
  );

  const updateQuantity = useCallback(
    (id: IBasketItemId, quantity: number) => {
      basketService.updateQuantity(id, quantity);
      updateStateFromStorage();
    },
    [updateStateFromStorage]
  );
  return { basket, add, remove, updateQuantity };
};
