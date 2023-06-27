import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  form {
    display: flex;
    justify-content: space-between;
    input {
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
      line-height: 150%;
      color: ${COLORS.text};
      border-radius: 0;
      border: 1px solid #000;
      padding: 5px 8px 10px;
      margin-bottom: 28px;
      @media (max-width: ${MEDIA.tablet}px) {
        margin-bottom: 15px;
        font-size: clamp(${FONTS.SIZES.xs}, 3.3vw, ${FONTS.SIZES.s});
      }
      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
      &::placeholder {
        font-family: ${FONTS.FAMILIES.normal};
        font-size: ${FONTS.SIZES.m};
        line-height: 150%;
        color: ${COLORS.grey_text};
      }
    }
    label {
      margin-bottom: 3px;
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
      line-height: 150%;
      color: ${COLORS.text};
      @media (max-width: ${MEDIA.tablet}px) {
        font-size: clamp(14px, 3.3vw, 19px);
        margin-bottom: 0;
      }
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
`;

export const BtnColumn = styled(Column)`
  align-items: center;
  justify-content: flex-end;
`;
