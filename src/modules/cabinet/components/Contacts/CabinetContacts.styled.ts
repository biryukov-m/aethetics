import styled from 'styled-components';
import { MEDIA } from '../../../theme';
import { MobileTab } from '../../pages/Cabinet.styled';

export const Header = styled(MobileTab)``;
export const Wrapper = styled.div`
  // Included mobile tab animation start
  overflow: hidden;
  @media (max-width: ${MEDIA.tablet}px) {
    animation: scroll 0.3s ease-in;
    position: relative;
    @keyframes scroll {
      from {
        top: -500px;
        opacity: 0;
      }
      to {
        top: 0;
        opacity: 1;
      }
    }
  }
  // Included mobile tab animation end
  margin-bottom: 30px;
  @media (max-width: ${MEDIA.tablet}px) {
    margin-bottom: 20px;
  }
`;
