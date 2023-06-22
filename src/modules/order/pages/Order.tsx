import React from 'react';
// import * as Styled from './Order.styled';

export const Order: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <div>
      <h3>Оформлення замовлення</h3>
      <OrderPersonalData />
      <OrderPaymentAndDelivery />
      <OrderBasket />
    </div>
  );
};
