import React from 'react';
import { Link } from 'react-router-dom';
import {
  IProductAlt,
  IProductId,
  IProductImageUrl,
  IProductName,
  IProductPrice
} from '../../../../types/products';
import * as Styled from './CatalogueContentItem.styled';
import BasketIconDefault from '../../../../assets/images/icon-basket-default.png';
import BasketIconHover from '../../../../assets/images/icon-basket-hover.png';
import basketService from '../../../../services/basket.service';

type IProps = {
  id: IProductId;
  name: IProductName;
  imageUrl: IProductImageUrl;
  imageAlt: IProductAlt;
  price: IProductPrice;
};

const CatalogueContentItem: React.FC<IProps> = ({ id, name, imageUrl, imageAlt, price }) => {
  const handleAddToBasketClick = () => basketService.add(id, 1);
  return (
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
        <Styled.Button onClick={handleAddToBasketClick}>
          В кошик
          <img className="default" src={BasketIconDefault} alt="Basket icon" />
          <img className="hover" src={BasketIconHover} alt="Basket icon" />
        </Styled.Button>
      </div>
    </div>
  );
};

export default CatalogueContentItem;
