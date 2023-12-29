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
  const { productSummaryCost } = useProductSummaryCost(item.id);
  const { data, error, isPending } = useFetchProduct(item.id);
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

  if (data) {
    const imageUrl = getSanityImageUrl(data.image);
    return (
      <Styled.Flex>
        <Styled.ImageCol>
          <img src={imageUrl} alt={data.image.imageAlt} />
        </Styled.ImageCol>
        <Styled.Name>{data.name}</Styled.Name>
        <Styled.QuantityInputWrapper>
          <QuantityInput
            value={item.quantity}
            onIncrease={increaseQuantityHandler}
            onDecrease={decreaseQuantityHandler}
          />
        </Styled.QuantityInputWrapper>
        <Styled.Price>{productSummaryCost} !грн</Styled.Price>
        <CloseButton onClick={removeFromBasketHandler} />
      </Styled.Flex>
    );
  }

  return <h3>невідома помилка :(</h3>;
};

export default OrderBasketItem;
