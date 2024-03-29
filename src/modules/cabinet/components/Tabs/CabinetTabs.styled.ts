import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';

export const Tabs = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: ${MEDIA.tablet}px) {
    display: none;
  }
`;
export const ListItem = styled.li<{ $active: boolean }>`
  display: block;
  padding-bottom: 7px;
  a {
    font-family: ${FONTS.FAMILIES.normal};
    font-style: normal;
    font-weight: ${(props) => (props.$active ? FONTS.WEIGHTS.normal : FONTS.WEIGHTS.light)};
    text-decoration: ${(props) => (props.$active ? 'underline' : 'none')};
    color: ${COLORS.text};
    cursor: pointer;
    position: relative;
    font-size: clamp(${FONTS.SIZES.m}, 2.3vw, ${FONTS.SIZES.l});

    &:hover {
      &::before {
        display: ${(props) => (props.$active ? 'none' : 'block')};
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
