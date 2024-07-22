import React from 'react';
import * as Styled from './CatalogueSorting.styled';

const CatalogueSorting: React.FC = () => (
  <Styled.Wrapper>
    <Styled.Container>
      <Styled.Selector>Фільтри</Styled.Selector>
      <Styled.Selector>Сортування</Styled.Selector>
    </Styled.Container>
  </Styled.Wrapper>
);

export default CatalogueSorting;
