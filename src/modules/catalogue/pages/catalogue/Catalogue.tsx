import React, { useEffect, useRef, useState } from 'react';
import CatalogueFilter from '../../components/CatalogueFilter/CatalogueFilter';
import CatalogueContent from '../../components/CatalogueContent/CatalogueContent';
import CatalogueRecentlyViewed from '../../components/CatalogueRecentlyViewed';
import * as CommonStyled from '../../../common/styled/layout.styled';
import * as Styled from './Catalogue.styled';
import CatalogueSorting from '../../components/CatalogueSorting/CatalogueSorting';
import { IProductFilters } from '../../../../types/products';
import useWindowSize from '../../../hooks/useWindowSize';

const Catalogue: React.FC = () => {
  const [filters, setFilters] = useState<IProductFilters>({
    category: [],
    skinType: [],
    ageGroup: [],
    purpose: []
  });
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const { width } = useWindowSize();
  const filtersRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setFiltersVisible(false);
      }
    };

    if (width < 1140) {
      if (!userInteracted) {
        setFiltersVisible(false);
      }
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      setFiltersVisible(true);
    }

    return () => {
      if (width < 1140) {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      }
    };
  }, [width, userInteracted]);

  const handleFiltersToggle = () => {
    setFiltersVisible((prev) => !prev);
    setUserInteracted(true);
  };

  return (
    <>
      <Styled.Wrapper>
        <CommonStyled.Layout>
          <div ref={buttonRef}>
            <CatalogueSorting handleFiltersToggle={handleFiltersToggle} />
          </div>
          <Styled.Container>
            <div ref={filtersRef}>
              {filtersVisible && (
                <CatalogueFilter currentFilters={filters} setFilters={setFilters} />
              )}
            </div>
            <CatalogueContent {...{ filters, setFilters }} />
          </Styled.Container>
        </CommonStyled.Layout>
      </Styled.Wrapper>
      <CatalogueRecentlyViewed />
    </>
  );
};

export default Catalogue;
