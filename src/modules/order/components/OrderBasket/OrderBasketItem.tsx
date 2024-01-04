import React, { useContext } from 'react';
import * as Styled from './OrderBasketItem.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import { QuantityInput } from '../../../common/components/QuantityInput/QuantityInput.component';
import { CloseButton } from '../../../common/components/CloseButton/CloseButton.component';
import useFetchProduct from '../../../hooks/useFetchProduct';
import basketService, { IBasketItemQuantity } from '../../../../services/basket.service';
import getSanityImageUrl from '../../../../utils/getSanityImageUrl';
import { ProductModel } from '../../../models/Product.model';

interface IProps {
  _id: ProductModel['_id'];
  quantity: IBasketItemQuantity;
}

const OrderBasketItem: React.FC<IProps> = ({ _id, quantity }) => {
  const { data: product, error, isPending } = useFetchProduct(_id);
  const { remove, updateQuantity } = useContext(BasketContext);

  const removeFromBasketHandler = () => {
    remove(_id);
  };
  const increaseQuantityHandler = () => {
    updateQuantity(_id, 1);
  };
  const decreaseQuantityHandler = () => {
    updateQuantity(_id, -1);
  };

  if (isPending) {
    return (
      <Styled.Flex>
        <Styled.ImageCol>...</Styled.ImageCol>
        <Styled.Name>...</Styled.Name>
        <CloseButton onClick={removeFromBasketHandler} />
      </Styled.Flex>
    );
  }

  if (error) {
    <Styled.Flex>
      <Styled.ImageCol>...</Styled.ImageCol>
      <Styled.Name>Сталась помилка: {error.message}</Styled.Name>
    </Styled.Flex>;
  }

  if (product) {
    const imageUrl = getSanityImageUrl(product.image);
    const productSummaryCost = basketService.getProductSummaryCost(product.price, _id);

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
  }

  return <h3>Сталась невідома помилка :(</h3>;
};

export default OrderBasketItem;
