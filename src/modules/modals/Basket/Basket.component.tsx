import React, { useState } from 'react';
import * as Styled from './Basket.styled';
import basketService, { IBasketItem } from '../../../services/basket.service';
import { Button as StyledButton } from '../../common/button/button.styled';
import { CloseButton } from '../../common/CloseButton/CloseButton.component';
import { BasketItem } from './BasketItem/BasketItem.component';

interface IProps {
  closeHandler(): void;
}

const Basket: React.FC<IProps> = ({ closeHandler }) => {
  const [basket, setBasket] = useState<IBasketItem[]>([...basketService.basket]);

  const updateBasket = () => {
    setBasket([...basketService.basket]);
  };

  const handleBasketClick = (e: React.MouseEvent) => e.stopPropagation();

  if (basket && basket.length > 0) {
    return (
      <Styled.Overlay onClick={closeHandler}>
        <Styled.Wrapper onClick={(e) => handleBasketClick(e)}>
          <Styled.HeaderContainer>
            <Styled.Header>Ваше замовлення</Styled.Header>
            <CloseButton onClick={closeHandler} />
          </Styled.HeaderContainer>
          <Styled.SubHeader>В кошику {basket.length} товарів</Styled.SubHeader>
          <Styled.ItemsWrapper>
            <Styled.ItemsContainer>
              {basket.map((item) => (
                <BasketItem key={item.id} {...{ item }} {...{ updateBasket }} />
              ))}
            </Styled.ItemsContainer>
            <Styled.TotalPrice>Загальна сума: TOTAL PR грн</Styled.TotalPrice>
          </Styled.ItemsWrapper>

          <Styled.ContinueShopping onClick={closeHandler}>
            Продовжити покупки
          </Styled.ContinueShopping>
          <Styled.ButtonContainer>
            <StyledButton onClick={closeHandler}>Купити</StyledButton>
          </Styled.ButtonContainer>
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

export default Basket;
