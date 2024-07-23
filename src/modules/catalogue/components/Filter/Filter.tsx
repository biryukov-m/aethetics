import React, { useState } from 'react';
import * as Styled from './Filter.styled';

interface IProps {
  name: string;
}

const Filter: React.FC<IProps> = ({ name }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Styled.ListItem $checked={isChecked} onClick={() => setIsChecked(!isChecked)}>
      {name}
    </Styled.ListItem>
  );
};

export default Filter;
