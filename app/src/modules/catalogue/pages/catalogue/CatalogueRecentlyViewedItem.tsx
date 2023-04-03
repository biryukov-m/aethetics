import React from 'react';
import ButtonGreenMini from '../../components/buttonGreenMini/ButtonGreenMini';

export type Props = {
  imageUrl: any;
  imageAlt: string;
  name: string;
  price: number;
};

export const CatalogueRecentlyViewedItem: React.FC<Props> = ({
  imageUrl,
  imageAlt,
  name,
  price
}) => (
  <div className="item">
    <div className="image-holder">
      <img src={imageUrl} alt={imageAlt} />
    </div>
    <p className="name">{name}</p>
    <div className="row">
      <p className="price">{price} грн</p>
      <ButtonGreenMini text="В кошик" />
    </div>
  </div>
);
