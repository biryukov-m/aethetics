import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button as StyledButton } from '../common/styled/button.styled';
import { CloseButton } from '../common/components/CloseButton/CloseButton.component';
import { BasketContext } from './Basket.provider';
import { ROUTER_KEYS } from '../../constants/appKeys';
import * as Styled from './BasketModal.styled';
import { BasketWithData } from './BasketWithData';

interface IProps {
  closeHandler(): void;
}

const BasketModal: React.FC<IProps> = ({ closeHandler }) => {
  const { basket } = useContext(BasketContext);
  const handleBasketClick = (e: React.MouseEvent) => e.stopPropagation();
  const isBasketExists = basket && basket.length > 0;

  return (
    <Styled.Overlay onClick={closeHandler}>
      <Styled.Wrapper onClick={(e) => handleBasketClick(e)}>
        <Styled.HeaderContainer>
          <Styled.Header>
            {isBasketExists ? 'Ваше замовлення' : 'Тут буде ваше замовлення'}
          </Styled.Header>
          <CloseButton onClick={closeHandler} />
        </Styled.HeaderContainer>
        {isBasketExists ? (
          <BasketWithData basket={basket} />
        ) : (
          <Styled.SubHeader>Кошик ще порожній</Styled.SubHeader>
        )}
        <Styled.ContinueShopping onClick={closeHandler}>Продовжити покупки</Styled.ContinueShopping>
        {isBasketExists && (
          <Link to={`/${ROUTER_KEYS.order.root}`}>
            <StyledButton onClick={closeHandler}>Купити</StyledButton>
          </Link>
        )}
      </Styled.Wrapper>
    </Styled.Overlay>
  );
};

export default BasketModal;
