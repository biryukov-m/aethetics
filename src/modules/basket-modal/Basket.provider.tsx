import React, { createContext, useCallback, useMemo, useState } from 'react';
import basketService, { IBasketItem, IBasketItemId } from '../../services/basket.service';

interface IBasketContextProps {
  basket: IBasketItem[];
  add: (id: IBasketItemId, quantity: number) => void;
  remove: (id: IBasketItemId) => void;
  updateQuantity: (id: IBasketItemId, quantity: number) => void;
}

export const BasketContext = createContext({} as IBasketContextProps);

export const BasketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [basket, setBasket] = useState<IBasketItem[]>(basketService.basket);
  const updateStateFromStorage = () => {
    const newBasket = basketService.basket;
    setBasket(newBasket);
  };

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

  const basketContextValue = useMemo(
    () => ({
      basket,
      add,
      remove,
      updateQuantity
    }),
    [basket]
  );
  return <BasketContext.Provider value={basketContextValue}>{children}</BasketContext.Provider>;
};
