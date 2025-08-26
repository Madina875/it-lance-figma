import React from "react";
import "../skills/Skills.scss";

import skills_img from "../../assets/skills.png";
import monitor from "../../assets/monitor.svg";

const Skills = () => {
  return (
    <section className="scills">
      <div className="container">
        <div className="skills-wrapper">
          <h2>Lorem, ipsum.</h2>
          <div className="skills-wrapper__cards">
            <div className="skills-wrapper__cards-card">
              <img src={skills_img} alt="skills_img" />
              <div>
                <img src={monitor} alt="" />
              </div>
              <span>Видеонаблюдение через интернет</span>
              <p>
                Для онлайн доступа к камерам достаточно иметь доступ к Интернету
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и запись в режиме времени.
              </p>
            </div>{" "}
            <div className="skills-wrapper__cards-card">
              <img src={skills_img} alt="skills_img" />
              <div>
                <img src={monitor} alt="" />
              </div>
              <span>Видеонаблюдение через интернет</span>
              <p>
                Для онлайн доступа к камерам достаточно иметь доступ к Интернету
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и запись в режиме времени.
              </p>
            </div>{" "}
            <div className="skills-wrapper__cards-card">
              <img src={skills_img} alt="skills_img" />
              <div>
                <img src={monitor} alt="" />
              </div>
              <span>Видеонаблюдение через интернет</span>
              <p>
                Для онлайн доступа к камерам достаточно иметь доступ к Интернету
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и запись в режиме времени.
              </p>
            </div>{" "}
            <div className="skills-wrapper__cards-card">
              <img src={skills_img} alt="skills_img" />
              <div>
                <img src={monitor} alt="" />
              </div>
              <span>Видеонаблюдение через интернет</span>
              <p>
                Для онлайн доступа к камерам достаточно иметь доступ к Интернету
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и запись в режиме времени.
              </p>
            </div>{" "}
            <div className="skills-wrapper__cards-card">
              <img src={skills_img} alt="skills_img" />
              <div>
                <img src={monitor} alt="" />
              </div>
              <span>Видеонаблюдение через интернет</span>
              <p>
                Для онлайн доступа к камерам достаточно иметь доступ к Интернету
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и запись в режиме времени.
              </p>
            </div>{" "}
            <div className="skills-wrapper__cards-card">
              <img src={skills_img} alt="skills_img" />
              <div>
                <img src={monitor} alt="" />
              </div>
              <span>Видеонаблюдение через интернет</span>
              <p>
                Для онлайн доступа к камерам достаточно иметь доступ к Интернету
                на объекте. Подключившись удаленно к системе видеонаблюдения
                можно просматривать видео и запись в режиме времени.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
