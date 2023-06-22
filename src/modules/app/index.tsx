import React from 'react';
import { MainRouter } from '../navigation';
import '../../sass/all.scss';
import { BasketProvider } from '../basket-modal/Basket.provider';

const AppContainer: React.FC = () => (
  <BasketProvider>
    <MainRouter />
  </BasketProvider>
);

export default AppContainer;
