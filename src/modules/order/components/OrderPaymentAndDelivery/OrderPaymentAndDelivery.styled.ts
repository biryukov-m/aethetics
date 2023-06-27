import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  form {
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
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${MEDIA.tablet}px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  @media screen and (max-width: ${MEDIA.tablet}px) {
    width: 100%;
  }
  > input:nth-last-child(1) {
    margin-bottom: 0;
  }
`;
export const Legend = styled.legend`
  margin: 0 auto 10px;
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  line-height: 150%;
  color: ${COLORS.text};
`;
export const BtnColumn = styled(Column)`
  align-items: flex-start;
  justify-content: flex-end;
`;
export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  > input {
    margin-bottom: 0;
    width: 100px;
    @media (max-width: ${MEDIA.tablet}px) {
      padding: 10px 5px;
      width: 25%;
    }
  }
`;
