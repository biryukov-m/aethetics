import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './BasketModal.styled';
import { Button as StyledButton } from '../common/styled/button.styled';
import { CloseButton } from '../common/components/CloseButton/CloseButton.component';
import { BasketItem } from './BasketItem/BasketItem.component';
import { BasketContext } from './Basket.provider';

interface IProps {
  closeHandler(): void;
}

const BasketModal: React.FC<IProps> = ({ closeHandler }) => {
  const { basket } = useContext(BasketContext);
  const totalCost = 0;

  const handleBasketClick = (e: React.MouseEvent) => e.stopPropagation();

  if (basket && basket.length > 0 && totalCost !== null) {
    return (
      <Styled.Overlay onClick={closeHandler}>
        <Styled.Wrapper onClick={(e) => handleBasketClick(e)}>
          <Styled.HeaderContainer>
            <Styled.Header>Ваше замовлення</Styled.Header>
            <CloseButton onClick={closeHandler} />
          </Styled.HeaderContainer>
          <Styled.SubHeader>В кошику {basket.length} товарів</Styled.SubHeader>
          <>
            {basket.map((item) => (
              <BasketItem key={item.id} _id={item.id} quantity={item.quantity} />
            ))}
          </>
          <Styled.TotalPrice>Загальна сума: {totalCost} грн</Styled.TotalPrice>
          <Styled.ContinueShopping onClick={closeHandler}>
            Продовжити покупки
          </Styled.ContinueShopping>
          <Link to="/order">
            <StyledButton onClick={closeHandler}>Купити</StyledButton>
          </Link>
        </Styled.Wrapper>
      </Styled.Overlay>
    );
  }
  return (
    <Styled.Wrapper onClick={(e) => handleBasketClick(e)}>
      <Styled.HeaderContainer>
        <div />
        <CloseButton onClick={closeHandler} />
      </Styled.HeaderContainer>
      <Styled.SubHeader>В кошику немає товарів</Styled.SubHeader>
      <Styled.ContinueShopping onClick={closeHandler}>Продовжити покупки</Styled.ContinueShopping>
    </Styled.Wrapper>
  );
};

export default BasketModal;
