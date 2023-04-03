import React from 'react';

const GoBack: React.FC = () => (
  <button
    aria-label="go back"
    type="button"
    className="go-back"
    onClick={() => window.history.back()}
  />
);

export default GoBack;
