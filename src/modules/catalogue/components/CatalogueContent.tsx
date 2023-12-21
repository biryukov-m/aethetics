import React from 'react';
import CatalogueContentItem from './CatalogueContentItem/CatalogueContentItem';
import useFetchProducts from '../../hooks/useFetchProducts';

const CatalogueContent: React.FC = () => {
  const { products, error } = useFetchProducts();

  return products ? (
    <div className="column">
      <div className="items">
        {products.map((product) => (
          <CatalogueContentItem key={product._id} product={product} />
        ))}
      </div>
      <div className="button-show-more">
        <div className="btn-arrow-bottom">
          <span>Показати ще</span>
        </div>
      </div>
    </div>
  ) : (
    <h3>{error}</h3>
  );
};

export default CatalogueContent;
