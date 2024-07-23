import React from 'react';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterSection from './CatalogueFilterSection';
import useFetchCategories from '../../../hooks/useFetchCategories';

const CatalogueFilter: React.FC = () => {
  const { data: categories, error, isPending } = useFetchCategories();

  if (isPending) {
    return <>...</>;
  }

  if (error) {
    return <>Сталася помилка </>;
  }

  return categories ? (
    <Styled.Wrapper>
      <CatalogueFilterSection
        header="Група товару"
        options={categories.map((category) => category.name)}
      />
      <CatalogueFilterSection priceSection header="Ціна" />
    </Styled.Wrapper>
  ) : (
    <>Немає категорій</>
  );
};

export default CatalogueFilter;
