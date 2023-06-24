import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './BasketModal.styled';
import basketService from '../../services/basket.service';
import { Button as StyledButton } from '../common/button/button.styled';
import { CloseButton } from '../common/CloseButton/CloseButton.component';
import { BasketItem } from './BasketItem/BasketItem.component';
import { BasketContext } from './Basket.provider';

interface IProps {
  closeHandler(): void;
}

const BasketModal: React.FC<IProps> = ({ closeHandler }) => {
  const { basket } = useContext(BasketContext);

  const handleBasketClick = (e: React.MouseEvent) => e.stopPropagation();

  if (basket && basket.length > 0) {
    const totalCost = basketService.getTotalCost();
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
              <BasketItem key={item.id} {...{ item }} />
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
