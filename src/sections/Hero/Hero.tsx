import React, { useMemo, useRef, useEffect } from "react";
import "./Hero.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Image from "next/image";
import { FaTruck, FaUserShield, FaCreditCard, FaBolt, FaBoxes, FaGooglePlay, FaAppStore } from "react-icons/fa";
import gsap from "gsap";

const Hero = () => {
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
    const features = [
      { icon: <FaTruck size={30} color="#fff" />, text: "Удобная доставка" },
      { icon: <FaUserShield size={30} color="#fff" />, text: "Официальные дистрибьюторы" },
      { icon: <FaCreditCard size={30} color="#fff" />, text: "Безопасная Оплата картой" },
      { icon: <FaBolt size={30} color="#fff" />, text: "Быстрая обработка заказов" },
      { icon: <FaBoxes size={30} color="#fff" />, text: "Большой ассортимент товаров" },
    ];
    return Array.from({ length: featuresRepeatCount }).flatMap((_, i) =>
      features.map((feature, j) => (
        <div className="features__block" key={i + "-" + j}>
          {feature.icon}
          <span className="features__text big-paragraph">{feature.text}</span>
        </div>
      ))
    );
  }, [featuresRepeatCount]);

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
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, delay: 0.3, ease: "power2.out" }
      );
    }
    // Анимация кнопок
    if (googlePlayBtnRef.current) {
      gsap.fromTo(
        googlePlayBtnRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.7, ease: "power2.out" }
      );
    }
    if (appStoreBtnRef.current) {
      gsap.fromTo(
        appStoreBtnRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, delay: 0.85, ease: "power2.out" }
      );
    }
    // Анимация header (выплывает сверху)
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
      );
    }
    // Анимация features__block
    if (featuresTrackRef.current) {
      const blocks = gsap.utils.toArray<HTMLElement>(
        featuresTrackRef.current.querySelectorAll('.features__block')
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
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <section className="main-banner" id="main">
      <header className="hero-header" ref={headerRef}>
        <Link href="/" className="hero-logo">
          OverPack
        </Link>
        <nav className="hero-nav">
          <button
            onClick={() => scrollToSection("main")}
            className={`hero-nav__item ${pathname === "/" ? "active" : ""}`}
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("advantages")}
            className={`hero-nav__item ${pathname === "/advantages" ? "active" : ""}`}
          >
            Преимущества
          </button>
          <button
            onClick={() => scrollToSection("business")}
            className={`hero-nav__item ${pathname === "/business" ? "active" : ""}`}
          >
            Для бизнеса
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hero-nav__item ${pathname === "/about" ? "active" : ""}`}
          >
            О приложении
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className={`hero-nav__item ${pathname === "/partners" ? "active" : ""}`}
          >
            Партнерам
          </button>
          <div className="hero-lang">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>
      <h1 className="main-banner__title" ref={titleRef}>OverPack</h1>
      <span
        className="main-banner__subtitle main-banner__subtitle--dark"
        ref={el => { subtitleRefs.current[0] = el; }}
      >
        — первый онлайн-магазин
      </span>
      <span
        className="main-banner__subtitle main-banner__subtitle--pink"
        ref={el => { subtitleRefs.current[1] = el; }}
      >
        ĸальянной продуĸции
      </span>
      <span
        className="main-banner__subtitle main-banner__subtitle--dark"
        ref={el => { subtitleRefs.current[2] = el; }}
      >
        в Армении
      </span>
      <div className="appstore-buttons">
        <div className="appstore-buttons__btn" ref={googlePlayBtnRef}>
          <FaGooglePlay size={60} color="#fff" />
          <span className="appstore-buttons__label">Available on Google Play</span>
        </div>
        <div className="appstore-buttons__btn" ref={appStoreBtnRef}>
          <FaAppStore size={60} color="#fff" />
          <span className="appstore-buttons__label">Available on App Store</span>
        </div>
      </div>
      <section className="features">
        <div className="features__track" ref={featuresTrackRef}>{RenderFeatures}</div>
      </section>
    </section>
  );
};

export default Hero;
