import React from 'react';
import * as Styled from './CloseButton.styled';
import Icon from '../../../../assets/images/icon-delete-default.png';

interface IProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CloseButton: React.FC<IProps> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    <Styled.CloseIcon src={Icon} alt="close basket" />
  </button>
);
