import React from 'react';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterSection from './CatalogueFilterSection';
import useFetchFilters from '../../../hooks/useFetchFilters';
import { IProductFilters } from '../../../../types/products';

interface IProps {
  // filters: IProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>;
}

const CatalogueFilter: React.FC<IProps> = ({ setFilters }) => {
  const { data: filters, error, isPending } = useFetchFilters();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const filterValues = (prevFilters[name as keyof IProductFilters] || []) as string[];
      if (checked) {
        // Add value to filter if it doesn't already exist
        if (!filterValues.includes(value)) {
          return {
            ...prevFilters,
            [name]: [...filterValues, value]
          };
        }
      } else {
        // Remove value from filter
        return {
          ...prevFilters,
          [name]: filterValues.filter((item: string) => item !== value)
        };
      }
      return prevFilters;
    });
  };
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
        {filters.map((f) => (
          <CatalogueFilterSection
            key={f.title}
            header={f.title}
            options={f.options}
            handleFilterChange={handleFilterChange}
          />
        ))}
        <CatalogueFilterSection
          priceSection
          header="Ціна"
          handleFilterChange={handleFilterChange}
        />
      </Styled.Wrapper>
    )) || <>Немає категорій</>
  );
};

export default CatalogueFilter;
