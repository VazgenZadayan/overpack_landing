import React from "react";
import "../app/styles/styles.scss";
import DeliveryIcon from "./icons/DeliveryIcon";
import CheckIcon from "./icons/CheckIcon";
import CardIcon from "./icons/CardIcon";

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__block">
          <DeliveryIcon width={30} height={30} />
          <span className="features__text big-paragraph">Удобная доставка</span>
        </div>
        <div className="features__block">
          <CheckIcon width={30} height={30} />
          <span className="features__text big-paragraph">
            Официальные дистрибьюторы
          </span>
        </div>
        <div className="features__block">
          <CardIcon width={30} height={30} />
          <span className="features__text big-paragraph">Оплата картой</span>
        </div>
      </div>
    </section>
  );
};

export default Features;
