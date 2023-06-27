import React, { useState } from 'react';
import * as Styled from './Order.styled';
import { OrderBasket } from '../components/OrderBasket/OrderBasket';
import { OrderPersonalData } from '../components/OrderPersonalData/OrderPersonalData';

type TabName = 'PERSONAL_DATA' | 'PAYMENT_AND_DELIVERY';

const Order: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('PERSONAL_DATA');
  const handleTabClick = (e: React.MouseEvent, name: TabName) => {
    setActiveTab(name);
  };

  return (
    <section className="order">
      <div className="layout">
        <Styled.Header>Оформлення замовлення</Styled.Header>
        <Styled.Tabs>
          <Styled.Tab onClick={(e) => handleTabClick(e, 'PERSONAL_DATA')}>
            <Styled.Counter className={activeTab === 'PERSONAL_DATA' ? 'active' : ''}>
              1
            </Styled.Counter>
            <span>Особисті дані</span>
          </Styled.Tab>
          <Styled.Tab onClick={(e) => handleTabClick(e, 'PAYMENT_AND_DELIVERY')}>
            <Styled.Counter className={activeTab === 'PAYMENT_AND_DELIVERY' ? 'active' : ''}>
              2
            </Styled.Counter>
            <span>Оплата / Доставка</span>
          </Styled.Tab>
        </Styled.Tabs>
        {activeTab === 'PERSONAL_DATA' && <OrderPersonalData />}
        {/* {activeTab === 'PAYMENY_AND_DELIVERY' && <OrderPaymentAndDelivery />} */}
        {activeTab === 'PAYMENT_AND_DELIVERY' && '<OrderPaymentAndDelivery />'}
        <OrderBasket />
      </div>
    </section>
  );
};

export default Order;
