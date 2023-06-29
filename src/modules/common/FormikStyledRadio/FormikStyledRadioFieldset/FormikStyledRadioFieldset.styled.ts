import styled from 'styled-components';

import IconChecked from '../../../../assets/images/icon-checkbox-alt-checked.png';
import { COLORS, FONTS } from '../../../theme';

export const Legend = styled.legend`
  color: ${COLORS.black};
  font-size: ${FONTS.SIZES.m};
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.light};
  line-height: 150%;
  margin-bottom: 15px;
`;
export const RadioWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  label {
    width: fit-content;
    cursor: pointer;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    input:checked ~ div div {
      background: url(${IconChecked});
    }
  }
`;
