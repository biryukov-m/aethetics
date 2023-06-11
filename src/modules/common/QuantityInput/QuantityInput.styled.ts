import styled from 'styled-components';
import { COLORS, FONTS } from '../../theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.l};
  font-weight: ${FONTS.WEIGHTS.light};
  color: ${COLORS.text};
  cursor: default;
  /* Hide the default number input arrows */
  -moz-appearance: textfield;
  appearance: textfield;
  /* Remove the increment and decrement buttons */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  right: 18px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
