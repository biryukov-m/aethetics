import styled from 'styled-components';
import { MEDIA } from '../../../theme';

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
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  @media (max-width: ${MEDIA.tablet}px) {
    width: 100%;
    justify-content: space-between;
  }
  &:last-of-type input:last-of-type {
    margin-bottom: 61px;
    @media (max-width: ${MEDIA.tablet}px) {
      margin-bottom: 20px;
    }
  }
`;
export const ExitBtnContainer = styled.div`
  margin-top: 5px;
  margin-right: 12px;
  @media (max-width: ${MEDIA.tablet}px) {
    align-self: flex-end;
  }
`;
export const SubmitBtnContainer = styled.div`
  @media (max-width: ${MEDIA.tablet}px) {
    margin-top: -42px;
  }
`;
