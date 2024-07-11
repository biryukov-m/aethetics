import React, { useState } from 'react';
import * as Styled from './CatalogueFilterSection.styled';
import CatalogueFilterSectionOption from './CatalogueFilterSectionOption';

interface IProps {
  header: string;
  options?: string[];
  priceSection?: boolean;
}

const CatalogueFilterSection: React.FC<IProps> = ({ header, options, priceSection = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderText onClick={() => setIsExpanded(!isExpanded)}>{header}</Styled.HeaderText>
        {isExpanded ? <Styled.UnExpandIcon /> : <Styled.ExpandIcon />}
      </Styled.Header>
      {isExpanded && priceSection ? (
        <Styled.PriceSection>
          <input className="minimal" type="number" placeholder="від" />
          <span />
          <input className="maximal" type="number" placeholder="до" />
        </Styled.PriceSection>
      ) : (
        <ul>
          {options && options.map((option) => <CatalogueFilterSectionOption name={option} />)}
        </ul>
      )}
    </Styled.Wrapper>
  );
};

export default CatalogueFilterSection;
