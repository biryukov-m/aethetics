import React, { createContext, useMemo } from 'react';
import { IBasketItem } from '../../services/basket.service';
import { useBasket } from './useBasket';

interface IBasketContextProps {
  basket: IBasketItem[];
  add: (id: number, quantity: number) => void;
  remove: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const BasketContext = createContext({} as IBasketContextProps);

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
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
