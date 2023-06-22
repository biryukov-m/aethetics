/* eslint-disable react/destructuring-assignment */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import LogoGreen from '../../../assets/images/image-logo-green.png';
import Basket from '../../basket/Basket.component';
import { BasketContext } from '../../basket/Basket.provider';
import basketService from '../../../services/basket.service';

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
                <Link to="/catalogue">Каталог</Link>
              </li>
              <li>
                <Link to="/delivery-and-payment">Доставка та оплата</Link>
              </li>
              <li>
                <Link to="/blog">Блог</Link>
              </li>
              <li>
                <Link to="/contacts">Контакти</Link>
              </li>
            </ul>
          </nav>
          <div className="interface">
            <ul>
              <li className="to-cabinet">
                <Link to="cabinet" />
              </li>
              <li className="favourite">
                <Link to="cabinet" />
              </li>
              <li className="basket">
                <button aria-label="open basket" type="button" onClick={() => setModal(true)} />
                {totalItemsQuantity > 0 && totalItemsQuantity}
                {modal &&
                  modalHolderElement &&
                  createPortal(<Basket closeHandler={() => setModal(false)} />, modalHolderElement)}
              </li>
              <li className="burger">
                <Link to="cabinet" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
