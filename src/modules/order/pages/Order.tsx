import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import * as Styled from './Order.styled';
import { OrderBasket } from '../components/OrderBasket/OrderBasket';
import { ROUTER_KEYS } from '../../../constants/routerKeys';

const Order: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Styled.Layout>
      <div>
        <Styled.Header>Оформлення замовлення</Styled.Header>
        <Styled.Tabs>
          <Styled.Tab onClick={() => navigate(`${ROUTER_KEYS.order.contacts}`)}>
            <Styled.Counter>1</Styled.Counter>
            <span>Особисті дані</span>
          </Styled.Tab>
          <Styled.Tab onClick={() => navigate(`${ROUTER_KEYS.order.delivery}`)}>
            <Styled.Counter>2</Styled.Counter>
            <span>Оплата / Доставка</span>
          </Styled.Tab>
        </Styled.Tabs>
        <Outlet />
        <OrderBasket />
      </div>
    </Styled.Layout>
  );
};

export default Order;
