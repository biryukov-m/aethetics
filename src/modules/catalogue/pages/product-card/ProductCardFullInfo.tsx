import React from 'react';
import ProductCardFullInfoComposition from './ProductCardFullInfoComposition';
import ProductCardFullInfoReviews from './ProductCardFullInfoReviews';
import { IProductComposition } from '../../../../types/products';

export type Props = {
  composition: IProductComposition;
  reviews: {
    id: number;
    author: string;
    date: string;
    rating: number;
    text: string;
  }[];
};

const ProductCardFullInfo: React.FC<Props> = ({ composition, reviews }) => {
  const handleTabsClick = (e: React.MouseEvent) => {
    const element = e.target as Element;
    if (element.classList.contains('tab')) {
      const tabLinks = element.parentElement?.querySelectorAll('h4');
      tabLinks?.forEach((tabLink) => {
        const tabContentId = tabLink.getAttribute('data-for');
        const tabContent = tabContentId ? document.getElementById(tabContentId) : null;
        if (tabLink === element) {
          tabLink.classList.add('on');
          tabContent?.classList.remove('inactive');
        } else {
          tabLink.classList.remove('on');
          tabContent?.classList.add('inactive');
        }
      });
    }
  };
  return (
    <section className="full-info">
      <div className="layout">
        <div role="article" className="header" id="tabs" onClick={handleTabsClick}>
          <h4 className="tab on" data-for="components">
            Склад
          </h4>
          <h4 className="tab" data-for="reviews">
            Відгуки
          </h4>
        </div>
        <ProductCardFullInfoComposition {...{ composition }} />
        <ProductCardFullInfoReviews {...{ reviews }} />
      </div>
    </section>
  );
};

export default ProductCardFullInfo;
