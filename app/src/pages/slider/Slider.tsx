import React from "react";
import MainSlideOne360 from "../../images/image-360-main-slide-1.png";
import MainSlideOne from "../../images/image-main-slide-1.png";
import { ButtonGreen } from "../../components/ButtonGreen/ButtonGreen";

const Slider: React.FC = () => (
  <section className="slider">
    <div className="slide">
      <img className="mobile" src={MainSlideOne360} alt="moisturizing serum" />
      <img className="desktop" src={MainSlideOne} alt="moisturizing serum" />
      <article className="text">
        <h2>Новинка від AESTHETICS</h2>
        <h4>Зволожуюча сиворотка для обличчя</h4>
      </article>
      <div className="slider-controls">
        <div className="radio active"></div>
        <div className="radio"></div>
        <div className="radio"></div>
      </div>
    </div>
    <div className="button-catalogue">
      <ButtonGreen path="catalogue" text="Каталог" />
    </div>
  </section>
);

export default Slider;
