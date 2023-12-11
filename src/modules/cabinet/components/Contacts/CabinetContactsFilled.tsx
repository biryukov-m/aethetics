import React from 'react';
import { IContacts } from '../../../../types/contacts';
import { Button } from '../../../common/button/button.styled';
import * as Styled from './CabinetContactsFilled.styled';

interface IProps {
  contacts: IContacts;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CabinetContactsFilled: React.FC<IProps> = ({ contacts, setUpdating }) => (
  <>
    <Styled.Grid>
      <Styled.Container>
        <Styled.Label>Ім’я:</Styled.Label>
        <Styled.Text>{contacts.name}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Прізвище:</Styled.Label>
        <Styled.Text>{contacts.surname}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>E-mail:</Styled.Label>
        <Styled.Text>{contacts.email}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Номер телефону:</Styled.Label>
        <Styled.Text>{contacts.tel}</Styled.Text>
      </Styled.Container>
      <Styled.Container>
        <Styled.Label>Дата народження:</Styled.Label>
        <Styled.Text>{contacts.dob || ''}</Styled.Text>
      </Styled.Container>
    </Styled.Grid>
    <Styled.BtnContainer>
      <Button type="button" onClick={() => setUpdating(true)}>
        Редагувати
      </Button>
    </Styled.BtnContainer>
  </>
);
