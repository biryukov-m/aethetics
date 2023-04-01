import React from 'react';
import { Link, To } from 'react-router-dom';

type Props = {
  path?: To;
  text: string;
};

const ButtonGreenMini: React.FC<Props> = ({ path, text }) => (
  <button type="button" className="btn-mini">
    {path ? (
      <Link to={path}>
        <span>{text}</span>
      </Link>
    ) : (
      <span>{text}</span>
    )}
  </button>
);

export default ButtonGreenMini;
