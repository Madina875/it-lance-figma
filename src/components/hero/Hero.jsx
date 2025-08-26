import React from "react";
import "../hero/Hero.scss";
import cameras_img from "../../assets/cameras.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <span>Проектирование и установка систем видеонаблюдения</span>
          <p>Защитите свой бизнес от неожиданных сбоев!</p>
          <button>see more</button>
          <img src={cameras_img} alt="cameras" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
