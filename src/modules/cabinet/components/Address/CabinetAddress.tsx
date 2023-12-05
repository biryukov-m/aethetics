import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './CabinetAddress.styled';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import { CabinetAddressForm } from './CabinetAddressForm';
import addressService from '../../../../services/address.service';
import CabinetAddressBlock from './CabinetAddressBlock';

const CabinetAddress: React.FC = () => {
  const [addresses, setAddresses] = useState(addressService.addresses);
  const removeHandler = (id: number) => {
    addressService.remove(id);
    setAddresses(addressService.addresses);
  };
  return (
    <>
      <Styled.MobileTab>
        <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.contacts}`}>
          Контактна інформація
        </Link>
      </Styled.MobileTab>

      <Styled.MobileTabContent>
        <Styled.MobileTab>Адресна книга</Styled.MobileTab>
        <Styled.Flex>
          {addresses.length > 0 && (
            <Styled.Column>
              {addresses.map((address, idx) => (
                <CabinetAddressBlock removeHandler={removeHandler} key={idx} address={address} />
              ))}
            </Styled.Column>
          )}
          <Styled.Column>
            <CabinetAddressForm setAddresses={setAddresses} />
          </Styled.Column>
        </Styled.Flex>
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
};

export default CabinetAddress;
