import styled from 'styled-components';
import { FONTS, MEDIA } from '../../theme';
import expandIcon from '../../../assets/images/icon-expand-more.png';

export const Header = styled.h3`
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
export const Wrapper = styled.div`
  margin-bottom: 30px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
  form {
    max-width: 1016px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 767px) {
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
      @media (max-width: 767px) {
        font-size: clamp(14px, 3.3vw, 19px);
      }
    }
    label {
      margin-bottom: 3px;
      @media (max-width: 767px) {
        margin-bottom: 0;
      }
    }
    input {
      border-radius: 0;
      border: 1px solid #000;
      color: $text;
      padding: 5px 8px 10px;
      margin-bottom: 28px;
      @media (max-width: 767px) {
        margin-bottom: 15px;
      }
      &::placeholder {
        color: #b3b3b2;
      }
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
  &:last-of-type input:last-of-type {
    margin-bottom: 61px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;
export const ExitBtnContainer = styled.div`
  margin-top: 5px;
  margin-right: 12px;
  @media (max-width: 767px) {
    align-self: flex-end;
  }
`;
export const SubmitBtnContainer = styled.div`
  margin-top: -42px;
`;
