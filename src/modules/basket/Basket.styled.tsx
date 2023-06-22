import styled from 'styled-components';
import { COLORS, FONTS } from '../theme';

export const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  height: 5000vh;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  max-width: 550px;
  background: ${COLORS.white};
  padding: 26px;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const Header = styled.h3`
  font-size: ${FONTS.SIZES.xl};
`;
export const SubHeader = styled.h4`
  font-weight: ${FONTS.WEIGHTS.light};
  margin-bottom: 15px;
`;
export const ItemsWrapper = styled.div``;
export const ItemsContainer = styled.div``;
export const TotalPrice = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.m};
  margin-bottom: 48px;
  text-align: right;
`;
export const ContinueShopping = styled.a`
  cursor: pointer;
  display: block;
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.l};
  text-decoration: underline;
  margin-bottom: 30px;
`;
export const ButtonContainer = styled.div``;
