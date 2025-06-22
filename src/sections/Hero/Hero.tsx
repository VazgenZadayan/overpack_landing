import React, { useMemo } from "react";
import "./Hero.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import Image from "next/image";
import { FaTruck, FaUserShield, FaCreditCard, FaBolt, FaBoxes, FaGooglePlay, FaAppStore } from "react-icons/fa";

const Hero = () => {
  const pathname = usePathname();

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

  return (
    <section className="main-banner" id="main">
      <header className="hero-header">
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
      <h1 className="main-banner__title">OverPack</h1>
      <span className="main-banner__subtitle main-banner__subtitle--dark">
        — первый онлайн-магазин
      </span>
      <span className="main-banner__subtitle main-banner__subtitle--pink">
        ĸальянной продуĸции
      </span>
      <span className="main-banner__subtitle main-banner__subtitle--dark">
        в Армении
      </span>
      <div className="appstore-buttons">
        <div className="appstore-buttons__btn">
          <FaGooglePlay size={60} color="#fff" />
          <span className="appstore-buttons__label">Available on Google Play</span>
        </div>
        <div className="appstore-buttons__btn">
          <FaAppStore size={60} color="#fff" />
          <span className="appstore-buttons__label">Available on App Store</span>
        </div>
      </div>
      <section className="features">
        <div className="features__track">{RenderFeatures}</div>
      </section>
    </section>
  );
};

export default Hero;
