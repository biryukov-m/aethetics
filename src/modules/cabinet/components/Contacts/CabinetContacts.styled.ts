import styled from 'styled-components';
import { MEDIA } from '../../../theme';
import { MobileTab } from '../../pages/Cabinet.styled';

export const Header = styled(MobileTab)``;
export const Wrapper = styled.div`
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
      font-family: 'Candara';
      font-style: normal;
      font-size: 20px;
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
      color: $text;
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
