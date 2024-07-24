import React from 'react';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterSection from './CatalogueFilterSection';
import useFetchCategories from '../../../hooks/useFetchFilters';
import { IProductFilters } from '../../../../types/products';

interface IProps {
  // filters: IProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>;
}

const CatalogueFilter: React.FC<IProps> = ({ setFilters }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const { data: filters, error, isPending } = useFetchCategories();
  // TODO: Spinner
  if (isPending) {
    return <>...</>;
  }

  if (error) {
    return <>Сталася помилка </>;
  }

  return (
    (filters && (
      <Styled.Wrapper>
        {filters.map((f, idx) => (
          <CatalogueFilterSection
            key={idx}
            header={f.title}
            options={f.options}
            onChange={handleFilterChange}
          />
        ))}
        <CatalogueFilterSection priceSection header="Ціна" onChange={handleFilterChange} />
      </Styled.Wrapper>
    )) || <>Немає категорій</>
  );
};

export default CatalogueFilter;
