import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import { CabinetContactsFilled } from './CabinetContactsFilled';
import { CabinetContactsForm } from './CabinetContactsForm';
import * as Styled from '../../pages/Cabinet.styled';
import contactsService from '../../../../services/contacts.service';

const CabinetContacts: React.FC = () => {
  const [contacts, setContacts] = useState(contactsService.contacts);
  const [updating, setUpdating] = useState(false);
  return (
    <>
      <Styled.MobileTab $active>Контактна інформація</Styled.MobileTab>
      <Styled.MobileTabContent>
        {contacts && contacts.name.length > 0 ? (
          updating ? (
            <CabinetContactsForm
              setContacts={setContacts}
              setUpdating={setUpdating}
              initialValues={contacts}
            />
          ) : (
            <CabinetContactsFilled contacts={contacts} setUpdating={setUpdating} />
          )
        ) : (
          <CabinetContactsForm setContacts={setContacts} setUpdating={setUpdating} />
        )}
      </Styled.MobileTabContent>
      <Styled.MobileTab>
        <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.address}`}>
          Адресна книга
        </Link>
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
};

export default CabinetContacts;
