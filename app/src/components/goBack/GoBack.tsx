import React from "react";

const GoBack: React.FC = () => (
  <span className="go-back" onClick={(e) => window.history.back()} />
);

export default GoBack;
