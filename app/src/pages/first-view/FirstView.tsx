import React from "react";
import MainPageHero from "../../images/image-main-page-hero.png";
import { ButtonGreen } from "../../components/ButtonGreen/ButtonGreen";

const FirstView: React.FC = () => (
  <section className="first-view">
    <div className="image-holder">
      <img src={MainPageHero} alt="girl with leaf" />
    </div>
    <div className="layout">
      <article>
        <h2>Український бренд доглядової косметики для обличчя</h2>
        <h4>
          Українська професійна косметика AESTHETICS користується великою
          популярністю завдяки високій якості, ефективності та оптимальної
          вартості. Це косметика для домашнього використання, яка забезпечує
          салонний догляд.
        </h4>
        <div className="button-catalogue">
          <ButtonGreen text="Каталог" path="catalogue"></ButtonGreen>
        </div>
      </article>
    </div>
  </section>
);

export default FirstView;
