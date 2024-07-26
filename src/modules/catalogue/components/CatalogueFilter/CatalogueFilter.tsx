import React from 'react';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterSection from './CatalogueFilterSection';
import useFetchFilters from '../../../hooks/useFetchFilters';
import { IProductFilters } from '../../../../types/products';
import useUrlFilters from '../../../hooks/useUrlFilters';

interface IProps {
  currentFilters: IProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>;
}

const CatalogueFilter: React.FC<IProps> = ({ currentFilters, setFilters }) => {
  const { data: filterHeaders, error, isPending } = useFetchFilters();
  const { updateUrlFilters } = useUrlFilters(setFilters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setFilters((prevFilters) => {
      let newFilters: IProductFilters = { ...prevFilters };

      if (type === 'checkbox') {
        const filterValues = (prevFilters[name as keyof IProductFilters] || []) as string[];
        if (checked) {
          if (!filterValues.includes(value)) {
            newFilters = {
              ...prevFilters,
              [name]: [...filterValues, value]
            };
          }
        } else {
          newFilters = {
            ...prevFilters,
            [name]: filterValues.filter((item: string) => item !== value)
          };
        }
      } else if (type === 'number') {
        newFilters = {
          ...prevFilters,
          [name]: value ? parseInt(value, 10) : null
        };
      }

      updateUrlFilters(newFilters);

      return newFilters ?? prevFilters;
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
    (filterHeaders && (
      <Styled.Wrapper>
        {filterHeaders.map((f) => (
          <CatalogueFilterSection
            key={f.title}
            header={f.title}
            options={f.options}
            handleFilterChange={handleFilterChange}
            currentFilters={currentFilters}
          />
        ))}
        <CatalogueFilterSection
          priceSection
          header="Ціна"
          handleFilterChange={handleFilterChange}
          currentFilters={currentFilters}
        />
      </Styled.Wrapper>
    )) || <>Немає категорій</>
  );
};

export default CatalogueFilter;
