import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainRouter } from '../navigation';
import '../../sass/all.scss';
import { BasketContextProvider } from '../basket-modal/Basket.provider';
import { queryClient } from '../common/api/queryClient';

const AppContainer: React.FC = () => (
  <BasketContextProvider>
    <QueryClientProvider client={queryClient}>
      <MainRouter />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </BasketContextProvider>
);

export default AppContainer;
