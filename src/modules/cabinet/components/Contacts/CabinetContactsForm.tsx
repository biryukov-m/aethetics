import React from 'react';

import { Button, ButtonArrowRight } from '../../../common/button/button.styled';
import * as Styled from './CabinetContactsForm.styled';

export const CabinetContactsForm: React.FC = () => (
  <Styled.Form action="post" className="for-contacts">
    <Styled.Flex>
      <Styled.Column>
        <label htmlFor="name">Ваше ім’я</label>
        <input type="text" className="name" id="name" placeholder="Світлана" />
        <label htmlFor="surname">Ваше прізвище</label>
        <input type="text" className="surname" id="surname" placeholder="Світлана" />
        <label htmlFor="email">E-mail</label>
        <input type="email" className="email" id="email" placeholder="shevSv002@gmail.com" />
      </Styled.Column>
      <Styled.Column>
        <label htmlFor="telephone">Номер телефону</label>
        <input
          type="telephone"
          className="telephone"
          id="telephone"
          placeholder="+38 068 564 77 99"
        />
        <label htmlFor="date-of-birth">Дата народження</label>
        <input type="text" className="date-of-birth" id="date-of-birth" placeholder="8.10.1989" />
        <Styled.ExitBtnContainer>
          <ButtonArrowRight>Вийти</ButtonArrowRight>
        </Styled.ExitBtnContainer>
      </Styled.Column>
    </Styled.Flex>
    <Styled.SubmitBtnContainer>
      <Button type="submit">Зберегти</Button>
    </Styled.SubmitBtnContainer>
  </Styled.Form>
);
