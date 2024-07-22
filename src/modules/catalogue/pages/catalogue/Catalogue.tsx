import React from 'react';
import CatalogueFilter from '../../components/CatalogueFilter/CatalogueFilter';
import CatalogueContent from '../../components/CatalogueContent/CatalogueContent';
import CatalogueRecentlyViewed from '../../components/CatalogueRecentlyViewed';
import * as CommonStyled from '../../../common/styled/layout.styled';
import * as Styled from './Catalogue.styled';
import CatalogueSorting from '../../components/CatalogueSorting/CatalogueSorting';

const Catalogue: React.FC = () => (
  <>
    <Styled.Wrapper>
      <CommonStyled.Layout>
        <CatalogueSorting />
        <Styled.Container>
          <CatalogueFilter />
          <CatalogueContent />
        </Styled.Container>
      </CommonStyled.Layout>
    </Styled.Wrapper>
    <CatalogueRecentlyViewed />
  </>
);

export default Catalogue;
