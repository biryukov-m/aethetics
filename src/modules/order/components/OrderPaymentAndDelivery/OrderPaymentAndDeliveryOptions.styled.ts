import styled from 'styled-components';
import IconDefault from '../../../../assets/images/icon-checkbox-default.png';
import IconChecked from '../../../../assets/images/icon-checkbox-alt-checked.png';
import { COLORS, FONTS } from '../../../theme';

export const Wrapper = styled.div``;
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
export const RadioContainer = styled.div`
  position: relative;
  padding-left: 35px;
`;
export const CheckMark = styled.div`
  position: absolute;
  left: 0;
  top: 2px;
  width: 20px;
  height: 20px;
  background: url(${IconDefault});
`;
export const RadioText = styled.p`
  color: ${COLORS.black};
  font-size: ${FONTS.SIZES.m};
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.light};
  line-height: 150%;
`;
