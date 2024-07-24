import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';
import IconFilterOpen from '../../../../assets/images/icon-filter-open.png';
import IconFilterClose from '../../../../assets/images/icon-filter-close.png';

export const Wrapper = styled.div`
  margin-bottom: 8px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 17px;
  margin-right: 3px;
`;

export const HeaderText = styled.h4`
  cursor: pointer;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.l};
  color: ${COLORS.text};
  &:hover {
    font-weight: ${FONTS.WEIGHTS.bold};
  }
`;

export const ExpandIcon = styled.span`
  display: block;
  width: 11px;
  height: 11px;
  position: relative;
  cursor: pointer;
  background: url(${IconFilterOpen});
  top: 3px;
`;

export const UnExpandIcon = styled(ExpandIcon)`
  background: url(${IconFilterClose});
  top: 6px;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 18px;

  input {
    width: 90px;
    height: 24px;
    padding: 16px 2px 25px;
    font-family: ${FONTS.FAMILIES.normal};
    font-style: normal;
    font-weight: ${FONTS.WEIGHTS.normal};
    font-size: ${FONTS.SIZES.m};
    color: ${COLORS.text};
    position: relative;
    &::placeholder {
      font-family: ${FONTS.FAMILIES.normal};
      font-style: normal;
      font-weight: ${FONTS.WEIGHTS.normal};
      font-size: ${FONTS.SIZES.m};
      color: rgba(72, 72, 71, 0.5);
    }
  }
  span {
    display: inline-block;
    width: 15px;
    height: 1px;
    background-color: ${COLORS.accent};
  }
`;
