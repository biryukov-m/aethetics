import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../theme';
import expandIcon from '../../../assets/images/icon-expand-more.png';
import { Layout as GlobalLayout } from '../../common/styled/layout.styled';

export const Layout = styled(GlobalLayout)`
  margin: 51px auto 10px;
  width: 928px;
  @media (max-width: 1140px) {
    width: 96%;
  }
  @media (max-width: ${MEDIA.tablet}px) {
    margin-top: 30px;
  }
`;

export const Header = styled.h2`
  width: fit-content;
  margin: 0 auto 27px;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.xl};
  color: ${COLORS.text};
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: clamp(${FONTS.SIZES.m}, 3.7vw, ${FONTS.SIZES.xl});
  }
`;
export const MobileTab = styled.h3<{ $active?: boolean }>`
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
    ${(props) =>
      props.$active &&
      `font-weight: ${FONTS.WEIGHTS.bold};       
      @media (max-width: ${MEDIA.tablet}px) {
        &::after {
          transform: rotate(180deg);
        }
      }`}
  }
  a {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
      font-weight: ${FONTS.WEIGHTS.bold};
    }
  }
`;
export const MobileTabContent = styled.div`
  // Included mobile tab animation start
  overflow: hidden;
  @media (max-width: ${MEDIA.tablet}px) {
    animation: scroll 0.3s ease-in;
    position: relative;
    @keyframes scroll {
      from {
        top: -500px;
        opacity: 0;
      }
      to {
        top: 0;
        opacity: 1;
      }
    }
  }
  // Included mobile tab animation end
  margin-bottom: 30px;
  @media (max-width: ${MEDIA.tablet}px) {
    margin-bottom: 20px;
  }
`;
