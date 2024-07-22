import React from 'react';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterSection from './CatalogueFilterSection';

const CatalogueFilter: React.FC = () => (
  <Styled.Wrapper>
    <CatalogueFilterSection
      header="Група товару"
      options={['Гель', 'Крем', 'Пінка', 'Сироватка']}
    />
    <CatalogueFilterSection priceSection header="Ціна" />
  </Styled.Wrapper>
);

export default CatalogueFilter;
