import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Styled from './CabinetAddressForm.styled';
import { Button as StyledButton } from '../../../common/styled/button.styled';
import { addressValidationSchema } from '../../../../schemas/address.schema';
import { IAddNewAddress, IAddress, IUpdateAddress } from '../../../../types/address';
import addressService from '../../../../services/address.service';

interface IProps {
  setAddresses: React.Dispatch<React.SetStateAction<IAddress[]>>;
  updateAddress: IAddress | null;
  setUpdateAddress: React.Dispatch<React.SetStateAction<IAddress | null>>;
}

export const CabinetAddressForm: React.FC<IProps> = ({
  setAddresses,
  updateAddress,
  setUpdateAddress
}) => {
  const initialValues = updateAddress
    ? { ...updateAddress }
    : {
        city: '',
        street: '',
        house: '',
        apartment: '',
        postal: ''
      };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={addressValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (updateAddress === null) {
          const newAddress: IAddNewAddress = { ...values };
          addressService.add(newAddress);
        } else {
          const updatedAddress: IUpdateAddress = { uuid: updateAddress.uuid, ...values };
          addressService.update(updatedAddress);
        }
        setAddresses(addressService.addresses);
        setSubmitting(false);
        setUpdateAddress(null);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Styled.Wrapper>
          <Form>
            {updateAddress === null ? (
              <Styled.Paragraph>Додати нову адресу:</Styled.Paragraph>
            ) : (
              <Styled.Paragraph>Змінити адресу {updateAddress.id}:</Styled.Paragraph>
            )}

            <Field
              type="text"
              className={errors.city && touched.city ? 'error' : null}
              id="city"
              name="city"
              placeholder="Місто"
              required
              autoComplete="shiping city address-level2"
            />

            <Styled.InputGroup>
              <Field
                type="text"
                className={errors.street && touched.street ? 'error' : null}
                id="street"
                name="street"
                placeholder="Вулиця"
                required
                autoComplete="shiping street address-level3"
              />

              <Field
                type="text"
                className={errors.house && touched.house ? 'error' : null}
                id="house"
                name="house"
                placeholder="Корпус"
                required
                autoComplete="shiping address-level4"
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
              autoComplete="shipping postal-code"
            />

            <Styled.ButtonContainer>
              <StyledButton type="submit" disabled={isSubmitting}>
                {updateAddress === null ? 'Зберегти' : 'Змінити'}
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
};
