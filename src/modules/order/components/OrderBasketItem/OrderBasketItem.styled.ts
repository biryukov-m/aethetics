import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Flex = styled.div`
  display: grid;
  grid-template-columns: 100px 240px 86px max-content 85px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px ${COLORS.accent} solid;
  &:first-of-type {
    border-top: 1px ${COLORS.accent} solid;
  }
`;
export const ImageCol = styled.div`
  height: 100px;
`;
export const Name = styled.p`
  align-self: self-start;
  margin-top: 10px;
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  font-weight: ${FONTS.WEIGHTS.light};
  color: ${COLORS.black};
`;
export const QuantityInputWrapper = styled.div`
  height: 45px;
`;
export const Price = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  font-weight: ${FONTS.WEIGHTS.light};
  color: ${COLORS.black};
`;
