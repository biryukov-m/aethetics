import React from 'react';
import CabinetAddressBlock from './CabinetAddressBlock';

const addresses = [
  {
    id: 1,
    name: 'Шевченко Світлана',
    city: 'Місто Київ',
    street: 'Градинська 11б, 85',
    telephone: '+38 068 564 77 99'
  },
  {
    id: 2,
    name: 'Шевченко Світлана',
    city: 'Місто Харків',
    street: 'Трінклера 18, 65',
    telephone: '+38 068 564 77 99'
  }
];

const generatedAddressBlocks = addresses.map((address) => (
  <CabinetAddressBlock
    name={address.name}
    city={address.city}
    street={address.street}
    telephone={address.telephone}
  />
));

const CabinetAddress: React.FC = () => (
  <>
    <h3 className="tab-link mobile" data-for="tab-address">
      Адресна книга
    </h3>
    <div className="tab address" id="tab-address">
      <form action="post" className="for-address">
        <div className="flex">
          <div className="column addresses">{generatedAddressBlocks}</div>
          <div className="column">
            <p>Додати нову адресу:</p>
            <input type="full-name" className="full-name" id="full-name" placeholder="ПІБ" />
            <input type="text" className="city" id="city" placeholder="Місто" />
            <div className="group">
              <input type="text" className="street" id="street" placeholder="Вулиця" />
              <input type="text" className="house" id="house" placeholder="Корпус" />
              <input type="text" className="apartment" id="apartment" placeholder="Квартира" />
            </div>
            <input type="text" className="postal" id="postal" placeholder="Поштове відділення" />
            <input type="tel" className="telephone" id="telephone" placeholder="Номер телефону" />
          </div>
        </div>
        <button type="submit" className="btn">
          <span>Зберегти</span>
        </button>
      </form>
    </div>
  </>
);

export default CabinetAddress;
