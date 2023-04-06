import styled from 'styled-components';
import { COLORS, FONTS } from '../../theme';

// TODO: add props for different types of button
export interface IButton {
  large?: boolean;
}

export const Button = styled.button<IButton>`
  display: flex;
  position: relative;
  width: 219px;
  height: 59px;
  justify-content: center;
  align-items: center;
  background: ${COLORS.accent};
  cursor: pointer;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: ${COLORS.creamy};
  transition: all 0.2s ease-in;

  @media (max-width: 1140px) {
    width: 132px;
    height: 42px;
    font-size: 18px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    box-sizing: border-box;
    transform: translate(8px, -8px);
    border: 1px solid ${COLORS.accent};
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: transform 0.2s ease-in;
    @media (max-width: 1140px) {
      transform: translate(4px, -4px);
      width: 130px;
      height: 40px;
    }
  }

  &:hover {
    transform: translate(8px, -8px);
    @media (max-width: 1140px) {
      transform: translate(4px, -4px);
    }
    &::before {
      transform: none;
    }
  }
`;
