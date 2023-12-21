import React, { ChangeEventHandler, useContext, useState } from 'react';
import RatingBar from '../../../common/ratingBar/RatingBar';
import GoBack from '../../../common/goBack/GoBack';
import * as Styled from '../../../common/styled/button.styled';
import { IBasketItemQuantity } from '../../../../services/basket.service';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import getSanityImageUrl from '../../../../utils/getSanityImageUrl';
import { ProductModel } from '../../../models/Product.model';

interface IProps {
  product: ProductModel;
  favourite?: boolean;
}

const ProductCardMainInfo: React.FC<IProps> = ({ product, favourite = false }) => {
  const [quantity, setQuantity] = useState<IBasketItemQuantity>(1);
  const { add } = useContext(BasketContext);
  const addToBasketHandler = () => {
    add(product._id, quantity);
  };

  const setQuantityHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuantity(() => {
      const value = Number(e.target.value);
      return value > 0 ? (value <= 10 ? value : 10) : 1;
    });
  };

  const imageUrl = getSanityImageUrl(product.image);

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
              <img src={imageUrl} alt={product.image.imageAlt} />
            </div>
          </div>
          <div className="product-column">
            <h4 className="name">{product.name}</h4>
            <RatingBar rating={5} />
            <div className="description">
              <p>{product.description}</p>
            </div>
            <div className="price-and-fav">
              <h4 className="price">{product.price} грн</h4>
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
