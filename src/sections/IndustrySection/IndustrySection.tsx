import React, { useRef, useEffect } from "react";
import styles from "./IndustrySection.module.scss";
import { ReactNode } from "react";
import { FaTags, FaHeadset, FaShippingFast, FaMobileAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const IndustrySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const specialRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollContainer = document.querySelector('.fullpage-scroll-container');

    let ctx = gsap.context(() => {
      // Заголовок
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: -40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              scroller: scrollContainer || undefined,
            },
          }
        );
      }
      // Подзаголовок
      if (specialRef.current) {
        gsap.fromTo(
          specialRef.current,
          { y: -40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              scroller: scrollContainer || undefined,
            },
          }
        );
      }
      // Левая часть
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              scroller: scrollContainer || undefined,
            },
          }
        );
      }
      // Карточки
      if (cardsContainerRef.current) {
        const cards = gsap.utils.toArray<HTMLElement>(
          cardsContainerRef.current.querySelectorAll(`.${styles.industry__card}`)
        );
        gsap.fromTo(
          cards,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.13,
            delay: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              scroller: scrollContainer || undefined,
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.industry} id="business" ref={sectionRef}>
        <h2 className={`${styles["industry__heading"]} h2`} ref={headingRef}>Работаете в индустрии?</h2>
        <div className={styles.industry__special}>
          <span className={`${styles["industry__special-text"]} h4`} ref={specialRef}>
            У нас есть особые условия для вас
          </span>
        </div>
        <div className={styles.industry__bottom}>
          <div className={styles.industry__bottom_left} ref={leftRef}>
            <p>Работайте с нами — лучшие предложения для заведений и магазинов только у <span>OverPack!</span></p>
          </div>
          <div className={styles.industry__bottom_right} ref={cardsContainerRef}>
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
};

export default IndustrySection;
