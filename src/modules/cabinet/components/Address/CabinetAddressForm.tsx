import React from 'react';
import * as Styled from './CabinetAddressForm.styled';
import addressService from '../../../../services/address.service';
import CabinetAddressBlock from './CabinetAddressBlock';

const { addresses } = addressService;
const generatedAddressBlocks = addresses.map((address, idx) => (
  <CabinetAddressBlock
    key={idx}
    id={idx}
    city={address.city}
    street={address.street}
    house={address.house}
    apartment={address.apartment}
    postal={address.postal}
  />
));

export const CabinetAddressForm: React.FC = () => (
  <Styled.Form action="post" className="for-address">
    <Styled.Flex>
      <div className="column addresses">{generatedAddressBlocks}</div>
      <Styled.Column>
        <p>Додати нову адресу:</p>
        <input type="full-name" className="full-name" id="full-name" placeholder="ПІБ" />
        <input type="text" className="city" id="city" placeholder="Місто" />
        <div className="group">
          <input type="text" className="street" id="street" placeholder="Вулиця" />
          <input type="text" className="house" id="house" placeholder="Корпус" />
          <input type="text" className="apartment" id="apartment" placeholder="Квартира" />
        </div>
        <input type="text" className="postal" id="postal" placeholder="Поштове відділення" />
        <input type="tel" className="telephone" id="telephone" placeholder="Номер телефону" />
      </Styled.Column>
    </Styled.Flex>
    <button type="submit" className="btn">
      <span>Зберегти</span>
    </button>
  </Styled.Form>
);
