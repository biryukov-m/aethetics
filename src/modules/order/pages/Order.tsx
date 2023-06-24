import React from 'react';
import * as Styled from './Order.styled';
import { OrderBasket } from '../components/OrderBasket/OrderBasket';

const Order: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <section className="order">
      <div className="layout">
        <Styled.Header>Оформлення замовлення</Styled.Header>
        {/* <OrderPersonalData /> */}
        {/* <OrderPaymentAndDelivery /> */}
        <OrderBasket />
      </div>
    </section>
  );
};

export default Order;
