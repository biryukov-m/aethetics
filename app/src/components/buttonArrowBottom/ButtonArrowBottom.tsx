import React from 'react';
import { To, Link } from 'react-router-dom';

type Props = {
  path?: To;
  text: string;
};

export const ButtonArrowBottom: React.FC<Props> = ({ path, text }) => (
  <button type="button" className="btn-arrow-bottom">
    {path ? (
      <Link to={path}>
        <span>{text}</span>
      </Link>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export default ButtonArrowBottom;
