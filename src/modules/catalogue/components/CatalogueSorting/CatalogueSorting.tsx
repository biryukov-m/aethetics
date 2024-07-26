import React from 'react';
import * as Styled from './CatalogueSorting.styled';

interface IProps {
  handleFiltersToggle: () => void;
}

const CatalogueSorting: React.FC<IProps> = ({ handleFiltersToggle }) => (
  <Styled.Wrapper>
    <Styled.Container>
      <Styled.Selector onClick={handleFiltersToggle}>Фільтри</Styled.Selector>
      <Styled.Selector>Сортування</Styled.Selector>
    </Styled.Container>
  </Styled.Wrapper>
);

export default CatalogueSorting;
