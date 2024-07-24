import React from 'react';
import * as Styled from './SideBar.styled';
import Section from './Section';
import useFetchCategories from '../../../hooks/useFetchFilters';
import { IProductFilters } from '../../../../types/products';

interface IProps {
  // filters: IProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>;
}

const SideBar: React.FC<IProps> = ({ setFilters }) => {
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
          <Section key={idx} header={f.title} options={f.options} onChange={handleFilterChange} />
        ))}
        <Section priceSection header="Ціна" />
      </Styled.Wrapper>
    )) || <>Немає категорій</>
  );
};

export default SideBar;
