import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../theme';
import IconBtnArrowRight from '../../../assets/images/icon-button-arrow-right.png';
import IconBtnArrowBottom from '../../../assets/images/icon-button-arrow-bottom.png';

// TODO: add props for different types of button
export interface IButton {
  large?: boolean; // example
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
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.l};
  color: ${COLORS.creamy};
  transition: all 0.2s ease-in;
  @media (max-width: ${MEDIA.tablet}px) {
    width: 132px;
    height: 42px;
    font-size: ${FONTS.SIZES.s};
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
    @media (max-width: ${MEDIA.tablet}px) {
      transform: translate(4px, -4px);
      width: 130px;
      height: 40px;
    }
  }
  &:hover {
    transform: translate(8px, -8px);
    @media (max-width: ${MEDIA.tablet}px) {
      transform: translate(4px, -4px);
    }
    &::before {
      transform: none;
    }
  }
`;
export const MiniButton = styled(Button)`
  width: 97px;
  height: 25px;
  font-size: ${FONTS.SIZES.xs};
  &::before {
    width: 96px;
    height: 25px;
    transform: translate(4px, -4px);
    font-size: 14px;
    line-height: 150%;
  }
  &:hover {
    transform: translate(4px, -4px);
  }
`;
export const ButtonArrowRight = styled.button`
  width: 200px;
  height: 50px;
  border: 2px solid ${COLORS.text};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease-in;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  padding-bottom: 6px;
  color: ${COLORS.text};
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 71px;
    height: 12px;
    background: url(${IconBtnArrowRight});
    right: -38px;
    transition: transform 0.2s ease-in;
  }
  &:hover::before {
    transform: translate(4px, 0);
  }
  @media (max-width: ${MEDIA.tablet}px) {
    width: 132px;
    height: 42px;
    border: 1px solid ${COLORS.text};
    font-size: ${FONTS.SIZES.s};
    padding-bottom: 4px;
    &::before {
      width: 34px;
      height: 7px;
      background-size: cover;
      right: -13px;
      background-position-x: -8px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
export const ButtonWhite = styled(ButtonArrowRight)`
  transition: all 0.2s linear;
  color: ${COLORS.accent};
  &:hover {
    background-color: ${COLORS.accent};
    color: ${COLORS.white};
    border-color: ${COLORS.white};
  }
  &::before {
    display: none;
  }
  &:hover::before {
    transform: none;
  }
`;
export const ButtonArrowBottom = styled.button`
  width: 200px;
  height: 50px;
  border: 2px solid ${COLORS.accent};
  display: flex;
  margin-bottom: 22px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease-in;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.accent};
  @media (max-width: ${MEDIA.tablet}px) {
    width: 132px;
    height: 42px;
    border: 1px solid ${COLORS.accent};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 31px;
    background: url(${IconBtnArrowBottom});
    bottom: -18px;
    transition: transform 0.2s ease-in;
    @media (max-width: ${MEDIA.tablet}px) {
      height: 26px;
      bottom: -18px;
      background-size: cover;
      width: 10px;
      background-repeat: no-repeat;
    }
  }
  &:hover::before {
    transform: translate(0, 4px);
  }
`;
