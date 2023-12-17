import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../theme';

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
`;
export const Container = styled.div``;
export const Label = styled.span`
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-size: ${FONTS.SIZES.m};
  line-height: 150%;
  font-weight: 400;
  color: ${COLORS.text};
  margin-right: 15px;
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: clamp(14px, 3.3vw, 19px);
  }
`;
export const Text = styled.span`
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-size: ${FONTS.SIZES.m};
  line-height: 150%;
  font-weight: 400;
  color: $text;
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: clamp(14px, 3.3vw, 19px);
  }
`;
export const BtnContainer = styled.div``;
