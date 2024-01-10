import React from 'react';
import CatalogueContentItem from '../CatalogueContentItem/CatalogueContentItem';
import useFetchProducts from '../../../hooks/useFetchProducts';
import * as Styled from './CatalogueContent.styled';
import { ButtonArrowBottom as StyledButtonArrowBottom } from '../../../common/styled/button.styled';

const CatalogueContent: React.FC = () => {
  const { isPending, data, error } = useFetchProducts();

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
