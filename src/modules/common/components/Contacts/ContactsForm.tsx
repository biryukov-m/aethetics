import { Field, Form, Formik } from 'formik';
import React from 'react';
import { contactsValidationSchema } from '../../../../schemas/contacts.schema';
import contactsService from '../../../../services/contacts.service';
import { IContacts } from '../../../../types/contacts';
import {
  Button as StyledButton,
  ButtonWhite as StyledButtonWhite
} from '../../styled/button.styled';
import * as Styled from './ContactsForm.styled';

interface IProps {
  isEditing: boolean;
  handleOnSubmit: () => void;
  handleOnRemove: () => void;
  initialValues: IContacts;
  logout?: boolean;
}

export const ContactsForm: React.FC<IProps> = ({
  isEditing,
  handleOnSubmit,
  handleOnRemove,
  initialValues,
  logout = false
}) => (
  <Formik
    initialValues={initialValues}
    enableReinitialize
    validationSchema={contactsValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      contactsService.contacts = { ...values };
      setSubmitting(false);
      handleOnSubmit();
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
                {isEditing ? (
                  <StyledButtonWhite
                    onClick={() => {
                      contactsService.remove();
                      handleOnRemove();
                    }}
                    disabled={isSubmitting}
                  >
                    Видалити
                  </StyledButtonWhite>
                ) : (
                  logout && <StyledButtonWhite disabled={isSubmitting}>Вийти</StyledButtonWhite>
                )}
              </Styled.SecondaryBtnContainer>
            </Styled.Column>
          </Styled.FlexBtns>
        </Styled.Container>
      </Form>
    )}
  </Formik>
);
