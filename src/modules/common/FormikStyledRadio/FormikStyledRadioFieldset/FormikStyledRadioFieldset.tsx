import React, { ReactNode } from 'react';
import * as Styled from './FormikStyledRadioFieldset.styled';

interface IProps {
  legend: string;
  children: ReactNode;
}

export const FormikStyledRadioFieldset: React.FC<IProps> = ({ legend, children }) => (
  <fieldset>
    <Styled.Legend>{legend}</Styled.Legend>
    <Styled.RadioWrapper>{children}</Styled.RadioWrapper>
  </fieldset>
);
