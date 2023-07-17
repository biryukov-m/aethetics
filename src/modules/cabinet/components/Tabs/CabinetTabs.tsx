import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../constants/routerKeys';
import * as Styled from './CabinetTabs.styled';

const CabinetTabs: React.FC = () => (
  <Styled.Tabs>
    <Styled.ListItem>
      <Link to={ROUTER_KEYS.cabinet.contacts}>Контактна інформація</Link>
    </Styled.ListItem>
    <Styled.ListItem>
      <Link to={ROUTER_KEYS.cabinet.address}>Адресна книга</Link>
    </Styled.ListItem>
    <Styled.ListItem>
      <Link to={ROUTER_KEYS.cabinet.favourites}>Список бажань</Link>
    </Styled.ListItem>
    <Styled.ListItem>
      <Link to={ROUTER_KEYS.cabinet.history}>Історія замовлень</Link>
    </Styled.ListItem>
  </Styled.Tabs>
);

export default CabinetTabs;
