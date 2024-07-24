import React, { useState } from 'react';
import * as Styled from './CatalogueFilterSection.styled';
import { IFilter } from '../../../../types/filter';
import CatalogueFilterSectionOption from './CatalogueFilterSectionOption';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  header: string;
  options?: IFilter[];
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
      {isExpanded && !priceSection && (
        <ul>
          {options &&
            options.map((option, idx) => (
              <CatalogueFilterSectionOption key={idx} name={option.name} />
            ))}
        </ul>
      )}
      {isExpanded && priceSection && (
        <Styled.PriceSection>
          <input type="number" placeholder="від" />
          <span />
          <input type="number" placeholder="до" />
        </Styled.PriceSection>
      )}
    </Styled.Wrapper>
  );
};

export default CatalogueFilterSection;
