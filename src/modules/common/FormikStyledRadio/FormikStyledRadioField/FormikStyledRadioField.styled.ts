import styled from 'styled-components';
import IconDefault from '../../../../assets/images/icon-checkbox-default.png';

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
