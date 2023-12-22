import React, { createContext, useMemo } from 'react';
import { IBasketItem, IBasketItemId } from '../../services/basket.service';
import { useBasket } from './useBasket';

interface IBasketContextProps {
  basket: IBasketItem[];
  add: (id: IBasketItemId, quantity: number) => void;
  remove: (id: IBasketItemId) => void;
  updateQuantity: (id: IBasketItemId, quantity: number) => void;
}

export const BasketContext = createContext({} as IBasketContextProps);

export const BasketContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { basket, add, remove, updateQuantity } = useBasket();

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
