import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import { CabinetContactsFilled } from './CabinetContactsFilled';
import { CabinetContactsForm } from './CabinetContactsForm';
import * as Styled from '../../pages/Cabinet.styled';

const CabinetContacts: React.FC = () => (
  <>
    <Styled.MobileTab className="active">Контактна інформація</Styled.MobileTab>
    <Styled.MobileTabContent>
      <CabinetContactsForm />
      <CabinetContactsFilled
        name="Оксана"
        surname="Кінь"
        email="supersanta@gmail.com"
        phone="+380 66 329 97 45"
        dob="12.10.1999"
      />
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
