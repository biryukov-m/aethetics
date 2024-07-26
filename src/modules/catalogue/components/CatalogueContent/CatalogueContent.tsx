import React from 'react';
import CatalogueContentItem from '../CatalogueContentItem/CatalogueContentItem';
import useFetchProducts from '../../../hooks/useFetchProducts';
import * as Styled from './CatalogueContent.styled';
import { ButtonArrowBottom as StyledButtonArrowBottom } from '../../../common/styled/button.styled';
import { IProductFilters } from '../../../../types/products';

interface IProps {
  filters: IProductFilters;
}

const CatalogueContent: React.FC<IProps> = ({ filters }) => {
  const { isPending, data, error } = useFetchProducts(filters);

  if (error) return <h3>{error.message}</h3>;
  if (isPending) {
    return (
      <Styled.Wrapper>
        <h3>Завантажуємо...</h3>
      </Styled.Wrapper>
    );
  }

  return data && data.length > 0 ? (
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
    <h3>Товарів не знайдено</h3>
  );
};

export default CatalogueContent;
