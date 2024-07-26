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
    <Styled.Container>
      <Styled.ImageHolder>
        <img src={imageUrl} alt={product.image.imageAlt} />
        <Styled.Heart />
      </Styled.ImageHolder>
      <Styled.Name>
        <Styled.Paragraph>{product.name}</Styled.Paragraph>
      </Styled.Name>
      <Styled.Price>
        <Styled.Paragraph>{product.price} грн</Styled.Paragraph>
      </Styled.Price>
      <Styled.ControlsContainer>
        <Link to={`/${ROUTER_KEYS.product}/${product._id}`}>Детальніше</Link>
        <Styled.Button onClick={handleAddToBasketClick}>
          В кошик
          <img className="default" src={BasketIconDefault} alt="Basket icon" />
          <img className="hover" src={BasketIconHover} alt="Basket icon" />
        </Styled.Button>
      </Styled.ControlsContainer>
    </Styled.Container>
  );
};

export default CatalogueContentItem;
