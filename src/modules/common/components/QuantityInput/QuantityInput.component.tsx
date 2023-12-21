import React from 'react';
import * as Styled from './QuantityInput.styled';
import { ArrowButton } from '../arrow/ArrowButton';

interface IProps {
  value: number;
  onIncrease(): void;
  onDecrease(): void;
}

export const QuantityInput: React.FC<IProps> = ({ value, onIncrease, onDecrease }) => (
  <Styled.Container>
    <Styled.Input type="number" readOnly {...{ value }} />
    <Styled.ButtonsWrapper>
      <ArrowButton direction="up" onClick={onIncrease} />
      <ArrowButton direction="down" onClick={onDecrease} />
    </Styled.ButtonsWrapper>
  </Styled.Container>
);
