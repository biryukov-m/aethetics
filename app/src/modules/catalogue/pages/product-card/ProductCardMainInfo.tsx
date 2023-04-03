import React from 'react';
import RatingBar from '../../components/ratingBar/RatingBar';
import ButtonGreen from '../../components/ButtonGreen/ButtonGreen';
import GoBack from '../../components/goBack/GoBack';
import { Product } from '../../../../../types/types';

type Props = {
  name: Product['name'];
  imageUrl: Product['imageUrl'];
  imageAlt: Product['imageAlt'];
  rating: Product['rating'];
  price: Product['price'];
  favourite: Product['favourite'];
  description: Product['description'];
};

const ProductCardMainInfo: React.FC<Props> = ({
  name,
  imageUrl,
  imageAlt,
  rating,
  price,
  favourite,
  description
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
          <RatingBar rating={rating} />
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="price-and-fav">
            <h4 className="price">{price} грн</h4>
            <span className={favourite ? 'favourite no' : 'favourite'} />
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
