import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './Order.styled';
import { OrderBasket } from '../components/OrderBasket/OrderBasket';
import { ROUTER_KEYS } from '../../../constants/routerKeys';

const Order: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <section>
      <Styled.Layout>
        <Styled.Header>Оформлення замовлення</Styled.Header>
        <Styled.Tabs>
          <Styled.Tab onClick={() => navigate(`${ROUTER_KEYS.order.contacts}`)}>
            <Styled.Counter
              $active={currentPath.includes(
                `${ROUTER_KEYS.order.root}/${ROUTER_KEYS.order.contacts}`
              )}
            >
              1
            </Styled.Counter>
            <Styled.Text>Особисті дані</Styled.Text>
          </Styled.Tab>
          <Styled.Tab onClick={() => navigate(`${ROUTER_KEYS.order.delivery}`)}>
            <Styled.Counter
              $active={currentPath.includes(
                `${ROUTER_KEYS.order.root}/${ROUTER_KEYS.order.delivery}`
              )}
            >
              2
            </Styled.Counter>
            <Styled.Text>Оплата / Доставка</Styled.Text>
          </Styled.Tab>
        </Styled.Tabs>
        <Outlet />
        <OrderBasket />
      </Styled.Layout>
    </section>
  );
};

export default Order;
