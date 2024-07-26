import styled from 'styled-components';
import { FONTS } from '../../../theme';

export const Wrapper = styled.div`
  max-height: 365px;
  overflow-y: scroll;
  margin-bottom: 8px;
  padding-right: 32px;
`;
export const TotalPrice = styled.p`
  margin-bottom: 48px;
  padding-right: 50px;
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.m};
  text-align: right;
`;
export const Header = styled.h3`
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.m};
  margin-bottom: 48px;
  text-align: right;
`;
