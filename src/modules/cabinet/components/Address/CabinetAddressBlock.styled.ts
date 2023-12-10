import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';

export const Item = styled.div<{ $updating?: boolean }>`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  padding: 8px 8px 8px 60px;
  box-shadow: ${(props) =>
    props.$updating &&
    'rgb(255, 255, 255, 1) 52px 0px 0px 0px inset, rgba(255, 255, 0, 0.2) -315px 0px 0px 0px inset;'};
  @media (max-width: ${MEDIA.tablet}px) {
    width: unset;
    padding: 4px 4px 4px 35px;
    margin-bottom: 0;
    box-shadow: ${(props) =>
      props.$updating &&
      'rgb(255, 255, 255, 1) 32px 0px 0px 0px inset, rgba(255, 255, 0, 0.2) -400px 0px 0px 0px inset;'};
  }
`;
export const Index = styled.div`
  position: absolute;
  left: 0;
  top: 3px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: 200;
  font-size: 40px;
  text-align: center;
  color: ${COLORS.white};
  background-color: ${COLORS.accent};
  @media (max-width: ${MEDIA.tablet}px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 3px;
    line-height: 27px;
  }
`;
export const Text = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: 400;
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.black};
  word-wrap: break-word;
  margin-bottom: 2px;
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: ${FONTS.SIZES.s};
  }

  &:last-of-type {
    margin-bottom: 5px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${MEDIA.tablet}px) {
    justify-content: flex-start;
    gap: 15px;
  }
`;
export const Button = styled.button`
  display: inline-block;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: 200;
  font-size: ${FONTS.SIZES.m};
  line-height: 150%;
  text-decoration: underline;
  color: ${COLORS.text};
  cursor: pointer;
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: clamp(12.5px, 2.3vw, 16px);
    line-height: 120%;
  }
  &:hover {
    transform: translate(0, -2px);
    font-weight: 400;
  }
`;
