import { Field, Form, Formik } from 'formik';
import React from 'react';
import { contactsValidationSchema } from '../../../schemas/contacts.schema';
import contactsService from '../../../services/contacts.service';
import { IContacts } from '../../../types/contacts';
import { Button as StyledButton, ButtonWhite as StyledButtonWhite } from '../styled/button.styled';
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
                placeholder="Шевченко"
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
              <label htmlFor="email">E-mail</label>
              <Field
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="shevSv002@gmail.com"
              />
            </Styled.Column>
          </Styled.Flex>
          <Styled.FlexBtns>
            <Styled.Column>
              <Styled.SubmitBtnContainer>
                <StyledButton type="submit" disabled={isSubmitting}>
                  Зберегти
                </StyledButton>
              </Styled.SubmitBtnContainer>
            </Styled.Column>
            <Styled.Column>
              <Styled.SecondaryBtnContainer>
                {isUpdating ? (
                  <StyledButtonWhite
                    onClick={() => {
                      contactsService.remove();
                      handleContactsUpdate();
                    }}
                    disabled={isSubmitting}
                  >
                    Видалити
                  </StyledButtonWhite>
                ) : (
                  <StyledButtonWhite disabled={isSubmitting}>Вийти</StyledButtonWhite>
                )}
              </Styled.SecondaryBtnContainer>
            </Styled.Column>
          </Styled.FlexBtns>
        </Styled.Container>
      </Form>
    )}
  </Formik>
);
