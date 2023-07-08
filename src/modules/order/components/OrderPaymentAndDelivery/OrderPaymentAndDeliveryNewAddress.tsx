import React from 'react';

import { Field, Form, Formik } from 'formik';
import * as Styled from './OrderPaymentAndDeliveryNewAddress.styled';
import { Button } from '../../../common/button/button.styled';
import { IAddNewAddress } from '../../../../types/address';
import addressService from '../../../../services/address.service';
import { addressValidationSchema } from '../../../../schemas/address.schema';

export const OrderPaymentAndDeliveryNewAddress: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log();

  return (
    <Styled.Wrapper>
      <Formik
        initialValues={{ city: '', street: '', house: '', apartment: '', postal: '' }}
        validationSchema={addressValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const newAddress: IAddNewAddress = { ...values };
          addressService.add(newAddress);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Styled.Flex>
              <Styled.Column>
                <Styled.Legend>Додати нову адресу</Styled.Legend>
                <Field
                  type="text"
                  className="city"
                  id="city"
                  name="city"
                  placeholder="Місто"
                  required
                />
                <Styled.Group className="group">
                  <Field
                    type="text"
                    className="street"
                    id="street"
                    name="street"
                    placeholder="Вулиця"
                    required
                  />
                  <Field
                    type="text"
                    className="house"
                    id="house"
                    name="house"
                    placeholder="Корпус"
                    required
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
                  placeholder="Поштове відділення або індекс"
                  required
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
