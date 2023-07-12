import styled from 'styled-components';
import { COLORS, FONTS } from '../../theme';

export const Tabs = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  display: block;
  padding-bottom: 7px;
  a {
    font-family: ${FONTS.FAMILIES.normal};
    font-style: normal;
    font-weight: ${FONTS.WEIGHTS.light};
    font-size: ${FONTS.SIZES.l};
    color: ${COLORS.text};
    cursor: pointer;
    position: relative;
    text-decoration: none;
    @media (max-width: 1140px) {
      font-size: clamp(${FONTS.SIZES.m}, 2.3vw, ${FONTS.SIZES.l});
    }
    &.active,
    &:hover {
      font-weight: ${FONTS.WEIGHTS.normal};
      letter-spacing: -0.3px;
      margin: 0;
      &::before {
        display: block;
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${COLORS.text};
      }
    }
  }
`;
