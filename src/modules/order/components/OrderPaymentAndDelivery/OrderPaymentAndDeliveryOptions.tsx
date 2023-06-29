import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Styled from './OrderPaymentAndDeliveryOptions.styled';

export const OrderPaymentAndDeliveryOptions: React.FC = () => {
  type DeliveryType = 'by_courier' | 'new_post';
  type PaymentType = 'on_delivery' | 'with_card';

  interface IInitialValues {
    delivery_method: DeliveryType;
    payment_method: PaymentType;
    address_id: number;
  }

  const initialValues: IInitialValues = {
    delivery_method: 'new_post',
    payment_method: 'on_delivery',
    address_id: 1
  };

  return (
    <Styled.Wrapper>
      <Formik {...{ initialValues }} onSubmit={(values) => console.log(values)}>
        {({ values }) => (
          <Form>
            <Styled.Flex>
              <Styled.Column>
                <fieldset>
                  <Styled.Legend>Оберіть спосіб доставки:</Styled.Legend>
                  <Styled.RadioWrapper>
                    <label>
                      <Field type="radio" name="delivery_method" value="new_post" />
                      <Styled.RadioContainer>
                        <Styled.CheckMark />
                        <Styled.RadioText>Нова пошта</Styled.RadioText>
                      </Styled.RadioContainer>
                    </label>
                    <label>
                      <Field type="radio" name="delivery_method" value="by_courier" />
                      <Styled.RadioContainer>
                        <Styled.CheckMark />
                        <Styled.RadioText>
                          Доставка кур’єром (безкоштовно від 2000 грн)
                        </Styled.RadioText>
                      </Styled.RadioContainer>
                    </label>
                  </Styled.RadioWrapper>
                </fieldset>
                <fieldset>
                  <Styled.Legend>Оберіть спосіб оплати:</Styled.Legend>
                  <Styled.RadioWrapper>
                    <label>
                      <Field type="radio" name="payment_method" value="on_delivery" />
                      <Styled.RadioContainer>
                        <Styled.CheckMark />
                        <Styled.RadioText>Оплата при отриманні</Styled.RadioText>
                      </Styled.RadioContainer>
                    </label>
                    <label>
                      <Field type="radio" name="payment_method" value="with_card" />
                      <Styled.RadioContainer>
                        <Styled.CheckMark />
                        <Styled.RadioText>Банківською картою</Styled.RadioText>
                      </Styled.RadioContainer>
                    </label>
                  </Styled.RadioWrapper>
                </fieldset>
              </Styled.Column>
              <Styled.Column>
                <fieldset>
                  <Styled.Legend>Оберіть адресу доставки:</Styled.Legend>
                  <Styled.RadioWrapper>
                    <label>
                      <Field type="radio" name="address_id" value="on_delivery" />
                      <Styled.RadioContainer>
                        <Styled.CheckMark />
                        <Styled.RadioText>Шевченко Світлана</Styled.RadioText>
                        <Styled.RadioText>Місто КиЇв </Styled.RadioText>
                        <Styled.RadioText>Градинська 11б, 85</Styled.RadioText>
                        <Styled.RadioText>+38 068 564 77 99</Styled.RadioText>
                      </Styled.RadioContainer>
                    </label>
                    <label>
                      <Field type="radio" name="address_id" value="with_card" />
                      <Styled.RadioContainer>
                        <Styled.CheckMark />
                        <Styled.RadioText>Шевченко Світлана</Styled.RadioText>
                        <Styled.RadioText>Місто Харків </Styled.RadioText>
                        <Styled.RadioText>Трінклера 18, 65</Styled.RadioText>
                        <Styled.RadioText>+38 068 564 77 99</Styled.RadioText>
                      </Styled.RadioContainer>
                    </label>
                  </Styled.RadioWrapper>
                </fieldset>
              </Styled.Column>
            </Styled.Flex>
            {values.delivery_method}
            {values.payment_method}
            {values.address_id}
          </Form>
        )}
      </Formik>
    </Styled.Wrapper>
  );
};
