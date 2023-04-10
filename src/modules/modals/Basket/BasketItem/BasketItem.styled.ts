import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px ${COLORS.accent} solid;
`;
export const ImageCol = styled.div`
  width: 100px;
  height: 100px;
`;
export const NameAndQuantityCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 100px;
`;
export const Name = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  font-weight: ${FONTS.WEIGHTS.light};
  color: ${COLORS.black};
`;
export const QuantityInput = styled.input`
  width: 86px;
  height: 45px;
  padding: 0 15px;
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.l};
  font-weight: ${FONTS.WEIGHTS.light};
  color: ${COLORS.text};
`;
export const RemoveAndPriceCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100px;
`;
export const RemoveBtn = styled.button`
  cursor: pointer;
  transition: all 0.1s ease-in;
  :hover {
    filter: grayscale(100%);
    transform: rotateZ(90deg);
  }
`;
export const Price = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  font-weight: ${FONTS.WEIGHTS.light};
  color: ${COLORS.black};
`;
