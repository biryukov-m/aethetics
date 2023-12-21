import React from 'react';
import * as Styled from './ArrowButton.styled';
import icon from '../../../../assets/images/icon-arrow.png';
import iconHover from '../../../../assets/images/icon-arrow-hover.png';

interface IProps {
  onClick?: () => void;
  direction: 'up' | 'down';
}

export const ArrowButton: React.FC<IProps> = ({ onClick, direction }) => (
  <Styled.Button type="button" onClick={onClick} {...{ direction }}>
    <img className="default" src={icon} alt="increment" />
    <img className="hover" src={iconHover} alt="increment" />
  </Styled.Button>
);
