import React from 'react';
import { IContacts } from '../../../../types/contacts';
import { Button } from '../../../common/button/button.styled';
import * as Styled from './CabinetContactsFilled.styled';

export const CabinetContactsFilled: React.FC<IContacts> = ({ name, surname, email, tel, dob }) => (
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
        <Styled.Text>{tel}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Дата народження:</Styled.Label>
        <Styled.Text>{dob || ''}</Styled.Text>
      </Styled.Container>
    </Styled.Grid>
    <Styled.BtnContainer>
      <Button type="submit">Редагувати</Button>
    </Styled.BtnContainer>
  </>
);
