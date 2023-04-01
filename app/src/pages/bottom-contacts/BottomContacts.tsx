import React from 'react';
import IconInstagramDefault from '../../images/icon-instagram-default.png';
import IconEmailDefault from '../../images/icon-email-default.png';
import IconPhoneDefault from '../../images/icon-phone-default.png';
import IconAddressDefault from '../../images/icon-address-default.png';

const BottomContacts: React.FC = () => (
  <section className="bottom-contacts">
    <div className="layout">
      <ul>
        <li>
          <a
            href="https://www.instagram.com/biriukov.mm/"
            className="instagram"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconInstagramDefault} alt="instagram icon" />
          </a>
        </li>
        <li>
          <a href="mailto:biryukov.mm@gmail.com" className="mail" target="_blank" rel="noreferrer">
            <img src={IconEmailDefault} alt="email icon" />
          </a>
        </li>
        <li>
          <a href="tel:0800502192" className="telephone" target="_blank" rel="noreferrer">
            <img src={IconPhoneDefault} alt="telephone icon" />
          </a>
        </li>
        <li>
          <a
            href="https://goo.gl/maps/7bTYMp68mNyFDuBq8"
            className="address"
            target="_blank"
            rel="noreferrer"
          >
            <img src={IconAddressDefault} alt="address icon" />
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default BottomContacts;
