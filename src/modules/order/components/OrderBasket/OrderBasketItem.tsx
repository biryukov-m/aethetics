import React, { useContext } from 'react';
import * as Styled from './OrderBasketItem.styled';
import { BasketContext } from '../../../basket-modal/Basket.provider';
import { QuantityInput } from '../../../common/components/QuantityInput/QuantityInput.component';
import { CloseButton } from '../../../common/components/CloseButton/CloseButton.component';
import useProductSummaryCost from '../../../hooks/useProductSummaryConst';
import useFetchProduct from '../../../hooks/useFetchProduct';
import { IBasketItem } from '../../../../services/basket.service';
import getSanityImageUrl from '../../../../utils/getSanityImageUrl';

interface IProps {
  item: IBasketItem;
}

const OrderBasketItem: React.FC<IProps> = ({ item }) => {
  const { productSummaryCost, error: summaryError } = useProductSummaryCost(item.id);
  const { product, error: productError } = useFetchProduct(item.id);
  const { remove, updateQuantity } = useContext(BasketContext);

  const removeFromBasketHandler = () => {
    remove(item.id);
  };
  const increaseQuantityHandler = () => {
    updateQuantity(item.id, 1);
  };
  const decreaseQuantityHandler = () => {
    updateQuantity(item.id, -1);
  };

  if (product) {
    const imageUrl = getSanityImageUrl(product.image);

    return (
      <Styled.Flex>
        <Styled.ImageCol>
          <img src={imageUrl} alt={product.image.imageAlt} />
        </Styled.ImageCol>
        <Styled.Name>{product.name}</Styled.Name>
        <Styled.QuantityInputWrapper>
          <QuantityInput
            value={item.quantity}
            onIncrease={increaseQuantityHandler}
            onDecrease={decreaseQuantityHandler}
          />
        </Styled.QuantityInputWrapper>
        <Styled.Price>{productSummaryCost || summaryError} грн</Styled.Price>
        <CloseButton onClick={removeFromBasketHandler} />
      </Styled.Flex>
    );
  }
  return <h3>{productError}</h3>;
};

export default OrderBasketItem;
