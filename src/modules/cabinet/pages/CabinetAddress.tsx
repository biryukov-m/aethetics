import React from 'react';
import CabinetAddressBlock from './CabinetAddressBlock';
import addressService from '../../../services/address.service';

const { addresses } = addressService;

const generatedAddressBlocks = addresses.map((address, idx) => (
  <CabinetAddressBlock
    key={idx}
    id={idx}
    city={address.city}
    street={address.street}
    house={address.house}
    apartment={address.apartment}
    postal={address.postal}
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
