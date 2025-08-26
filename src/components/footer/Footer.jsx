import React from "react";
import "../footer/Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <p>СПРОЕКТИРУЕМ СИСТЕМУ ВИДЕОНАБЛЮДЕНИЯ</p>
          <div className="footer-wrapper__card">
            <p>Решим Вашу IT - задачу</p>
            <div>
              <span>Меня зовут</span>
              <input type="text" placeholder="Ваше имя" />

              <span>телефон</span>
              <input type="text" placeholder="Ваш номер телефона" />
            </div>
            <strong>мне нужна система видеонаблюдения для</strong>
            <input
              className="big-inp"
              type="text"
              placeholder="Пожалуйста, опишите направление Вашего Бизнеса."
            />
            <button>Отправить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
