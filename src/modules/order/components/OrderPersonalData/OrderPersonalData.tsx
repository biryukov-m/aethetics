import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Styled from './OrderPersonalData.styled';
import { Button } from '../../../common/button/button.styled';

export const OrderPersonalData: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <Styled.Wrapper>
      <Formik
        initialValues={{ name: '', surname: '', email: '', phone: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Styled.Column>
              <label htmlFor="name">Ваше ім’я</label>
              <Field type="text" className="name" name="name" id="name" placeholder="Світлана" />
              <label htmlFor="surname">Ваше прізвище</label>
              <Field
                type="text"
                className="surname"
                name="surname"
                id="surname"
                placeholder="Шевченко"
              />
              <label htmlFor="email">E-mail</label>
              <Field
                type="email"
                className="email"
                name="email"
                id="email"
                placeholder="shevsv002@gmail.com"
              />
              <label htmlFor="phone">Номер телефону</label>
              <Field
                type="telephone"
                className="telephone"
                id="phone"
                name="phone"
                placeholder="+38 068 555 77 99"
              />
            </Styled.Column>
            <Styled.BtnColumn>
              <Button type="submit" disabled={isSubmitting}>
                Далі
              </Button>
            </Styled.BtnColumn>
          </Form>
        )}
      </Formik>
    </Styled.Wrapper>
  );
};
