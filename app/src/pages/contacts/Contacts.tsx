import React, { useState } from 'react';
import HeroImg from '../../images/image-contacts-hero.png';

const Contacts: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="contacts">
      <div className="layout">
        <div className="image-holder">
          <img src={HeroImg} alt="cosmetics tea leaf table" />
        </div>
        <div className="wrapper">
          <form action="#" method="post">
            {submitted ? (
              <div className="calling">
                <h2>Дякуємо!</h2>
                <h3>Ми вже телефонуємо вам</h3>
              </div>
            ) : (
              <>
                <div className="working-info">
                  <div className="hours">
                    <h2>Режим роботи:</h2>
                    <p>Понеділок - Субота</p>
                    <p>З 9:00 до 21:00</p>
                  </div>
                  <div className="phones">
                    <p>+38 (063) 554 22 21</p>
                    <p>+38 (095) 678 99 00</p>
                  </div>
                </div>
                <div className="bottom-group">
                  <div className="column">
                    <input type="text" name="name" id="name" placeholder="Ваше ім’я" />
                    <input
                      type="tel"
                      name="telephone"
                      id="telephone"
                      placeholder="Номер телефону"
                    />
                  </div>
                  <div className="column button-wrapper">
                    <button type="button" className="btn" onClick={() => setSubmitted(true)}>
                      <span>Передзвоніть</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
