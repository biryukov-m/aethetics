import React from 'react';
import { Button } from '../../../common/button/button.styled';
import * as Styled from './CabinetContactsFilled.styled';

interface IProps {
  name: string;
  surname: string;
  email: string;
  phone: string;
  dob: string;
}

export const CabinetContactsFilled: React.FC<IProps> = ({ name, surname, email, phone, dob }) => (
  <>
    <Styled.Grid>
      <Styled.Container>
        <Styled.Label>Ім’я:</Styled.Label>
        <Styled.Text>{name}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Прізвище:</Styled.Label>
        <Styled.Text>{surname}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>E-mail:</Styled.Label>
        <Styled.Text>{email}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Номер телефону:</Styled.Label>
        <Styled.Text>{phone}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Дата народження:</Styled.Label>
        <Styled.Text>{dob}</Styled.Text>
      </Styled.Container>
    </Styled.Grid>
    <Styled.BtnContainer>
      <Button type="submit">Редагувати</Button>
    </Styled.BtnContainer>
  </>
);
