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
  const handleExpand = () => setIsExpanded(!isExpanded);
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
        isExpanded && (
          <ul>
            {options && options.map((option) => <CatalogueFilterSectionOption name={option} />)}
          </ul>
        )
      )}
    </Styled.Wrapper>
  );
};

export default CatalogueFilterSection;
