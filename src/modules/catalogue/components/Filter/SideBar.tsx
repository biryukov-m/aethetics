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

  if (isPending) {
    return <>...</>;
  }

  if (error) {
    return <>Сталася помилка </>;
  }

  return filters ? (
    <Styled.Wrapper>
      {Object.entries(filters).map((filterArr) => (
        <Section header={filterArr[0]} onChange={handleFilterChange} options={filterArr[1]} />
      ))}
      {/* <Section priceSection header="Ціна" /> */}
    </Styled.Wrapper>
  ) : (
    <>Немає категорій</>
  );
};

export default SideBar;
