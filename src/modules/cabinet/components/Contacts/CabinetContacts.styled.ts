import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';
import { MobileTab } from '../../pages/Cabinet.styled';

export const Header = styled(MobileTab)``;
export const Wrapper = styled.div`
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
  form {
    max-width: 1016px;
    margin: 0 auto;
    position: relative;
    @media (max-width: ${MEDIA.tablet}px) {
      display: block;
    }
    label,
    input,
    input::placeholder {
      font-family: ${FONTS.FAMILIES.normal};
      font-style: normal;
      font-size: ${FONTS.SIZES.m};
      line-height: 150%;
      font-weight: 400;
      color: $text;
      @media (max-width: ${MEDIA.tablet}px) {
        font-size: clamp(14px, 3.3vw, 19px);
      }
    }
    label {
      margin-bottom: 3px;
      @media (max-width: ${MEDIA.tablet}px) {
        margin-bottom: 0;
      }
    }
    input {
      border-radius: 0;
      border: 1px solid #000;
      color: ${COLORS.black};
      padding: 5px 8px 10px;
      margin-bottom: 28px;
      @media (max-width: ${MEDIA.tablet}px) {
        margin-bottom: 15px;
      }
      &::placeholder {
        color: #b3b3b2;
      }
    }
  }
`;
