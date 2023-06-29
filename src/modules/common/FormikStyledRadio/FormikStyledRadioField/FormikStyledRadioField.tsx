import React, { ReactNode } from 'react';
import { Field } from 'formik';
import * as Styled from './FormikStyledRadioField.styled';

interface IProps {
  name: string;
  value: string;
  children: ReactNode;
}

export const FormikStyledRadioField: React.FC<IProps> = ({ name, value, children }) => (
  <label>
    <Field type="radio" {...{ name }} {...{ value }} />
    <Styled.RadioContainer>
      <Styled.CheckMark />
      {children}
    </Styled.RadioContainer>
  </label>
);
