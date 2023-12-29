import React, { useContext } from 'react';
import * as Styled from './BasketItem.styled';
import { IBasketItem } from '../../../services/basket.service';
import CloseIcon from '../../../assets/images/icon-delete-default-no-borders.png';
import { QuantityInput } from '../../common/components/QuantityInput/QuantityInput.component';
import { BasketContext } from '../Basket.provider';
import useProductSummaryCost from '../../hooks/useProductSummaryConst';
import useFetchProduct from '../../hooks/useFetchProduct';
import getSanityImageUrl from '../../../utils/getSanityImageUrl';

interface IProps {
  item: IBasketItem;
}

export const BasketItem: React.FC<IProps> = ({ item }) => {
  const { data: product, error: productError, isPending } = useFetchProduct(item.id);
  const { productSummaryCost } = useProductSummaryCost(item.id);
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
      </Styled.Flex>
    );
  }

  if (productError) {
    <Styled.Flex>
      <Styled.ImageCol>...</Styled.ImageCol>
      <Styled.Name>Сталась помилка: {productError.message}</Styled.Name>
    </Styled.Flex>;
  }

  if (product) {
    const imageUrl = getSanityImageUrl(product.image);

    return (
      <Styled.Flex>
        <Styled.ImageCol>
          <img src={imageUrl} alt={product.image.imageAlt} />
        </Styled.ImageCol>
        <Styled.NameAndQuantityCol>
          <Styled.Name>{product.name}</Styled.Name>
          <Styled.QuantityInputWrapper>
            <QuantityInput
              value={item.quantity}
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
  }
  return <h3>Сталась невідома помилка :(</h3>;
};
