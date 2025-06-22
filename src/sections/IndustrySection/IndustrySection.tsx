import React from "react";
import styles from "./IndustrySection.module.scss";
import { ReactNode } from "react";
import { FaTags, FaHeadset, FaShippingFast, FaMobileAlt } from "react-icons/fa";

interface IndustryCard {
  text: string;
  icon: ReactNode;
}

const iconColor = "var(--primary-color)";

const cards: IndustryCard[] = [
  {
    text: "Эксклюзивные оптовые цены!",
    icon: <FaTags color={iconColor} />,
  },
  {
    text: "Персональная поддержка на каждом шаге!",
    icon: <FaHeadset color={iconColor} />,
  },
  {
    text: "Быстрая обработка и отгрузка заказов!",
    icon: <FaShippingFast color={iconColor} />,
  },
  {
    text: "Все товары для кальянной — в одном удобном приложении!",
    icon: <FaMobileAlt color={iconColor} />,
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
          <p>Работайте с нами — лучшие предложения для заведений и магазинов только у <span>OverPack!</span></p>
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
