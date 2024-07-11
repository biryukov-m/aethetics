import styled from 'styled-components';
import { FONTS } from '../../../theme';
import IconCheckboxDef from '../../../../assets/images/icon-checkbox-default.png';
import IconCheckboxChecked from '../../../../assets/images/icon-checkbox-alt-checked.png';

export const ListItem = styled.li<{ $checked: boolean }>`
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  padding-left: 25px;
  position: relative;
  margin-bottom: 6px;
  cursor: pointer;
  &:hover {
    font-weight: ${FONTS.WEIGHTS.bold};
  }
  &:before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 20px;
    height: 20px;
    /* TODO: Fix resolving URL bag here */
    /* background-image: ${(props) => (props.$checked ? IconCheckboxChecked : IconCheckboxDef)}; */
    /* background: url(${IconCheckboxChecked}); */
  }
`;
