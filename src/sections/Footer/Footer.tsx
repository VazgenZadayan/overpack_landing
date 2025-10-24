"use client";
import React, { useRef, useEffect } from "react";
import styles from "./Footer.module.scss";
import { MdEmail, MdPhone } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "../../i18n/navigation";

interface FooterProps {
    dictionary: any;
}

const Footer: React.FC<FooterProps> = ({ dictionary }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const leftBlockRef = useRef<HTMLDivElement>(null);
    const rightBlockRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const scrollContainer = document.querySelector(
            ".fullpage-scroll-container"
        );

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
            // Левый блок
            if (leftBlockRef.current) {
                gsap.fromTo(
                    leftBlockRef.current,
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
            // Правый блок
            if (rightBlockRef.current) {
                gsap.fromTo(
                    rightBlockRef.current,
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
            // Кнопка
            if (btnRef.current) {
                gsap.fromTo(
                    btnRef.current,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        delay: 0.45,
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
            // Нижний блок (копирайт, контакты)
            if (bottomRef.current && contactsRef.current) {
                gsap.fromTo(
                    [bottomRef.current, contactsRef.current],
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 0.7,
                        delay: 0.6,
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
        <footer className={styles.footer} id="partners" ref={sectionRef}>
            <h2 className={styles.footer__heading} ref={headingRef}>
                {dictionary.footer.title}
            </h2>
            <div className={styles.footer__section}>
                <div className={styles.footer__leftBlock} ref={leftBlockRef}>
                    <div className={styles.footer__cooperationText}>
                        {dictionary.footer.cooperation}
                    </div>
                    <button
  className={styles.footer__contactBtn}
  onClick={() => {
    window.location.href = 'tel:+37441919694';
  }}
  ref={btnRef}
>
  {dictionary.footer.contact}
</button>

                </div>
                <div className={styles.footer__rightBlock} ref={rightBlockRef}>
                    <div className={styles.footer__rightText}>
                        {dictionary.footer.desc}
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom} ref={bottomRef}>
                <div className={styles.subFooter}>
                    <div className={styles.footer__copyright}>
                        {dictionary.footer.copyright}
                    </div>
                    <div className={styles.footer__links}>
                        <Link href="/privacy-policy" className={styles.footer__link}>
                            {dictionary.footer.privacyPolicy}
                        </Link>
                        <span className={styles.footer__separator}>•</span>
                        <Link href="/terms-of-use" className={styles.footer__link}>
                            {dictionary.footer.termsOfUse}
                        </Link>
                    </div>
                    <div className={styles.footer__developed}>
  {dictionary.footer.developed}
  <span
    onClick={() => {
    window.open(
        'https://am.linkedin.com/in/vazgenzadayan/en',
        '_blank',
        'noopener'
        );
      window.open(
        'https://am.linkedin.com/in/react-javascript-developer-frontend-engineer-nextjs-next-reactnative-typescript?trk=people-guest_people_search-card',
        '_blank',
        'noopener'
      );

    }}
    className={styles.footer__devlink}
    style={{ cursor: 'pointer' }}
  >
    Overpack
  </span>
</div>


                </div>
                <div className={styles.footer__contacts} ref={contactsRef}>
                    <div className={styles.footer__contactsBlock}>
                        <MdPhone size={24} color="#F03341" />
                        <a
                            href="tel:+37441919694"
                            className={styles.footer__contact}
                        >
                            {dictionary.footer.contacts.phone}
                        </a>
                    </div>
                    <div className={styles.footer__contactsBlock}>
                        <MdEmail size={24} color="#F03341" />
                        <a
                            href="mailto:overpackhookahmarket@gmail.com"
                            className={styles.footer__contact}
                        >
                            {dictionary.footer.contacts.email}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
