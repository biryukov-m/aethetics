import React from 'react';
import CatalogueContentItem from './CatalogueContentItem/CatalogueContentItem';
import useFetchProducts from '../../hooks/useFetchProducts';

const CatalogueContent: React.FC = () => {
  const { isPending, data, error } = useFetchProducts();

  if (error) return <h3>{error.message}</h3>;
  if (isPending) {
    return (
      <div className="column">
        <div className="items">
          <h3>Завантажуємо...</h3>
        </div>
      </div>
    );
  }

  return data ? (
    <div className="column">
      <div className="items">
        {data.map((product) => (
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
    <h3>Сталася помилка, не можемо знайти товари</h3>
  );
};

export default CatalogueContent;
