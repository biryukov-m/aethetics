import React from 'react';
import RatingBar from '../../../common/components/ratingBar/RatingBar';
import ButtonGreenMini from '../../../common/components/buttonGreenMini/ButtonGreenMini';
import { Product } from '../../../../types/types';

const CabinetFavouritesItem: React.FC<Product> = ({
  imageUrl,
  imageAlt,
  rating,
  availability,
  name,
  price
}) => (
  <li className="item">
    <div className="column for-image">
      <div className="image-holder">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
    <div className="column for-interface">
      <div className="rating-and-availability">
        <RatingBar rating={rating} rateable={false} />
        <p className="availability">{availability ? 'В наявності' : 'Немає в наявності'}</p>
      </div>
      <p className="name">{name}</p>
      <p className="price">{price} грн</p>
      <div className="buttons">
        <ButtonGreenMini text="В кошик" />
        <a href="#" className="delete">
          Видалити
        </a>
      </div>
    </div>
  </li>
);

export default CabinetFavouritesItem;
