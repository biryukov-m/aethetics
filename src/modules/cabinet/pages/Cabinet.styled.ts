import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../theme';
import expandIcon from '../../../assets/images/icon-expand-more.png';

export const Section = styled.section`
  margin: 51px 0 10px;
  @media (max-width: 1140px) {
    margin: 30px 0 10px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1016px;
`;
export const Header = styled.h2`
  width: fit-content;
  margin: 0 auto 27px;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.xl};
  color: ${COLORS.text};
  @media (max-width: 1140px) {
    font-size: clamp(${FONTS.SIZES.m}, 3.7vw, ${FONTS.SIZES.xl});
  }
`;
export const MobileTab = styled.h3`
  display: none;
  @media (max-width: ${MEDIA.tablet}px) {
    display: block;
    font-size: clamp(${FONTS.SIZES.s}, 3.3vw, ${FONTS.SIZES.m});
    line-height: 100%;
    padding: 10px;
    border: 1px solid #000;
    margin-bottom: 20px;
    position: relative;
    &::after {
      position: absolute;
      display: block;
      content: '';
      top: 16px;
      right: 3%;
      width: 11px;
      height: 6px;
      background: url(${expandIcon}) no-repeat center;
    }
    &:hover,
    &.active {
      cursor: pointer;
      font-weight: ${FONTS.WEIGHTS.bold};
    }
    &.active {
      @media (max-width: ${MEDIA.tablet}px) {
        &::after {
          transform: rotate(180deg);
        }
        &:hover {
          cursor: default;
        }
      }
    }
  }
`;
