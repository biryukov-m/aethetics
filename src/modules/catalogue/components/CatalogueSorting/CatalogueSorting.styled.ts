import styled from 'styled-components';
import { COLORS } from '../../../theme';
import IconExpandMore from '../../../../assets/images/icon-expand-more.png';

export const Wrapper = styled.section`
  margin-bottom: 60px;
  @media (max-width: 1140px) {
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 18px;
`;

export const Selector = styled.button`
  cursor: pointer;
  position: relative;
  padding-right: 14px;
  font-size: clamp(17px, 1.9vw, 20px);
  line-height: 120%;
  @media (max-width: 767px) {
    font-size: clamp(14px, 3.4vw, 17px);
  }
  &:hover {
    color: ${COLORS.accent};
  }
  &::after {
    display: block;
    content: '';
    position: absolute;
    background: ${COLORS.text};
    height: 1px;
    left: 0;
    bottom: 3px;
    right: 14px;
  }
  &::before {
    display: block;
    content: '';
    position: absolute;
    right: -2px;
    top: 25%;
    bottom: 0;
    width: 13px;
    background: url(${IconExpandMore}) no-repeat center;
    background-size: contain;
    @media (max-width: 767px) {
      top: 20%;
    }
  }
  &:hover:before {
    transform: translate(0, 3px);
  }
  &:first-of-type {
    display: none;
    @media (max-width: 1140px) {
      display: inline-block;
      margin-right: 39px;
    }
  }
`;
