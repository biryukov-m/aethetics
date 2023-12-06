import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Styled from './CabinetAddressForm.styled';
import { Button as StyledButton } from '../../../common/button/button.styled';
import { addressValidationSchema } from '../../../../schemas/address.schema';
import { IAddNewAddress, IAddress } from '../../../../types/address';
import addressService from '../../../../services/address.service';

interface IProps {
  setAddresses: React.Dispatch<React.SetStateAction<IAddress[]>>;
}

export const CabinetAddressForm: React.FC<IProps> = ({ setAddresses }) => (
  <Formik
    initialValues={{ city: '', street: '', house: '', apartment: '', postal: '' }}
    validationSchema={addressValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
      const newAddress: IAddNewAddress = { ...values };
      addressService.add(newAddress);
      setAddresses(addressService.addresses);
      setSubmitting(false);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Styled.Wrapper>
        <Form>
          <Styled.Paragraph>Додати нову адресу:</Styled.Paragraph>

          <Field
            type="text"
            className={errors.city && touched.city ? 'error' : null}
            id="city"
            name="city"
            placeholder="Місто"
            required
          />

          <Styled.InputGroup>
            <Field
              type="text"
              className={errors.street && touched.street ? 'error' : null}
              id="street"
              name="street"
              placeholder="Вулиця"
              required
            />

            <Field
              type="text"
              className={errors.house && touched.house ? 'error' : null}
              id="house"
              name="house"
              placeholder="Корпус"
              required
            />

            <Field
              type="text"
              className={errors.apartment && touched.apartment ? 'error' : null}
              id="apartment"
              name="apartment"
              placeholder="Квартира"
            />
          </Styled.InputGroup>

          <Field
            type="text"
            className={errors.postal && touched.postal ? 'error' : null}
            name="postal"
            id="postal"
            placeholder="Поштове відділення або індекс"
            required
          />

          <Styled.ButtonContainer>
            <StyledButton type="submit" disabled={isSubmitting}>
              Зберегти
            </StyledButton>
          </Styled.ButtonContainer>
          {touched.city && <Styled.Error>{errors.city}</Styled.Error>}
          {touched.street && <Styled.Error>{errors.street}</Styled.Error>}
          {touched.house && <Styled.Error>{errors.house}</Styled.Error>}
          {touched.apartment && <Styled.Error>{errors.apartment}</Styled.Error>}
          {touched.postal && <Styled.Error>{errors.postal}</Styled.Error>}
        </Form>
      </Styled.Wrapper>
    )}
  </Formik>
);
