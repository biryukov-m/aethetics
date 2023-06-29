import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  &:nth-last-of-type(1) {
    margin-right: 80px;
  }
`;
export const Text = styled.p`
  color: ${COLORS.black};
  font-size: ${FONTS.SIZES.m};
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.light};
  line-height: 150%;
`;
