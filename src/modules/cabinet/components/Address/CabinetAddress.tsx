import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from '../../pages/Cabinet.styled';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import { CabinetAddressForm } from './CabinetAddressForm';

const CabinetAddress: React.FC = () => (
  <>
    <Styled.MobileTab>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.contacts}`}>
        Контактна інформація
      </Link>
    </Styled.MobileTab>
    <Styled.MobileTabContent>
      Адресна книга
      <CabinetAddressForm />
    </Styled.MobileTabContent>
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

export default CabinetAddress;
