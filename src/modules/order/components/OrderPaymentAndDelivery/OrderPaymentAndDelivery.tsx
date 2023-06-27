import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Styled from './OrderPaymentAndDelivery.styled';
import { Button } from '../../../common/button/button.styled';

export const OrderPaymentAndDelivery: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <Styled.Wrapper>
      <Formik
        initialValues={{ city: '', street: '', house: '', apartment: '', postal: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Styled.Flex>
              <Styled.Column>
                <Styled.Legend>Додати нову адресу</Styled.Legend>
                <Field type="text" className="city" id="city" name="city" placeholder="Місто" />
                <Styled.Group className="group">
                  <Field
                    type="text"
                    className="street"
                    id="street"
                    name="street"
                    placeholder="Вулиця"
                  />
                  <Field
                    type="text"
                    className="house"
                    id="house"
                    name="house"
                    placeholder="Корпус"
                  />
                  <Field
                    type="text"
                    className="apartment"
                    id="apartment"
                    name="apartment"
                    placeholder="Квартира"
                  />
                </Styled.Group>
                <Field
                  type="text"
                  className="postal"
                  name="postal"
                  id="postal"
                  placeholder="Поштове відділення"
                />
              </Styled.Column>
              <Styled.BtnColumn>
                <Button type="submit" disabled={isSubmitting}>
                  Зберегти
                </Button>
              </Styled.BtnColumn>
            </Styled.Flex>
          </Form>
        )}
      </Formik>
    </Styled.Wrapper>
  );
};
