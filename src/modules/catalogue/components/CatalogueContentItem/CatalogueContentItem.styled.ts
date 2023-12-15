import styled from 'styled-components';
import * as Styled from '../../../common/styled/button.styled';

export const Button = styled(Styled.MiniButton)`
  @media screen and (max-width: 950px) {
    position: absolute;
    background: none;
    right: 3px;
    bottom: 3px;
    width: clamp(24px, 1.2vw, 30px);
    height: clamp(24px, 1.2vw, 30px);
    border: none;
    padding: 0;
    margin: 0;
    transition: none;
    transform: none;
    font-size: 0;
    &::before {
      display: none;
      transition: none;
    }
    > .hover {
      display: none;
    }
    > .default {
      display: block;
    }
  }

  &:hover {
    @media (max-width: 950px) {
      transition: none;
      transform: none;
      > .hover {
        display: block;
      }
      > .default {
        display: none;
      }
    }
  }

  > img {
    display: none;
  }
`;
