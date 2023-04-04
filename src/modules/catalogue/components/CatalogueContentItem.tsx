import React from 'react';
import { Link } from 'react-router-dom';
import {
  IProductAlt,
  IProductId,
  IProductImageUrl,
  IProductName,
  IProductPrice
} from '../../../types/products';

type IProps = {
  id: IProductId;
  name: IProductName;
  imageUrl: IProductImageUrl;
  imageAlt: IProductAlt;
  price: IProductPrice;
};

const CatalogueContentItem: React.FC<IProps> = ({ id, name, imageUrl, imageAlt, price }) => (
  <div className="item">
    <div className="image-holder">
      <img src={imageUrl} alt={imageAlt} />
      <span className="heart" />
    </div>
    <div className="name">
      <p>{name}</p>
    </div>
    <div className="price">
      <p>{price} грн</p>
    </div>
    <div className="controls">
      <Link to={`/product/${id}`}>Детальніше</Link>
      <div className="btn-mini">
        <span>В кошик</span>
      </div>
    </div>
  </div>
);

export default CatalogueContentItem;
