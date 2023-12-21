import React from 'react';
import { IContacts } from '../../../../types/contacts';
import { Button } from '../../styled/button.styled';
import * as Styled from './ContactsFilled.styled';

interface IProps {
  contacts: IContacts;
  handleOnEdit: () => void;
}

export const ContactsFilled: React.FC<IProps> = ({ contacts, handleOnEdit }) => (
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
    </Styled.Grid>
    <Styled.BtnContainer>
      <Button type="button" onClick={() => handleOnEdit()}>
        Редагувати
      </Button>
    </Styled.BtnContainer>
  </>
);
