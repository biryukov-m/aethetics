import styled from 'styled-components';
import { MEDIA } from '../../../theme';
import * as Styled from '../../pages/Cabinet.styled';

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  gap: 25px;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 928px;
  @media (max-width: ${MEDIA.tablet}px) {
    flex-direction: column;
    gap: 0;
    margin-bottom: 20px;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 368px;
  @media (max-width: ${MEDIA.tablet}px) {
    width: unset;
    justify-content: space-between;
  }
`;
export const LeftColumn = styled(Column)`
  @media (max-width: ${MEDIA.tablet}px) {
    gap: 20px;
    margin-bottom: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${MEDIA.mobile}px) {
    grid-template-columns: 1fr;
  }
  &:last-of-type {
    margin-right: 7px;
    > input:last-of-type {
      margin-bottom: 0;
    }
  }
`;
export const MobileTab = styled(Styled.MobileTab)``;
export const MobileTabContent = styled(Styled.MobileTabContent)``;
