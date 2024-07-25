import React, { useState } from 'react';
import CatalogueFilter from '../../components/CatalogueFilter/CatalogueFilter';
import CatalogueContent from '../../components/CatalogueContent/CatalogueContent';
import CatalogueRecentlyViewed from '../../components/CatalogueRecentlyViewed';
import * as CommonStyled from '../../../common/styled/layout.styled';
import * as Styled from './Catalogue.styled';
import CatalogueSorting from '../../components/CatalogueSorting/CatalogueSorting';
import { IProductFilters } from '../../../../types/products';

const Catalogue: React.FC = () => {
  const [filters, setFilters] = useState<IProductFilters>({
    category: '',
    skinType: '',
    ageGroup: '',
    purpose: ''
  });

  return (
    <>
      <Styled.Wrapper>
        <CommonStyled.Layout>
          <CatalogueSorting />
          <Styled.Container>
            <CatalogueFilter {...{ setFilters }} />
            <CatalogueContent {...{ filters, setFilters }} />
          </Styled.Container>
        </CommonStyled.Layout>
      </Styled.Wrapper>
      <CatalogueRecentlyViewed />
    </>
  );
};

export default Catalogue;
