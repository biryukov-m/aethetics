import React from 'react';
import RatingBar from '../../../common/ratingBar/RatingBar';
import ButtonGreen from '../../../common/ButtonGreen/ButtonGreen';
import GoBack from '../../../common/goBack/GoBack';
import {
  IProductAlt,
  IProductDescription,
  IProductImageUrl,
  IProductName,
  IProductPrice,
  IProductRating
} from '../../../../types/products';

interface IProps {
  name: IProductName;
  imageUrl: IProductImageUrl;
  imageAlt: IProductAlt;
  rating: IProductRating;
  price: IProductPrice;
  description: IProductDescription;
  favourite: boolean;
}

const ProductCardMainInfo: React.FC<IProps> = ({
  name,
  imageUrl,
  imageAlt,
  rating,
  price,
  description,
  favourite
}) => (
  <section className="product-card">
    <div className="layout">
      <div className="top-controls">
        <GoBack />
        <span className="favourite" />
      </div>
      <div className="flex">
        <div className="image-column">
          <div className="image-holder">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        </div>
        <div className="product-column">
          <h4 className="name">{name}</h4>
          <RatingBar {...{ rating }} />
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="price-and-fav">
            <h4 className="price">{price} грн</h4>
            <span className={favourite ? 'favourite yes' : 'favourite no'} />
          </div>
          <div className="controls">
            <input className="quantity" type="number" min="1" max="100" defaultValue="1" />
            <ButtonGreen text="В кошик" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductCardMainInfo;
