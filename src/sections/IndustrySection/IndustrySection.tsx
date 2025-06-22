import React from "react";
import styles from "./IndustrySection.module.scss";
import { ReactNode } from "react";
import CashIcon from "../../components/icons/CashIcon";
import MessageIcon from "../../components/icons/MessageIcon";
import TimeIcon from "../../components/icons/TimeIcon";
import PhoneIcon from "../../components/icons/PhoneIcon";

interface IndustryCard {
  text: string;
  icon: ReactNode;
}

const cards: IndustryCard[] = [
  {
    text: "Специальные оптовые цены",
    icon: <CashIcon />, // You can replace this with your SVG component
  },
  {
    text: "Поддержĸа на всех этапах",
    icon: <MessageIcon />, // You can replace this with your SVG component
  },
  {
    text: "Быстрая обработĸа и отгрузĸа заĸазов",
    icon: <TimeIcon />, // You can replace this with your SVG component
  },
  {
    text: "Удобное оформление заĸазов через приложение",
    icon: <PhoneIcon />, // You can replace this with your SVG component
  },
];

const IndustrySection: React.FC = () => (
  <section className={styles.industry} id="business">
      <h2 className={`${styles["industry__heading"]} h2`}>Работаете в индустрии?</h2>
      <div className={styles.industry__special}>
        <span className={`${styles["industry__special-text"]} h4`}>
          У нас есть особые условия для вас
        </span>
      </div>
      <div className={styles.industry__bottom}>
        <div className={styles.industry__bottom_left}>
        Мы ценим партнёрство и предлагаем выгодные условия для заведений и магазинов
        </div>
        <div className={styles.industry__bottom_right}>
          {cards.map((card, idx) => (
            <div className={styles.industry__card} key={idx}>
              {card.icon && (
                <div className={styles.industry__card_icon}>{card.icon}</div>
              )}
              <span className={`${styles["industry__card-text"]} med-paragraph`}>
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>
  </section>
);

export default IndustrySection;
