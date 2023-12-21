import styled from 'styled-components';

export const CloseIcon = styled.img`
  transition: all 0.1s ease-in;
  cursor: pointer;
  &:hover {
    filter: grayscale(100%);
    transform: rotateZ(90deg);
  }
`;
