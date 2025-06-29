import React, { useRef, useEffect } from "react";
import styles from "./IndustrySection.module.scss";
import { FaTags, FaHeadset, FaShippingFast, FaMobileAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IndustrySectionProps {
  dictionary: any;
}

const iconColor = "#F03341";

const IndustrySection: React.FC<IndustrySectionProps> = ({ dictionary }) => {
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

  const icons = [
    <FaTags color={iconColor} key="tags" size={24} />, 
    <FaHeadset color={iconColor} key="headset" size={24} />, 
    <FaShippingFast color={iconColor} key="shipping" size={24} />, 
    <FaMobileAlt color={iconColor} key="mobile" size={24} />
  ];

  return (
    <section className={styles.industry} id="business" ref={sectionRef}>
        <h2 className={styles["industry__heading"]} ref={headingRef}>{dictionary.industry.title}</h2>
        <div className={styles.industry__special}>
          <span className={styles["industry__special-text"]} ref={specialRef}>
            {dictionary.industry.special}
          </span>
        </div>
        <div className={styles.industry__bottom}>
          <div className={styles.industry__bottom_left} ref={leftRef}>
            <p>{dictionary.industry.desc} <span>{dictionary.industry.descBrand}</span></p>
          </div>
          <div className={styles.industry__bottom_right} ref={cardsContainerRef}>
            {dictionary.industry.cards.map((text: string, idx: number) => (
              <div className={styles.industry__card} key={idx}>
                <div className={styles.industry__card_icon}>{icons[idx]}</div>
                <span className={styles["industry__card-text"]}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default IndustrySection;
