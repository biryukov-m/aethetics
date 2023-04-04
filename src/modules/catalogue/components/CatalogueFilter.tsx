import React from 'react';

const CatalogueFilter: React.FC = () => (
  <aside className="filters">
    <div className="group active">
      <div className="header">
        <h4>Група товару</h4>
        <span />
      </div>
      <ul>
        <li className="checked">Гель для вмивання</li>
        <li>Крем для обличчя</li>
        <li>Маска для обличчя</li>
        <li>Пінка для вмивання</li>
        <li>Сироватка для обличчя</li>
        <li>Тонік для обличчя</li>
      </ul>
    </div>
    <div className="group inactive">
      <div className="header">
        <h4>Вік</h4>
        <span />
      </div>
      <ul>
        <li>20</li>
        <li>30</li>
        <li>40+</li>
      </ul>
    </div>
    <div className="group inactive">
      <div className="header">
        <h4>Призначення</h4>
        <span />
      </div>
      <ul>
        <li>Для цього</li>
        <li>Для того</li>
        <li>Для іншого</li>
      </ul>
    </div>
    <div className="group inactive">
      <div className="header">
        <h4>Час застосування</h4>
        <span />
      </div>
      <ul>
        <li>Ранкові</li>
        <li>Денні</li>
        <li>Вечірні</li>
      </ul>
    </div>
    <div className="group inactive">
      <div className="header">
        <h4>Ступінь захисту</h4>
        <span />
      </div>
      <ul>
        <li>Початковий захист</li>
        <li>Середній захист</li>
        <li>Ультразахист</li>
      </ul>
    </div>
    <div className="group inactive">
      <div className="header">
        <h4>Тип шкіри</h4>
        <span />
      </div>
      <ul>
        <li>Бліда</li>
        <li>Жирна</li>
        <li>Суха</li>
      </ul>
    </div>
    <div className="group price">
      <div className="header">
        <h4>Ціна</h4>
      </div>
      <div className="flex">
        <input className="minimal" type="number" placeholder="від" />
        <span />
        <input className="maximal" type="number" placeholder="до" />
      </div>
    </div>
  </aside>
);

export default CatalogueFilter;
