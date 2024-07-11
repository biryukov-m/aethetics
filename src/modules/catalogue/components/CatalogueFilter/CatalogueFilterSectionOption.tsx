import React, { useState } from 'react';
import * as Styled from './CatalogueFilterSectionOption.styled';

interface IProps {
  name: string;
}

const CatalogueFilterSectionOption: React.FC<IProps> = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Styled.ListItem $checked={isChecked} onClick={() => setIsChecked(!isChecked)}>
      {name}
    </Styled.ListItem>
  );
};

export default CatalogueFilterSectionOption;
