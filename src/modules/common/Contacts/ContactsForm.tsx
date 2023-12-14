import { Field, Form, Formik } from 'formik';
import React from 'react';
import { contactsValidationSchema } from '../../../schemas/contacts.schema';
import contactsService from '../../../services/contacts.service';
import { IContacts } from '../../../types/contacts';
import {
  Button as StyledButton,
  ButtonArrowRight as StyledButtonArrowRight,
  ButtonWhite as StyledButtonWhite
} from '../button/button.styled';
import * as Styled from './ContactsForm.styled';

interface IProps {
  isUpdating: boolean;
  handleContactsUpdate: () => void;
  initialValues: IContacts;
}

export const ContactsForm: React.FC<IProps> = ({
  isUpdating,
  handleContactsUpdate,
  initialValues
}) => (
  <Formik
    initialValues={initialValues}
    enableReinitialize
    validationSchema={contactsValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      contactsService.contacts = { ...values };
      setSubmitting(false);
      handleContactsUpdate();
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Styled.Container>
          <Styled.Flex>
            <Styled.Column>
              <label htmlFor="name">Ваше ім’я</label>
              <Field
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                placeholder="Світлана"
              />
              <label htmlFor="surname">Ваше прізвище</label>
              <Field
                type="text"
                name="surname"
                id="surname"
                autoComplete="family-name"
                placeholder="Світлана"
              />
              <label htmlFor="email">E-mail</label>
              <Field
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="shevSv002@gmail.com"
              />
            </Styled.Column>
            <Styled.Column>
              <label htmlFor="tel">Номер телефону</label>
              <Field
                type="tel"
                name="tel"
                id="tel"
                autoComplete="tel"
                placeholder="+38 068 564 77 99"
              />
              <label htmlFor="dob">Дата народження</label>
              <Field type="text" name="dob" id="dob" autoComplete="bday" placeholder="8.10.1989" />
              <Styled.SecondaryBtnContainer>
                {isUpdating ? (
                  <StyledButtonWhite
                    onClick={() => {
                      contactsService.remove();
                      handleContactsUpdate();
                    }}
                    disabled={isSubmitting}
                  >
                    Видалити контакти
                  </StyledButtonWhite>
                ) : (
                  <StyledButtonArrowRight disabled={isSubmitting}>Вийти</StyledButtonArrowRight>
                )}
              </Styled.SecondaryBtnContainer>
            </Styled.Column>
          </Styled.Flex>
          <Styled.SubmitBtnContainer>
            <StyledButton type="submit" disabled={isSubmitting}>
              Зберегти
            </StyledButton>
          </Styled.SubmitBtnContainer>
        </Styled.Container>
      </Form>
    )}
  </Formik>
);
