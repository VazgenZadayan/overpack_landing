import React, { useRef, useEffect } from "react";
import styles from "./WhyChooseOverPack.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WhyChooseOverPackProps {
  dictionary: any;
}

const WhyChooseOverPack: React.FC<WhyChooseOverPackProps> = ({ dictionary }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Получаем DOM-элемент кастомного скролл-контейнера
      const scrollContainer = document.querySelector('.fullpage-scroll-container');

      // Анимация заголовка
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
      // Анимация карточек
      if (cardsContainerRef.current) {
        const cards = gsap.utils.toArray<HTMLElement>(
          cardsContainerRef.current.querySelectorAll(`.${styles.whychoose__card}`)
        );
        gsap.fromTo(
          cards,
          { y: 40, scale: 0.95, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.09,
            delay: 0.1,
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
    <section className={styles.whychoose} id="advantages" ref={sectionRef}>
      <h2 className={`${styles["whychoose__heading"]} h2`} ref={headingRef}>
        {dictionary.whyChoose.title}
      </h2>
      <div className={styles.whychoose__cards} ref={cardsContainerRef}>
        {dictionary.whyChoose.cards.map((card: any, idx: number) => (
          <div className={styles.whychoose__card} key={idx}>
            <div className={`${styles["whychoose__card-title"]} h5`}>
              {card.title.split(" ").map((word: string, i: number) => (
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
};

export default WhyChooseOverPack;
