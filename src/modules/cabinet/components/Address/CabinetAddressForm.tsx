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
    {({ isSubmitting }) => (
      <Styled.Wrapper>
        <Form>
          <Styled.Paragraph>Додати нову адресу:</Styled.Paragraph>
          <Field type="text" className="city" id="city" name="city" placeholder="Місто" required />
          <Styled.InputGroup>
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
          </Styled.InputGroup>

          <Field
            type="text"
            className="postal"
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
        </Form>
      </Styled.Wrapper>
    )}
  </Formik>
);
