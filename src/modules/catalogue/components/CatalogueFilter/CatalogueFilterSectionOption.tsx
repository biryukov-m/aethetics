import React from 'react';
import * as Styled from './CatalogueFilterSectionOption.styled';

interface IProps {
  name: string;
  value: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CatalogueFilterSectionOption: React.FC<IProps> = ({
  name,
  value,
  handleFilterChange,
  checked
}) => (
  <Styled.Label $checked={checked}>
    <input
      onChange={handleFilterChange}
      name={name}
      value={value}
      type="checkbox"
      checked={checked}
    />
    {value}
  </Styled.Label>
);

export default CatalogueFilterSectionOption;
