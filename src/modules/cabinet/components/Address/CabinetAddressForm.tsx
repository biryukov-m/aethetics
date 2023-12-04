import React from 'react';
import * as Styled from './CabinetAddressForm.styled';
import addressService from '../../../../services/address.service';
import CabinetAddressBlock from './CabinetAddressBlock';
import { Button as StyledButton } from '../../../common/button/button.styled';

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
  <Styled.Form action="post">
    <Styled.Flex>
      {generatedAddressBlocks.length > 0 && <Styled.Column>{generatedAddressBlocks}</Styled.Column>}
      <Styled.Column>
        <Styled.Paragraph>Додати нову адресу:</Styled.Paragraph>
        <Styled.Input type="text" id="full-name" placeholder="ПІБ" />
        <Styled.Input type="text" id="city" placeholder="Місто" />
        <Styled.HorizontalGroup>
          <Styled.Input type="text" id="street" placeholder="Вулиця" />
          <Styled.Input type="text" id="house" placeholder="Корпус" />
          <Styled.Input type="text" id="apartment" placeholder="Квартира" />
        </Styled.HorizontalGroup>
        <Styled.Input type="text" id="postal" placeholder="Поштове відділення" />
        <Styled.Input type="tel" id="telephone" placeholder="Номер телефону" />
        <Styled.ButtonContainer>
          <StyledButton type="submit">Зберегти</StyledButton>
        </Styled.ButtonContainer>
      </Styled.Column>
    </Styled.Flex>
  </Styled.Form>
);
