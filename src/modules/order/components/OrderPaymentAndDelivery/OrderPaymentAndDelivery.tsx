import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Styled from './OrderPaymentAndDelivery.styled';
import { FormikStyledRadioFieldset } from '../../../common/FormikStyledRadio/FormikStyledRadioFieldset/FormikStyledRadioFieldset';
import { FormikStyledRadioField } from '../../../common/FormikStyledRadio/FormikStyledRadioField/FormikStyledRadioField';
import addressService from '../../../../services/address.service';
import contactsService from '../../../../services/contacts.service';
import { ROUTER_KEYS } from '../../../../constants/routerKeys';

export const OrderPaymentAndDelivery: React.FC = () => {
  type DeliveryType = 'by_courier' | 'new_post';
  type PaymentType = 'on_delivery' | 'with_card';
  interface IInitialValues {
    delivery_method: DeliveryType;
    payment_method: PaymentType;
    address_uuid: string;
  }

  const initialValues: IInitialValues = {
    delivery_method: 'new_post',
    payment_method: 'on_delivery',
    address_uuid: '0'
  };
  const { addresses } = addressService;
  const { contacts } = contactsService;

  const renderAddresses = () =>
    addresses.map((address, idx) => (
      <FormikStyledRadioField key={idx} name="address_uuid" value={`${address.uuid}`}>
        <Styled.Text>
          {contacts.name} {contacts.surname}
        </Styled.Text>
        <Styled.Text>{address.city}</Styled.Text>
        <Styled.Text>
          {address.street} {address.house}
          {address.apartment && `, ${address.apartment}`}
        </Styled.Text>
        <Styled.Text>{address.postal}</Styled.Text>
        <Styled.Text>{contacts.tel}</Styled.Text>
      </FormikStyledRadioField>
    ));

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
              {addresses.length > 0 ? (
                <FormikStyledRadioFieldset legend="Оберіть адресу доставки:">
                  {renderAddresses()}
                </FormikStyledRadioFieldset>
              ) : (
                <Link to={`/${ROUTER_KEYS.cabinet.root}/${ROUTER_KEYS.cabinet.address}`}>
                  Додати адресу
                </Link>
              )}
            </Styled.Column>
          </Styled.Flex>
          {values.delivery_method} / {values.payment_method} / {values.address_uuid}
        </Form>
      )}
    </Formik>
  );
};
