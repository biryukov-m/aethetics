import React, { ChangeEventHandler, useContext, useState } from 'react';
import RatingBar from '../../../common/ratingBar/RatingBar';
import GoBack from '../../../common/goBack/GoBack';
import * as Styled from '../../../common/styled/button.styled';
import { IBasketItemQuantity } from '../../../../services/basket.service';
import {
  IProductAlt,
  IProductDescription,
  IProductId,
  IProductImageUrl,
  IProductName,
  IProductPrice,
  IProductRating
} from '../../../../types/products';
import { BasketContext } from '../../../basket-modal/Basket.provider';

interface IProps {
  id: IProductId;
  name: IProductName;
  imageUrl: IProductImageUrl;
  imageAlt: IProductAlt;
  rating: IProductRating;
  price: IProductPrice;
  description: IProductDescription;
  favourite: boolean;
}

const ProductCardMainInfo: React.FC<IProps> = ({
  id,
  name,
  imageUrl,
  imageAlt,
  rating,
  price,
  description,
  favourite
}) => {
  const [quantity, setQuantity] = useState<IBasketItemQuantity>(1);
  const { add } = useContext(BasketContext);
  const addToBasketHandler = () => {
    add(id, quantity);
  };

  const setQuantityHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuantity(() => {
      const value = Number(e.target.value);
      return value > 0 ? (value <= 10 ? value : 10) : 1;
    });
  };

  return (
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
              <input
                onChange={setQuantityHandler}
                className="quantity"
                type="number"
                min="1"
                max="10"
                value={quantity}
              />
              <Styled.Button onClick={addToBasketHandler} type="button">
                В кошик
              </Styled.Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardMainInfo;
