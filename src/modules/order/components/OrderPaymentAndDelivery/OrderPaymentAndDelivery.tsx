import React, { useState } from 'react';
import { OrderPaymentAndDeliveryNewAddress } from './OrderPaymentAndDeliveryNewAddress';
import { OrderPaymentAndDeliveryOptions } from './OrderPaymentAndDeliveryOptions';
import addressService from '../../../../services/address.service';

export const OrderPaymentAndDelivery: React.FC = () => {
  const [addresses, setAddresses] = useState(addressService.addresses);

  return addresses.length > 0 ? (
    <OrderPaymentAndDeliveryOptions {...{ addresses }} />
  ) : (
    <OrderPaymentAndDeliveryNewAddress {...{ setAddresses }} />
  );
};
