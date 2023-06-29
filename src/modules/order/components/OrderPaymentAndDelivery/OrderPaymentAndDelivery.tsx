import React from 'react';
// import * as Styled from './OrderPaymentAndDelivery.styled';
import { OrderPaymentAndDeliveryNewAddress } from './OrderPaymentAndDeliveryNewAddress';
import { OrderPaymentAndDeliveryOptions } from './OrderPaymentAndDeliveryOptions';

export const OrderPaymentAndDelivery: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <>
      <OrderPaymentAndDeliveryNewAddress />
      <OrderPaymentAndDeliveryOptions />
    </>
  );
};
