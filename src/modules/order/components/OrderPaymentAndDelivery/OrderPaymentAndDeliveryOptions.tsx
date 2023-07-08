import React from 'react';
import { Formik, Form } from 'formik';
import * as Styled from './OrderPaymentAndDeliveryOptions.styled';
import { FormikStyledRadioFieldset } from '../../../common/FormikStyledRadio/FormikStyledRadioFieldset/FormikStyledRadioFieldset';
import { FormikStyledRadioField } from '../../../common/FormikStyledRadio/FormikStyledRadioField/FormikStyledRadioField';
import addressService from '../../../../services/address.service';

export const OrderPaymentAndDeliveryOptions: React.FC = () => {
  type DeliveryType = 'by_courier' | 'new_post';
  type PaymentType = 'on_delivery' | 'with_card';

  interface IInitialValues {
    delivery_method: DeliveryType;
    payment_method: PaymentType;
    address_id: string;
  }

  const initialValues: IInitialValues = {
    delivery_method: 'new_post',
    payment_method: 'on_delivery',
    address_id: '0'
  };

  const { addresses } = addressService;

  return (
    <Formik {...{ initialValues }} onSubmit={(values) => console.log(values)}>
      {({ values }) => (
        <Form>
          <Styled.Flex>
            <Styled.Column>
              <FormikStyledRadioFieldset legend="Оберіть спосіб доставки:">
                <FormikStyledRadioField name="delivery_method" value="new_post">
                  <Styled.Text>Нова пошта</Styled.Text>
                </FormikStyledRadioField>
                <FormikStyledRadioField name="delivery_method" value="by_courier">
                  <Styled.Text>Доставка кур’єром (безкоштовно від 2000 грн)</Styled.Text>
                </FormikStyledRadioField>
              </FormikStyledRadioFieldset>

              <FormikStyledRadioFieldset legend="Оберіть спосіб оплати:">
                <FormikStyledRadioField name="payment_method" value="on_delivery">
                  <Styled.Text>Оплата при отриманні</Styled.Text>
                </FormikStyledRadioField>
                <FormikStyledRadioField name="payment_method" value="with_card">
                  <Styled.Text>Банківською картою</Styled.Text>
                </FormikStyledRadioField>
              </FormikStyledRadioFieldset>
            </Styled.Column>

            <Styled.Column>
              <FormikStyledRadioFieldset legend="Оберіть адресу доставки:">
                {addresses.map((address) => (
                  <FormikStyledRadioField name="address_id" value={`${address.id}`}>
                    <Styled.Text>Шевченко Світлана</Styled.Text>
                    <Styled.Text>{address.city}</Styled.Text>
                    <Styled.Text>
                      {address.street} {address.house}
                      {address.apartment && `, ${address.apartment}`}
                    </Styled.Text>
                    <Styled.Text>{address.postal}</Styled.Text>
                    <Styled.Text>+38 068 564 77 99</Styled.Text>
                  </FormikStyledRadioField>
                ))}
              </FormikStyledRadioFieldset>
            </Styled.Column>
          </Styled.Flex>
          {values.delivery_method} / {values.payment_method} / {values.address_id}
        </Form>
      )}
    </Formik>
  );
};
