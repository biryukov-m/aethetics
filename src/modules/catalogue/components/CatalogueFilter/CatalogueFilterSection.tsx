import React, { useState } from 'react';
import * as Styled from './CatalogueFilterSection.styled';
import { IFilterOption } from '../../../../types/filter';
import CatalogueFilterSectionOption from './CatalogueFilterSectionOption';
import { IProductFilters } from '../../../../types/products';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  header: string;
  options?: IFilterOption[];
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentFilters: IProductFilters;
  priceSection?: boolean;
}

const filterHeadersMap = {
  ageGroup: 'Вік',
  category: 'Тип продукту',
  skinType: 'Тип шкіри',
  purpose: 'Призначення'
};

const isValidHeader = (header: string): header is keyof typeof filterHeadersMap =>
  header in filterHeadersMap;

const CatalogueFilterSection: React.FC<IProps> = ({
  header,
  options,
  handleFilterChange,
  currentFilters,
  priceSection = false
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleExpand = () => setIsExpanded(!isExpanded);
  const localizedHeader = isValidHeader(header) ? filterHeadersMap[header] : header;

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.HeaderText onClick={handleExpand}>{localizedHeader}</Styled.HeaderText>
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
                checked={
                  currentFilters[header as keyof IProductFilters]?.includes(option.name) ?? false
                }
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
