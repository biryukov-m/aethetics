import React from 'react';
import { CatalogueRecentlyViewedItem } from './CatalogueRecentlyViewedItem';

import ImageCataloguePage11 from '../../../../assets/images/image-catalogue-page-11-make-up-remover-gel.png';
import ImageCataloguePage12 from '../../../../assets/images/image-catalogue-page-12-anti-aging-serum.png';
import ImageCataloguePage14 from '../../../../assets/images/image-catalogue-page-14-scrub-sensitive.png';
import ImageCataloguePage15 from '../../../../assets/images/image-catalogue-page-15-gel-deep-cleaning.png';

const items = [
  {
    id: 11,
    imageUrl: ImageCataloguePage11,
    imageAlt: 'make-up-remover-gel',
    name: 'Гель для зняття макіяжу',
    price: 730
  },
  {
    id: 12,
    imageUrl: ImageCataloguePage12,
    imageAlt: 'anti-aging-serum',
    name: 'Антивікова сироватка для зони навколо очей',
    price: 900
  },
  {
    id: 14,
    imageUrl: ImageCataloguePage14,
    imageAlt: 'scrub-sensitive',
    name: 'Скраб для чутливої шкіри',
    price: 890
  },
  {
    id: 15,
    imageUrl: ImageCataloguePage15,
    imageAlt: 'gel-deep-cleaning',
    name: 'Гель для глубокого очищення шкіри обличчя',
    price: 890
  }
];

export type Props = {
  items?: object;
};

const itemsComponents = items.map((item) => (
  <CatalogueRecentlyViewedItem
    imageUrl={item.imageUrl}
    imageAlt={item.imageAlt}
    name={item.name}
    price={item.price}
  />
));

const CatalogueRecentlyViewed: React.FC<Props> = () => (
  <section className="more-products recently-viewed">
    <div className="layout">
      <div className="wrapper">
        <h3>Ви нещодавно переглядали:</h3>
        <div className="items">{itemsComponents}</div>
      </div>
    </div>
  </section>
);

export default CatalogueRecentlyViewed;
