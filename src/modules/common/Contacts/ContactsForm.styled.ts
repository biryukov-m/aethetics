import styled from 'styled-components';
import { COLORS, FONTS, MEDIA } from '../../theme';

export const Container = styled.div`
  width: 100%;
  label,
  input,
  input::placeholder {
    font-family: ${FONTS.FAMILIES.normal};
    font-style: normal;
    font-size: ${FONTS.SIZES.m};
    line-height: 150%;
    font-weight: 400;
    color: ${COLORS.text};
    @media (max-width: ${MEDIA.tablet}px) {
      font-size: clamp(14px, 3.3vw, 19px);
    }
  }
  label {
    margin-bottom: 3px;
    @media (max-width: ${MEDIA.tablet}px) {
      margin-bottom: 0;
    }
  }
  input {
    border-radius: 0;
    border: 1px solid #000;
    color: ${COLORS.black};
    padding: 5px 8px 10px;
    margin-bottom: 28px;
    @media (max-width: ${MEDIA.tablet}px) {
      margin-bottom: 15px;
    }
    &::placeholder {
      color: #b3b3b2;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 24px;
  @media (max-width: ${MEDIA.tablet}px) {
    flex-direction: column;
    gap: 0;
    margin: 0;
  }
`;
export const FlexBtns = styled(Flex)`
  @media (max-width: ${MEDIA.tablet}px) {
    flex-direction: row;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  @media (max-width: ${MEDIA.tablet}px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const SecondaryBtnContainer = styled.div`
  @media (max-width: ${MEDIA.tablet}px) {
    align-self: flex-end;
  }
`;
export const SubmitBtnContainer = styled.div`
  @media (max-width: ${MEDIA.tablet}px) {
  }
`;
