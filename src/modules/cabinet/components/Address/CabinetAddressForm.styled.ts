import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';

export const Form = styled.form`
  max-width: 928px;
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
    color: ${COLORS.text};
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
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 30px;
  @media (max-width: ${MEDIA.tablet}px) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  @media (max-width: ${MEDIA.tablet}px) {
    width: unset;
    justify-content: space-between;
  }
  /* TODO: MOVE TO COMPONENT WITH FILLED ADDRESSES */
  &.addresses {
    width: 235px;
    flex-direction: column;
    @media (max-width: 767px) {
      flex-direction: row;
      width: unset;
      gap: 20px;
    }
  }
  &:last-of-type {
    margin-right: 7px;
    > input:last-of-type {
      margin-bottom: 0;
    }
  }
  .contact {
    position: relative;
    padding-left: 60px;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      padding-left: 35px;
      margin-bottom: 0;
    }
    .nth {
      position: absolute;
      left: 0;
      top: 3px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-family: 'Candara';
      font-weight: 200;
      font-size: 40px;
      text-align: center;
      color: #fff;
      background-color: $accent;
      @media (max-width: 767px) {
        width: 30px;
        height: 30px;
        font-size: 18px;
        top: 3px;
        line-height: 27px;
      }
    }
    p {
      margin-bottom: 2px;
      &:last-of-type {
        margin-bottom: 5px;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      span {
        display: inline-block;
        font-family: 'Candara';
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 150%;
        text-decoration: underline;
        color: $text;
        cursor: pointer;
        @media (max-width: 767px) {
          font-size: clamp(12.5px, 2.3vw, 16px);
          line-height: 120%;
        }
        &:hover {
          transform: translate(0, -2px);
          font-weight: 400;
        }
      }
    }
  }
  p {
    margin-bottom: 13px;
    @media (max-width: 767px) {
      font-size: clamp(14px, 2.5vw, 18px);
      line-height: 120%;
      margin-bottom: 8px;
    }
  }
  input {
    margin-bottom: 10px;
    @media (max-width: 767px) {
      font-size: clamp(14px, 2.5vw, 18px);
      line-height: 120%;
      padding: 10px 5px;
    }
    &::placeholder {
      @media (max-width: 767px) {
        font-size: clamp(14px, 2.5vw, 18px);
        line-height: 120%;
      }
    }
  }
  .group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    input {
      margin: 0;
      width: 100px;
      height: 50px;
      @media (max-width: 767px) {
        padding: 10px 5px;
        margin: 0;
        width: 25%;
        height: 39px;
      }
    }
  }
`;
