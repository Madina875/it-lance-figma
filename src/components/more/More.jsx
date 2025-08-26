import React from "react";
import "../more/More.scss";

const More = () => {
  return (
    <section className="more">
      <div className="container">
        <div className="more-wrapper">
          <h3>Часто задаваемые вопросы</h3>
          <div className="more-wrapper__cards">
            <div className="more-wrapper__cards-card">
              <p>За нами будет закреплен какой-нибудь IT специалист ?</p>
            </div>
            <div className="more-wrapper__cards-card">
              <p>Какие регионы Вы обслуживаете ?</p>
            </div>
            <div className="more-wrapper__cards-card">
              <span>Вы можете предоставлять круглосуточную поддержку ?</span>
              <p>
                Да, мы можем предоставить расширенный график IT обслуживания и
                круглосуточную работу нашей технической поддержки для клиентов.
                Однако мы всегда предупреждаем наших клиентов, что техническая
                поддержка в графике 24/7 сильно удорожает стоимость договора IT
                обслуживания.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default More;
