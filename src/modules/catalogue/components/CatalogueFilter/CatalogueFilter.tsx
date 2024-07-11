import React from 'react';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterGroup from './CatalogueFilterSection';

const CatalogueFilter: React.FC = () => (
  <Styled.Wrapper>
    <CatalogueFilterGroup header="Група товару" options={['Гель', 'Крем', 'Пінка', 'Сироватка']} />
    <CatalogueFilterGroup priceSection header="Ціна" />
  </Styled.Wrapper>
);

export default CatalogueFilter;
