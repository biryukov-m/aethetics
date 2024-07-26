import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const Wrapper = styled.div`
  flex-basis: 228px;
  flex-shrink: 0;
  @media (max-width: 1140px) {
    /* display: none; */
    position: absolute;
    background-color: ${COLORS.white};
    padding: 30px 50px;
    z-index: 1000;
    border: solid 1px ${COLORS.grey_text};
  }
`;
