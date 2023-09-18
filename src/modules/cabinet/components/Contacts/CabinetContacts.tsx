import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import * as Styled from './CabinetContacts.styled';
import { CabinetContactsFilled } from './CabinetContactsFilled';
import { CabinetContactsForm } from './CabinetContactsForm';

const CabinetContacts: React.FC = () => (
  <>
    <Styled.Header className="active">Контактна інформація</Styled.Header>
    <Styled.Wrapper>
      <CabinetContactsForm />
      <CabinetContactsFilled
        name="Оксана"
        surname="Кінь"
        email="supersanta@gmail.com"
        phone="+380 66 329 97 45"
        dob="12.10.1999"
      />
    </Styled.Wrapper>
    <Styled.Header>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.address}`}>Адресна книга</Link>
    </Styled.Header>
    <Styled.Header>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.favourites}`}>
        Список бажань
      </Link>
    </Styled.Header>
    <Styled.Header>
      <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.history}`}>
        Історія замовлень
      </Link>
    </Styled.Header>
  </>
);

export default CabinetContacts;
