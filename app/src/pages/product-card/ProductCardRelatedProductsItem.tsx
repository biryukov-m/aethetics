import React from 'react';

export type Props = {
  imageUrl: string;
  imageAlt: string;
  name: string;
  price: number;
};

const ProductCardRelatedProductsItem: React.FC<Props> = ({ imageUrl, imageAlt, name, price }) => (
  <div className="item">
    <div className="image-holder">
      <img src={imageUrl} alt={imageAlt} />
    </div>
    <p className="name">{name}</p>
    <p className="price">{price} грн</p>
  </div>
);

export default ProductCardRelatedProductsItem;
