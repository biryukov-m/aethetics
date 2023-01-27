import React from "react";
import { Link } from "react-router-dom";

export type Props = {
  imageUrl: any;
  imageAlt: string;
  name: string;
  price: number;
  id: number;
};

export const CatalogueContentItem: React.FC<Props> = ({
  imageUrl,
  imageAlt,
  name,
  price,
  id,
}) => (
  <div className="item">
    <div className="image-holder">
      <img src={imageUrl} alt={imageAlt} />
      <span className="heart"></span>
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
