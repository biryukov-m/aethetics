import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './CabinetAddress.styled';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';
import { CabinetAddressForm } from './CabinetAddressForm';
import addressService from '../../../../services/address.service';
import CabinetAddressBlock from './CabinetAddressBlock';
import { IAddress } from '../../../../types/address';

const CabinetAddress: React.FC = () => {
  const [addresses, setAddresses] = useState(addressService.addresses);
  const [updateAddress, setUpdateAddress] = useState<IAddress | null>(null);
  const removeHandler = (uuid: string) => {
    addressService.remove(uuid);
    setAddresses(addressService.addresses);
  };
  const updateHandler = (address: IAddress) => {
    setUpdateAddress(address);
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
            <Styled.LeftColumn>
              {addresses.map((address, idx) => (
                <CabinetAddressBlock
                  removeHandler={removeHandler}
                  updateHandler={updateHandler}
                  key={idx}
                  address={address}
                  updating={address.uuid === updateAddress?.uuid}
                />
              ))}
            </Styled.LeftColumn>
          )}
          <Styled.Column>
            <CabinetAddressForm
              setAddresses={setAddresses}
              updateAddress={updateAddress}
              setUpdateAddress={setUpdateAddress}
            />
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
