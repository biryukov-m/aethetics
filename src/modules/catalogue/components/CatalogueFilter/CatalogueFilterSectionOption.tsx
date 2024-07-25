import React, { useState } from 'react';
import * as Styled from './CatalogueFilterSectionOption.styled';

interface IProps {
  name: string;
  value: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CatalogueFilterSectionOption: React.FC<IProps> = ({ name, value, handleFilterChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    // TODO: fix checkbox is checked when filter is enabled from url
    <Styled.Label $checked={isChecked} onMouseUp={() => setIsChecked(!isChecked)}>
      <input onChange={handleFilterChange} name={name} value={value} type="checkbox" />
      {value}
    </Styled.Label>
  );
};

export default CatalogueFilterSectionOption;
