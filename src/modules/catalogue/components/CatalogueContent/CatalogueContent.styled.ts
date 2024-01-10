import styled from 'styled-components';
import { MEDIA } from '../../../theme';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2px;
`;
export const Grid = styled.div`
  margin-bottom: 44px;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 260px));
  gap: 30px;
  justify-content: center;
  @media (max-width: ${MEDIA.tablet}px) {
    grid-template-columns: repeat(2, minmax(140px, 260px));
    column-gap: 20px;
    row-gap: 14px;
  }
  @media (max-width: ${MEDIA.mobile}px) {
    grid-template-columns: repeat(2, minmax(100px, 260px));
    column-gap: 16px;
    row-gap: 6px;
  }
`;
export const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;
