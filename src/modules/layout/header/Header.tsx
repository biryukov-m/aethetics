import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import LogoGreen from '../../../assets/images/image-logo-green.png';
import Basket from '../../basket-modal/BasketModal.component';
import { BasketContext } from '../../basket-modal/Basket.provider';
import basketService from '../../../services/basket.service';
import { ROUTER_KEYS } from '../../../constants/appKeys';

const Header: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [totalItemsQuantity, setTotalItemsQuantity] = useState<number>(0);
  const modalHolderElement = document.getElementById('modal');
  const { basket } = useContext(BasketContext);

  useEffect(() => setTotalItemsQuantity(basketService.getTotalItemsQuantity()), [basket]);

  return (
    <header>
      <div className="layout">
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={LogoGreen} alt="Aethetics logo" />
            </Link>
            <h1>AETHETICS</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/${ROUTER_KEYS.catalogue}`}>Каталог</Link>
              </li>
              <li>
                <Link to={`/${ROUTER_KEYS.deliveryAndPayment}`}>Доставка та оплата</Link>
              </li>
              <li>
                <Link to={`/${ROUTER_KEYS.blog}`}>Блог</Link>
              </li>
              <li>
                <Link to={`/${ROUTER_KEYS.contacts}`}>Контакти</Link>
              </li>
            </ul>
          </nav>
          <div className="interface">
            <ul>
              <li className="to-cabinet">
                <Link to={`/${ROUTER_KEYS.cabinet.root}`} />
              </li>
              <li className="favourite">
                <Link to={`/${ROUTER_KEYS.cabinet.root}`} />
              </li>
              <li className="basket">
                <button aria-label="open basket" type="button" onClick={() => setModal(true)} />
                {totalItemsQuantity > 0 && <span className="counter">{totalItemsQuantity}</span>}
                {modal &&
                  modalHolderElement &&
                  createPortal(<Basket closeHandler={() => setModal(false)} />, modalHolderElement)}
              </li>
              <li className="burger">
                <Link to={`/${ROUTER_KEYS.cabinet.root}`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
