import React from 'react';
import * as Styled from './CabinetAddressForm.styled';
import { Button as StyledButton } from '../../../common/button/button.styled';

export const CabinetAddressForm: React.FC = () => (
  <Styled.Form action="post">
    <Styled.Paragraph>Додати нову адресу:</Styled.Paragraph>
    <Styled.Input type="text" id="full-name" placeholder="ПІБ" />
    <Styled.Input type="text" id="city" placeholder="Місто" />
    <Styled.InputGroup>
      <Styled.Input type="text" id="street" placeholder="Вулиця" />
      <Styled.Input type="text" id="house" placeholder="Корпус" />
      <Styled.Input type="text" id="apartment" placeholder="Квартира" />
    </Styled.InputGroup>
    <Styled.Input type="text" id="postal" placeholder="Поштове відділення" />
    <Styled.Input type="tel" id="telephone" placeholder="Номер телефону" />
    <Styled.ButtonContainer>
      <StyledButton type="submit">Зберегти</StyledButton>
    </Styled.ButtonContainer>
  </Styled.Form>
);
