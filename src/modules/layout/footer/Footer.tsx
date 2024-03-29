import React from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from '../../../assets/images/image-logo-white.png';
import MasterCardDefault from '../../../assets/images/icon-mastercard-default.png';
import MasterCard360Default from '../../../assets/images/icon-360-mastercard-default.png';
import VisaDefault from '../../../assets/images/icon-visa-default.png';
import Visa360Default from '../../../assets/images/icon-360-visa-default.png';
import ApayDefault from '../../../assets/images/icon-apay-default.png';
import Apay360Default from '../../../assets/images/icon-360-apay-default.png';
import { ROUTER_KEYS } from '../../../constants/appKeys';

const Footer: React.FC = () => (
  <footer>
    <div className="layout">
      <div className="wrapper">
        <div className="logo-bottom">
          <Link to="/">
            <img src={LogoWhite} alt="Aethetics logo" />
          </Link>
        </div>
        <ul className="menu">
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
        <div className="working-hours">
          <p>Режим роботи:</p>
          <p>Понеділок - Субота</p>
          <p>З 9:00 до 21:00</p>
        </div>
        <div className="column">
          <div className="confidential">
            <a href="#" target="_blank" rel="noreferrer">
              Політика конфіденційності
            </a>
          </div>
          <div className="phones">
            <p>+38 (063) 554 22 21</p>
            <p>+38 (095) 678 99 00</p>
          </div>
          <div className="payment-methods">
            <ul>
              <li className="mastercard">
                <a href="#">
                  <img className="desktop" src={MasterCardDefault} alt="mastercard" />
                  <img className="mobile" src={MasterCard360Default} alt="mastercard" />
                </a>
              </li>
              <li className="visa">
                <a href="#">
                  <img className="desktop" src={VisaDefault} alt="visa" />
                  <img className="mobile" src={Visa360Default} alt="visa" />
                </a>
              </li>
              <li className="apple-pay">
                <a href="#">
                  <img className="desktop" src={ApayDefault} alt="apple pay" />
                  <img className="mobile" src={Apay360Default} alt="apple pay" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
