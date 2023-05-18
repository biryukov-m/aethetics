import styled from 'styled-components';

type ButtonProps = {
  direction: 'up' | 'down';
};

export const Button = styled.button<ButtonProps>`
  display: block;
  width: 10px;
  height: 10px;
  position: relative;
  cursor: pointer;

  img {
    position: absolute;
    height: 7px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .hover {
    display: none;
  }

  &:hover {
    .default {
      display: none;
    }
    .hover {
      display: block;
    }
  }
  ${(props) => props.direction === 'down' && 'transform: rotate(180deg)'};
`;
