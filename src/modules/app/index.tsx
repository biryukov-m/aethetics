import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainRouter } from '../navigation';
import '../../sass/all.scss';
import { BasketContextProvider } from '../basket-modal/Basket.provider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true
    }
  }
});

const AppContainer: React.FC = () => (
  <BasketContextProvider>
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  </BasketContextProvider>
);

export default AppContainer;
