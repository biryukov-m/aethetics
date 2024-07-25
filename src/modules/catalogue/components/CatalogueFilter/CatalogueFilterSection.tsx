import React, { useState } from 'react';
import * as Styled from './CatalogueFilterSection.styled';
import { IFilter } from '../../../../types/filter';
import CatalogueFilterSectionOption from './CatalogueFilterSectionOption';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  header: string;
  options?: IFilter[];
  priceSection?: boolean;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CatalogueFilterSection: React.FC<IProps> = ({
  header,
  options,
  handleFilterChange,
  priceSection = false
}) => {
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
        <fieldset>
          {options &&
            options.map((option) => (
              <CatalogueFilterSectionOption
                key={option._id}
                name={header}
                value={option.name}
                handleFilterChange={handleFilterChange}
              />
            ))}
        </fieldset>
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
