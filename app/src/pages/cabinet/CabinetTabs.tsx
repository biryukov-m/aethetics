import React from 'react';

const CabinetTabs: React.FC = () => (
  <ul className="tabs">
    <li className="tab-link active" data-for="tab-contacts">
      Контактна інформація
    </li>
    <li className="tab-link" data-for="tab-address">
      Адресна книга
    </li>
    <li className="tab-link" data-for="tab-favourites">
      Список бажань
    </li>
    <li className="tab-link" data-for="tab-history">
      Історія замовлень
    </li>
  </ul>
);

export default CabinetTabs;
