import React from 'react';
import CatalogueFilter from './CatalogueFilter';
import CatalogueContent from './CatalogueContent';
import CatalogueRecentlyViewed from './CatalogueRecentlyViewed';

const Catalogue: React.FC = () => (
  <>
    <section className="catalogue">
      <div className="layout">
        <div className="sorting">
          <div className="wrapper">
            <p>Фільтри</p>
            <p>Сортування</p>
          </div>
        </div>
        <div className="flex">
          <CatalogueFilter />
          <CatalogueContent />
        </div>
      </div>
    </section>
    <CatalogueRecentlyViewed />
  </>
);

export default Catalogue;
