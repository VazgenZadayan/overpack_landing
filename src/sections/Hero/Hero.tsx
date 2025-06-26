import React, { useMemo, useRef, useEffect } from "react";
import styles from "./Hero.module.scss";
import LogoWithText from "../../../public/LogoWithText.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import {
    FaTruck,
    FaUserShield,
    FaCreditCard,
    FaBolt,
    FaBoxes,
    FaGooglePlay,
    FaAppStore,
} from "react-icons/fa";
import gsap from "gsap";
import Image from "next/image";

interface HeroProps {
    dictionary: any;
}

const Hero: React.FC<HeroProps> = ({ dictionary }) => {
    const pathname = usePathname();

    // Рефы для анимации
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const googlePlayBtnRef = useRef<HTMLDivElement>(null);
    const appStoreBtnRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);
    const featuresTrackRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const featuresRepeatCount = 3;

    const RenderFeatures = useMemo(() => {
        const icons = [
            <FaTruck size={24} color="#fff" key="truck" />,
            <FaUserShield size={24} color="#fff" key="shield" />,
            <FaCreditCard size={24} color="#fff" key="card" />,
            <FaBolt size={24} color="#fff" key="bolt" />,
            <FaBoxes size={24} color="#fff" key="boxes" />,
        ];
        return Array.from({ length: featuresRepeatCount }).flatMap((_, i) =>
            dictionary.hero.features.map((text: string, j: number) => (
                <div className={styles["features__block"]} key={i + "-" + j}>
                    {icons[j]}
                    <span className={styles["features__text"]}>{text}</span>
                </div>
            ))
        );
    }, [featuresRepeatCount, dictionary]);

    useEffect(() => {
        // Анимация заголовка
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            );
        }
        // Анимация подзаголовков
        if (subtitleRefs.current.length) {
            gsap.fromTo(
                subtitleRefs.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.15,
                    delay: 0.3,
                    ease: "power2.out",
                }
            );
        }
        // Анимация кнопок
        if (googlePlayBtnRef.current) {
            gsap.fromTo(
                googlePlayBtnRef.current,
                { x: -40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.7,
                    ease: "power2.out",
                }
            );
        }
        if (appStoreBtnRef.current) {
            gsap.fromTo(
                appStoreBtnRef.current,
                { x: 40, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.85,
                    ease: "power2.out",
                }
            );
        }
        // Анимация header (выплывает сверху)
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { y: -60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    delay: 0.2,
                    ease: "power2.out",
                }
            );
        }
        // Анимация features__block
        if (featuresTrackRef.current) {
            const blocks = gsap.utils.toArray<HTMLElement>(
                featuresTrackRef.current.querySelectorAll(
                    `.${styles["features__block"]}`
                )
            );
            gsap.fromTo(
                blocks,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    delay: 1.1,
                    ease: "power2.out",
                }
            );
        }
    }, []);

    return (
        <section className={styles["main-banner"]} id="main">
            <header className={styles["hero-header"]} ref={headerRef}>
                <Link href="/" className={styles["hero-logo"]}>
                    {/* <span className={styles['paragraphMini']}>{dictionary.hero.main}</span> */}
                    <Image src={LogoWithText} alt="" width={120} height={60} />
                </Link>
                <nav className={styles["hero-nav"]}>
                    <button
                        onClick={() => scrollToSection("main")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/" ? styles["active"] : ""
                        }`}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.main}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("advantages")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/advantages" ? styles["active"] : ""
                        }`}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.advantages}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("business")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/business" ? styles["active"] : ""
                        }`}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.business}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/about" ? styles["active"] : ""
                        }`}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.about}
                        </span>
                    </button>
                    <button
                        onClick={() => scrollToSection("partners")}
                        className={`${styles["hero-nav__item"]} ${
                            pathname === "/partners" ? styles["active"] : ""
                        }`}
                    >
                        <span className={styles["paragraphMini"]}>
                            {dictionary.hero.nav.partners}
                        </span>
                    </button>
                    <div className={styles["hero-lang"]}>
                        <LanguageSwitcher />
                    </div>
                </nav>
            </header>

            <h1 className={styles["main-banner__title"]} ref={titleRef}>
                {dictionary.hero.main}
            </h1>

            <p
                className={`${styles["main-banner__subtitle"]} ${styles["main-banner__subtitle--dark"]}`}
                ref={(el) => {
                    subtitleRefs.current[0] = el;
                }}
            >
                {dictionary.hero.subtitle1}
                <br />

                <span
                    className={styles["main-banner__subtitle--pink"]}
                    ref={(el) => {
                        subtitleRefs.current[1] = el;
                    }}
                >
                    {dictionary.hero.subtitle2}
                </span>
                <br />
                {dictionary.hero.subtitle3}
            </p>

            <div className={styles["appstore-buttons"]}>
                <div
                    className={styles["appstore-buttons__btn"]}
                    ref={googlePlayBtnRef}
                >
                    <FaGooglePlay size={60} color="#fff" />
                    <span className={styles["appstore-buttons__label"]}>
                        {dictionary.hero.googlePlay}
                    </span>
                </div>
                <div
                    className={styles["appstore-buttons__btn"]}
                    ref={appStoreBtnRef}
                >
                    <FaAppStore size={60} color="#fff" />
                    <span className={styles["appstore-buttons__label"]}>
                        {dictionary.hero.appStore}
                    </span>
                </div>
            </div>
            <div className={styles["features"]}>
                <div
                    className={styles["features__track"]}
                    ref={featuresTrackRef}
                >
                    {RenderFeatures}
                </div>
            </div>
        </section>
    );
};

export default Hero;
