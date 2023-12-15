import styled from 'styled-components';
import { MEDIA } from '../../../theme';

export const Wrapper = styled.div`
  padding: 0px 32px;
  margin-bottom: 50px;
  @media screen and (max-width: ${MEDIA.tablet}px) {
    padding: 0;
  }
  form {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${MEDIA.tablet}px) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
