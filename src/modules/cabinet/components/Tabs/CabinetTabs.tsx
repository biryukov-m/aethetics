import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../../constants/appKeys';
import * as Styled from './CabinetTabs.styled';

const getCurrentCabinetTab = () => {
  const { pathname } = window.location;
  const pattern = new RegExp(`/${ROUTER_KEYS.cabinet.root}/(.+)`);
  const match = pathname.match(pattern);
  return match ? match[1] : '';
};

const CabinetTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('');
  const { pathname } = useLocation();

  useEffect(() => setActiveTab(getCurrentCabinetTab()), [pathname]);

  return (
    <Styled.Tabs>
      <Styled.ListItem $active={activeTab === ROUTER_KEYS.cabinet.contacts}>
        <Link to={ROUTER_KEYS.cabinet.contacts}>Контактна інформація</Link>
      </Styled.ListItem>
      <Styled.ListItem $active={activeTab === ROUTER_KEYS.cabinet.address}>
        <Link to={ROUTER_KEYS.cabinet.address}>Адресна книга</Link>
      </Styled.ListItem>
      <Styled.ListItem $active={activeTab === ROUTER_KEYS.cabinet.favourites}>
        <Link to={ROUTER_KEYS.cabinet.favourites}>Список бажань</Link>
      </Styled.ListItem>
      <Styled.ListItem $active={activeTab === ROUTER_KEYS.cabinet.history}>
        <Link to={ROUTER_KEYS.cabinet.history}>Історія замовлень</Link>
      </Styled.ListItem>
    </Styled.Tabs>
  );
};

export default CabinetTabs;
