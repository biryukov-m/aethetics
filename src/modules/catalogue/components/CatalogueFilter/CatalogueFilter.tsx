import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Styled from './CatalogueFilter.styled';
import CatalogueFilterSection from './CatalogueFilterSection';
import useFetchFilters from '../../../hooks/useFetchFilters';
import { IProductFilters } from '../../../../types/products';
import { ROUTER_KEYS } from '../../../../constants/appKeys';

interface IProps {
  currentFilters: IProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>;
}

const CatalogueFilter: React.FC<IProps> = ({ currentFilters, setFilters }) => {
  const { data: filters, error, isPending } = useFetchFilters();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialFilters: IProductFilters = {
      category: params.get('category')?.split(',') ?? [],
      skinType: params.get('skinType')?.split(',') ?? [],
      ageGroup: params.get('ageGroup')?.split(',') ?? [],
      purpose: params.get('purpose')?.split(',') ?? []
    };
    setFilters(initialFilters);
  }, [location.search, setFilters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const filterValues = (prevFilters[name as keyof IProductFilters] || []) as string[];
      let newFilters: IProductFilters = { ...prevFilters };

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

      const params = new URLSearchParams(location.search);
      Object.keys(newFilters).forEach((key) => {
        if ((newFilters[key as keyof IProductFilters]?.length ?? 0) > 0) {
          params.set(key, newFilters[key as keyof IProductFilters]!.join(','));
        } else {
          params.delete(key);
        }
      });
      navigate({ pathname: `/${ROUTER_KEYS.catalogue}`, search: params.toString() });

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
    (filters && (
      <Styled.Wrapper>
        {filters.map((f) => (
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
