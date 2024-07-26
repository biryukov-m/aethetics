import React, { useContext } from 'react';
import * as Styled from './OrderBasketItem.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import { QuantityInput } from '../../../common/components/QuantityInput/QuantityInput.component';
import { CloseButton } from '../../../common/components/CloseButton/CloseButton.component';
import basketService, { IBasketItemQuantity } from '../../../../services/basket.service';
import getSanityImageUrl from '../../../../utils/getSanityImageUrl';
import { ProductModelMin } from '../../../models';

interface IBasketProps {
  product: ProductModelMin;
  quantity: IBasketItemQuantity;
}

const OrderBasketItem: React.FC<IBasketProps> = ({ product, quantity }) => {
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
      <Styled.Name>{product.name}</Styled.Name>
      <Styled.QuantityInputWrapper>
        <QuantityInput
          value={quantity}
          onIncrease={increaseQuantityHandler}
          onDecrease={decreaseQuantityHandler}
        />
      </Styled.QuantityInputWrapper>
      <Styled.Price>{productSummaryCost} грн</Styled.Price>
      <CloseButton onClick={removeFromBasketHandler} />
    </Styled.Flex>
  );
};

export default OrderBasketItem;
