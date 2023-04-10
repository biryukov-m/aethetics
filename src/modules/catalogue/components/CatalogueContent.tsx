import React from 'react';
import CatalogueContentItem from './CatalogueContentItem/CatalogueContentItem.component';
import productService from '../../../services/products.service';

const CatalogueContent: React.FC = () => {
  const products = productService.getAll();

  return (
    <div className="column">
      <div className="items">
        {products.map((product) => (
          <CatalogueContentItem key={product.id} {...product} />
        ))}
      </div>
      <div className="button-show-more">
        <div className="btn-arrow-bottom">
          <span>Показати ще</span>
        </div>
      </div>
    </div>
  );
};

export default CatalogueContent;
