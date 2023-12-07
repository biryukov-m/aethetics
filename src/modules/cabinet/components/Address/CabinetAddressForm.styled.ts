import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../../theme';

export const Wrapper = styled.div`
  input {
    width: 100%;
    padding: 10px 5px;
    border: 1px solid ${COLORS.black};
    border-radius: 0;
    margin-bottom: 10px;
    font-family: ${FONTS.FAMILIES.normal};
    font-style: normal;
    font-size: ${FONTS.SIZES.m};
    line-height: 150%;
    font-weight: 400;
    color: ${COLORS.text};
    @media (max-width: ${MEDIA.tablet}px) {
      margin-bottom: 5px;
      font-size: clamp(14px, 2.5vw, 18px);
      line-height: 120%;
      padding: 10px 5px;
    }
    &::placeholder {
      font-family: ${FONTS.FAMILIES.normal};
      font-style: normal;
      font-size: ${FONTS.SIZES.m};
      line-height: 150%;
      font-weight: 400;
      color: ${COLORS.grey_text};
      @media (max-width: ${MEDIA.tablet}px) {
        font-size: clamp(14px, 2.5vw, 18px);
        line-height: 120%;
      }
    }
    &.error {
      border-color: rgb(200, 10, 10);
    }
  }
`;
export const Paragraph = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-size: ${FONTS.SIZES.m};
  line-height: 150%;
  font-weight: 400;
  color: ${COLORS.text};
  margin-bottom: 13px;
  @media (max-width: ${MEDIA.tablet}px) {
    font-size: clamp(14px, 3.3vw, 19px);
    margin-bottom: 8px;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 100px;
    @media (max-width: ${MEDIA.tablet}px) {
      width: 25%;
    }
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 18px;
`;
export const Error = styled.p`
  margin-bottom: 10px;
  font-family: ${FONTS.FAMILIES.normal};
  font-style: normal;
  font-size: ${FONTS.SIZES.xs};
  line-height: 150%;
  font-weight: 400;
  color: ${COLORS.error};
  @media (max-width: ${MEDIA.tablet}px) {
    margin-bottom: 5px;
    font-size: ${FONTS.SIZES.xxs};
    line-height: 120%;
  }
`;
