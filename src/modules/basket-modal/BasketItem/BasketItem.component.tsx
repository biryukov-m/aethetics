import React, { useContext } from 'react';
import * as Styled from './BasketItem.styled';
import basketService, { IBasketItemQuantity } from '../../../services/basket.service';
import CloseIcon from '../../../assets/images/icon-delete-default-no-borders.png';
import { QuantityInput } from '../../common/components/QuantityInput/QuantityInput.component';
import { BasketContext } from '../Basket.provider';
import getSanityImageUrl from '../../../utils/getSanityImageUrl';
import { ProductModelMin } from '../../models';

interface IBasketProps {
  product: ProductModelMin;
  quantity: IBasketItemQuantity;
}

export const BasketItem: React.FC<IBasketProps> = ({ product, quantity }) => {
  const { remove, updateQuantity } = useContext(BasketContext);
  const removeFromBasketHandler = () => {
    remove(product._id);
  };
  const increaseQuantityHandler = () => {
    updateQuantity(product._id, 1);
  };
  const decreaseQuantityHandler = () => {
    updateQuantity(product._id, -1);
  };

  const imageUrl = getSanityImageUrl(product.image);
  const productSummaryCost = basketService.getProductSummaryCost(product.price, product._id);

  return (
    <Styled.Flex>
      <Styled.ImageCol>
        <img src={imageUrl} alt={product.image.imageAlt} />
      </Styled.ImageCol>
      <Styled.NameAndQuantityCol>
        <Styled.Name>{product.name}</Styled.Name>
        <Styled.QuantityInputWrapper>
          <QuantityInput
            value={quantity}
            onIncrease={increaseQuantityHandler}
            onDecrease={decreaseQuantityHandler}
          />
        </Styled.QuantityInputWrapper>
      </Styled.NameAndQuantityCol>
      <Styled.RemoveAndPriceCol>
        <Styled.RemoveBtn onClick={removeFromBasketHandler}>
          <img src={CloseIcon} alt="remove from basket" />
        </Styled.RemoveBtn>
        <Styled.Price>{productSummaryCost} грн</Styled.Price>
      </Styled.RemoveAndPriceCol>
    </Styled.Flex>
  );
};
