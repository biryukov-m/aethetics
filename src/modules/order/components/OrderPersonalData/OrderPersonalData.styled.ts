import styled from 'styled-components';
import { MEDIA } from '../../../theme';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  form {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${MEDIA.tablet}px) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
