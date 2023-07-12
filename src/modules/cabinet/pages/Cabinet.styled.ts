import styled from 'styled-components';
import { COLORS, FONTS } from '../../theme';

export const Section = styled.section`
  margin: 51px 0 10px;
  @media (max-width: 1140px) {
    margin: 30px 0 10px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1016px;
`;
export const Header = styled.h2`
  width: fit-content;
  margin: 0 auto 27px;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.light};
  font-size: ${FONTS.SIZES.xl};
  color: ${COLORS.text};
  @media (max-width: 1140px) {
    font-size: clamp(${FONTS.SIZES.m}, 3.7vw, ${FONTS.SIZES.xl});
  }
`;
