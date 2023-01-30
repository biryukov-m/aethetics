import React from "react";

const CabinetAddress: React.FC = () => (
  <>
    <h3 className="tab-link mobile" data-for="tab-address">
      Адресна книга
    </h3>
    <div className="tab address" id="tab-address">
      <form action="post" className="for-address">
        <div className="flex">
          <div className="column addresses">
            <div className="contact">
              <div className="nth">1</div>
              <p>Шевченко Світлана</p>
              <p>Місто Київ</p>
              <p>Градинська 11б, 85</p>
              <p>+38 068 564 77 99</p>
              <div className="links">
                <a href="#">Редагувати</a>
                <a href="#">Видалити</a>
              </div>
            </div>
            <div className="contact">
              <div className="nth">2</div>
              <p>Шевченко Світлана</p>
              <p>Місто Харків</p>
              <p>Трінклера 18, 65</p>
              <p>+38 068 564 77 99</p>
              <div className="links">
                <a href="#">Редагувати</a>
                <a href="#">Видалити</a>
              </div>
            </div>
          </div>
          <div className="column">
            <p>Додати нову адресу:</p>
            <input
              type="full-name"
              className="full-name"
              id="full-name"
              placeholder="ПІБ"
            />
            <input type="text" className="city" id="city" placeholder="Місто" />
            <div className="group">
              <input
                type="text"
                className="street"
                id="street"
                placeholder="Вулиця"
              />
              <input
                type="text"
                className="house"
                id="house"
                placeholder="Корпус"
              />
              <input
                type="text"
                className="apartment"
                id="apartment"
                placeholder="Квартира"
              />
            </div>
            <input
              type="text"
              className="postal"
              id="postal"
              placeholder="Поштове відділення"
            />
            <input
              type="tel"
              className="telephone"
              id="telephone"
              placeholder="Номер телефону"
            />
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
