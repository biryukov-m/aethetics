import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './CatalogueContentItem.styled';
import BasketIconDefault from '../../../../assets/images/icon-basket-default.png';
import BasketIconHover from '../../../../assets/images/icon-basket-hover.png';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import getSanityImageUrl from '../../../../utils/getSanityImageUrl';
import { ROUTER_KEYS } from '../../../../constants/appKeys';
import { ProductModelMin } from '../../../models';

type IProps = {
  product: ProductModelMin;
};

const CatalogueContentItem: React.FC<IProps> = ({ product }) => {
  const { add } = useContext(BasketContext);
  const handleAddToBasketClick = () => add(product._id, 1);

  const imageUrl = getSanityImageUrl(product.image);

  return (
    <div className="item">
      <div className="image-holder">
        <img src={imageUrl} alt={product.image.imageAlt} />
        <span className="heart" />
      </div>
      <div className="name">
        <p>{product.name}</p>
      </div>
      <div className="price">
        <p>{product.price} грн</p>
      </div>
      <div className="controls">
        <Link to={`/${ROUTER_KEYS.product}/${product._id}`}>Детальніше</Link>
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
