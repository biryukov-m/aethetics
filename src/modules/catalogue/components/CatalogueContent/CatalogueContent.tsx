import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import CatalogueContentItem from '../CatalogueContentItem/CatalogueContentItem';
import useFetchProducts from '../../../hooks/useFetchProducts';
import * as Styled from './CatalogueContent.styled';
import { ButtonArrowBottom as StyledButtonArrowBottom } from '../../../common/styled/button.styled';
import { IProductFilters } from '../../../../types/products';

interface IProps {
  filters: IProductFilters;
  setFilters: React.Dispatch<React.SetStateAction<IProductFilters>>;
}

const CatalogueContent: React.FC<IProps> = ({ filters, setFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isPending, data, error } = useFetchProducts(filters);

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...parsed
    }));
  }, [location.search]);

  useEffect(() => {
    const search = queryString.stringify(filters);
    navigate({
      pathname: '/catalogue',
      search: `?${search}`
    });
  }, [filters]);

  if (error) return <h3>{error.message}</h3>;
  if (isPending) {
    return (
      <Styled.Wrapper>
        <h3>Завантажуємо...</h3>
      </Styled.Wrapper>
    );
  }

  return data ? (
    <Styled.Wrapper>
      <Styled.Grid>
        {data.map((product) => (
          <CatalogueContentItem key={product._id} product={product} />
        ))}
      </Styled.Grid>
      <Styled.ButtonWrapper>
        <StyledButtonArrowBottom type="button">Показати ще</StyledButtonArrowBottom>
      </Styled.ButtonWrapper>
    </Styled.Wrapper>
  ) : (
    <h3>Сталася помилка, не можемо знайти товари</h3>
  );
};

export default CatalogueContent;
