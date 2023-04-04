import React from 'react';
import * as Styled from './Basket.styled';
import { IBasketItem } from '../../../services/basket.service';
import { Button as StyledButton } from '../../common/button/button.styled';

interface IProps {
  basket: IBasketItem[];
  closeHandler(): void;
}

const Basket: React.FC<IProps> = ({ basket, closeHandler }) => {
  // eslint-disable-next-line no-console
  console.log(basket);

  return (
    <Styled.Wrapper>
      <Styled.HeaderContainer>
        <Styled.Header>Ваше замовлення</Styled.Header>
        <span>X</span>
      </Styled.HeaderContainer>
      <Styled.SubHeader>В кошику {basket.length} товарів</Styled.SubHeader>
      <Styled.ItemsWrapper>
        <Styled.ItemsContainer>{basket.map((item) => item.id)}</Styled.ItemsContainer>
      </Styled.ItemsWrapper>
      <Styled.TotalPrice>Загальна сума: TOTAL PR грн</Styled.TotalPrice>
      <Styled.ContinueShopping>Продовжити покупки</Styled.ContinueShopping>
      <Styled.ButtonContainer>
        <StyledButton onClick={closeHandler}>Купити</StyledButton>
      </Styled.ButtonContainer>
    </Styled.Wrapper>
  );
};

export default Basket;
