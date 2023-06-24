import styled from 'styled-components';
import { COLORS, MEDIA } from '../../theme';

export const Header = styled.h3`
  text-align: center;
  font-size: 40px;
  font-family: Candara;
  color: ${COLORS.text};
  margin: 54px auto 20px;
  @media screen and (max-width: ${MEDIA.tablet}px) {
    font-size: 24px;
    margin: 40px auto 35px;
  }
  @media screen and (max-width: ${MEDIA.mobile}px) {
    font-size: 18px;
    margin: 30px auto 45px;
  }
`;
