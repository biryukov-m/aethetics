import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import { Contacts } from '../../../common/components/Contacts/Contacts';
import * as Styled from '../../pages/Cabinet.styled';

const CabinetContacts: React.FC = () => (
  <>
    <Styled.MobileTab $active>Контактна інформація</Styled.MobileTab>
    <Styled.MobileTabContent>
      <Contacts logout />
    </Styled.MobileTabContent>
    <Styled.MobileTab>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.address}`}>Адресна книга</Link>
    </Styled.MobileTab>
    <Styled.MobileTab>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.favourites}`}>
        Список бажань
      </Link>
    </Styled.MobileTab>
    <Styled.MobileTab>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.history}`}>
        Історія замовлень
      </Link>
    </Styled.MobileTab>
  </>
);

export default CabinetContacts;
