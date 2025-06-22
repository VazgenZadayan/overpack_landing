import React from "react";
import styles from "./WhyChooseOverPack.module.scss";

const cards = [
  {
    title: "Официальные дистрибьюторы",
    text: "Только оригинальная продукция напрямую от брендов. Гарантия качества и никаких подделок!",
  },
  {
    title: "Огромный ассортимент",
    text: "Всё для идеального кальяна: табаки, уголь, аксессуары и редкие новинки в одном месте!",
  },
  {
    title: "Удобная доставĸа",
    text: "Молниеносная доставка по Еревану. Получайте заказы быстро и без лишних ожиданий!",
  },
  {
    title: "Оплата ĸартой",
    text: "Современные и безопасные способы оплаты прямо в приложении. Максимум удобства!",
  },
  {
    title: "Удобное приложение",
    text: "Интуитивно понятный интерфейс, быстрый заказ и персональные предложения всегда под рукой!",
  },
  {
    title: "Обратная связь",
    text: "Всегда на связи! Оперативно решаем любые вопросы и учитываем ваши пожелания.",
  },
];

const WhyChooseOverPack: React.FC = () => (
  <section className={styles.whychoose} id="advantages">
    <h2 className={`${styles["whychoose__heading"]} h2`}>Почему выбирают OverPack?</h2>
    <div className={styles.whychoose__cards}>
      {cards.map((card, idx) => (
        <div className={styles.whychoose__card} key={idx}>
          <div className={`${styles["whychoose__card-title"]} h5`}>
            {card.title.split(" ").map((word, i) => (
              <span key={i} style={{ display: "block" }}>
                {word}
              </span>
            ))}
          </div>
          <div className={`${styles["whychoose__card-text"]} paragraph-mini`}>
            {card.text}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseOverPack;
