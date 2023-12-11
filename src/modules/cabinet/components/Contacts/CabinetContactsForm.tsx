import { Field, Form, Formik } from 'formik';
import React from 'react';
import { contactsValidationSchema } from '../../../../schemas/contacts.schema';
import contactsService from '../../../../services/contacts.service';
import { IContacts } from '../../../../types/contacts';
import {
  Button as StyledButton,
  ButtonArrowRight as StyledButtonArrowRight
} from '../../../common/button/button.styled';
import * as Styled from './CabinetContactsForm.styled';

interface IProps {
  setContacts: React.Dispatch<React.SetStateAction<IContacts>>;
  setUpdating: React.Dispatch<React.SetStateAction<boolean>>;
  initialValues?: IContacts;
}

export const CabinetContactsForm: React.FC<IProps> = ({
  setContacts,
  setUpdating,
  initialValues = {
    name: '',
    surname: '',
    tel: '',
    email: '',
    dob: ''
  }
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={contactsValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      const newContact = { ...values };
      contactsService.contacts = newContact;
      setSubmitting(false);
      setUpdating(false);
      setContacts(contactsService.contacts);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form>
        <Styled.Wrapper className="for-contacts">
          <Styled.Flex>
            <Styled.Column>
              <label htmlFor="name">Ваше ім’я</label>
              <Field type="text" name="name" id="name" placeholder="Світлана" />
              <label htmlFor="surname">Ваше прізвище</label>
              <Field type="text" name="surname" id="surname" placeholder="Світлана" />
              <label htmlFor="email">E-mail</label>
              <Field type="email" name="email" id="email" placeholder="shevSv002@gmail.com" />
            </Styled.Column>
            <Styled.Column>
              <label htmlFor="tel">Номер телефону</label>
              <Field type="tel" name="tel" id="tel" placeholder="+38 068 564 77 99" />
              <label htmlFor="dob">Дата народження</label>
              <Field type="text" name="dob" id="dob" placeholder="8.10.1989" />
              <Styled.ExitBtnContainer>
                <StyledButtonArrowRight>Вийти</StyledButtonArrowRight>
              </Styled.ExitBtnContainer>
            </Styled.Column>
          </Styled.Flex>
          <Styled.SubmitBtnContainer>
            <StyledButton type="submit" disabled={isSubmitting}>
              Зберегти
            </StyledButton>
          </Styled.SubmitBtnContainer>
        </Styled.Wrapper>
        {touched.name && <Styled.Error>{errors.name}</Styled.Error>}
        {touched.surname && <Styled.Error>{errors.surname}</Styled.Error>}
        {touched.email && <Styled.Error>{errors.email}</Styled.Error>}
        {touched.tel && <Styled.Error>{errors.tel}</Styled.Error>}
        {touched.dob && <Styled.Error>{errors.dob}</Styled.Error>}
      </Form>
    )}
  </Formik>
);
