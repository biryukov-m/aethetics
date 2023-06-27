import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../theme';

export const Header = styled.h3`
  text-align: center;
  font-size: 40px;
  font-family: Candara;
  color: ${COLORS.text};
  margin: 54px auto 20px;
  @media screen and (max-width: ${MEDIA.tablet}px) {
    font-size: 24px;
    margin: 40px auto 35px;
  }
  @media screen and (max-width: ${MEDIA.mobile}px) {
    font-size: 18px;
    margin: 30px auto 45px;
  }
`;
export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Tab = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:nth-last-of-type(1) {
    margin-right: 15px;
  }
  span {
    color: ${COLORS.black};
    font-size: ${FONTS.SIZES.l};
    font-family: ${FONTS.FAMILIES.normal};
  }
`;
export const Counter = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.xl};
  font-weight: ${FONTS.WEIGHTS.normal};
  background-color: ${COLORS.white};
  color: ${COLORS.accent};
  border: 1px solid ${COLORS.accent};
  text-align: center;
  vertical-align: middle;
  &.active {
    background-color: ${COLORS.accent};
    color: ${COLORS.creamy};
  }
`;
