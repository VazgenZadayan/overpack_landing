import React, { useRef, useEffect } from "react";
import styles from "./ApplicationPreview.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface ApplicationPreviewProps {
  dictionary: any;
}

const ApplicationPreview: React.FC<ApplicationPreviewProps> = ({ dictionary }) => {
  const linesRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scrollContainer = document.querySelector('.fullpage-scroll-container');

    let ctx = gsap.context(() => {
      // Анимация строк текста
      gsap.fromTo(
        linesRefs.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.13,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            scroller: scrollContainer || undefined,
          },
        }
      );
      // Анимация mockup телефона
      if (phoneRef.current) {
        gsap.fromTo(
          phoneRef.current,
          { x: 40, scale: 0.9, opacity: 0 },
          {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            ease: "back.out(1.7)",
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
    <section className={styles.screenSection} id="about" ref={sectionRef}>
      <div className={styles.screenSection__card}>
        <div className={styles.screenSection__content}>
          <div className={styles.screenSection__left}>
            <span className={`${styles.screenSection__text} h3`}>
              {dictionary.applicationPreview.lines.map((line: string, i: number) => (
                <span
                  key={i}
                  ref={el => { linesRefs.current[i] = el; }}
                  style={{ display: "block", opacity: 0 }}
                >
                  {line}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.screenSection__right} ref={phoneRef}>
              <Image
                src="/phone.png"
                height={686}
                width={329}
                alt={dictionary.applicationPreview.alt}
                className={styles.screenSection__phoneImg}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationPreview;
