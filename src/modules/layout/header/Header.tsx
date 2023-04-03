import React from 'react';
import { Link } from 'react-router-dom';
import LogoGreen from '../../../assets/images/image-logo-green.png';

const Header: React.FC = () => (
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
              <Link to="cabinet" />
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
export default Header;
