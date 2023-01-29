import React from "react";

const CabinetTabs: React.FC = () => (
  <ul className="tabs">
    <li>
      <a className="contacs-info active" href="#">
        Контактна інформація
      </a>
    </li>
    <li>
      <a className="adress-book" href="#">
        Адресна книга
      </a>
    </li>
    <li>
      <a className="favourites" href="#">
        Список бажань
      </a>
    </li>
    <li>
      <a className="history" href="#">
        Історія замовлень
      </a>
    </li>
  </ul>
);

export default CabinetTabs;
