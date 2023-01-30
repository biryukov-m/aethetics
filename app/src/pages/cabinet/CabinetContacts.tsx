import React from "react";

const CabinetContacts: React.FC = () => (
  <>
    <h3 className="tab-link mobile active" data-for="tab-contacts">
      Контактна інформація
    </h3>
    <div className="tab contacts active" id="tab-contacts">
      <form action="post" className="for-contacts">
        <div className="flex">
          <div className="column">
            <label htmlFor="name">Ваше ім’я</label>
            <input
              type="text"
              className="name"
              id="name"
              placeholder="Світлана"
            />
            <label htmlFor="surname">Ваше прізвище</label>
            <input
              type="text"
              className="surname"
              id="surname"
              placeholder="Світлана"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="email"
              id="email"
              placeholder="shevSv002@gmail.com"
            />
          </div>
          <div className="column">
            <label htmlFor="telephone">Номер телефону</label>
            <input
              type="telephone"
              className="telephone"
              id="telephone"
              placeholder="+38 068 564 77 99"
            />
            <label htmlFor="date-of-birth">Дата народження</label>
            <input
              type="text"
              className="date-of-birth"
              id="date-of-birth"
              placeholder="8.10.1989"
            />
            <button className="btn-arrow-right exit">
              <span>Вийти</span>
            </button>
          </div>
        </div>
        <button type="submit" className="btn">
          <span>Зберегти</span>
        </button>
      </form>
    </div>
  </>
);

export default CabinetContacts;
