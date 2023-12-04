import styled from 'styled-components';
import { COLORS, MEDIA } from '../../../theme';
import * as Styled from '../../pages/Cabinet.styled';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  gap: 15px;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 928px;
  @media (max-width: ${MEDIA.tablet}px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 20px;
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
      color: ${COLORS.white};
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
`;
export const MobileTab = styled(Styled.MobileTab)``;
export const MobileTabContent = styled(Styled.MobileTabContent)``;
