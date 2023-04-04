import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBack: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);
  return <button aria-label="go back" type="button" className="go-back" onClick={handleClick} />;
};

export default GoBack;
