import React, { useState } from 'react';
import * as Styled from './Section.styled';

import { IFilter } from '../../../../types/filter';
import Filter from './Filter';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  header: string;
  options: IFilter[];
  priceSection?: boolean;
}

const Section: React.FC<IProps> = ({ header, options, priceSection = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpand = () => setIsExpanded(!isExpanded);
  console.log(options);

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderText onClick={handleExpand}>{header}</Styled.HeaderText>
        {isExpanded ? (
          <Styled.UnExpandIcon onClick={handleExpand} />
        ) : (
          <Styled.ExpandIcon onClick={handleExpand} />
        )}
      </Styled.Header>
      {isExpanded && priceSection ? (
        <Styled.PriceSection>
          <input type="number" placeholder="від" />
          <span />
          <input type="number" placeholder="до" />
        </Styled.PriceSection>
      ) : (
        isExpanded && <ul>{options && options.map((option) => <Filter name={option.name} />)}</ul>
      )}
    </Styled.Wrapper>
  );
};

export default Section;
