import React from "react";
import { Link } from "react-router-dom";
import LogoGreen from "../../images/image-logo-green.png";

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
              <Link to="catalogue">Каталог</Link>
            </li>
            <li>
              <a href="./delivery_and_payment.html">Доставка та оплата</a>
            </li>
            <li>
              <a href="./blog.html">Блог</a>
            </li>
            <li>
              <a href="./contacts.html">Контакти</a>
            </li>
          </ul>
        </nav>
        <div className="interface">
          <ul>
            <li className="to-cabinet">
              <a href="./cabinet.html"></a>
            </li>
            <li className="favourite">
              <a href="#"></a>
            </li>
            <li className="basket">
              <a href="#"></a>
            </li>
            <li className="burger">
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
