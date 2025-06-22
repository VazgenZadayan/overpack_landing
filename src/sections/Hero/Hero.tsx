import React, { useMemo } from "react";
import "./Hero.scss";
import DeliveryIcon from "@/components/icons/DeliveryIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import CardIcon from "@/components/icons/CardIcon";
import AppStoreIcon from "@/components/icons/AppStoreIcon";
import GooglePlayIcon from "@/components/icons/GooglePlayIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

const GOOGLE_PLAY_URL = "https://play.google.com/store";
const APP_STORE_URL = "https://www.apple.com/app-store/";

const Hero = () => {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuresRepeatCount = 3;
  const features = [
    { icon: <DeliveryIcon width={30} height={30} />, text: "Удобная доставка" },
    {
      icon: <CheckIcon width={30} height={30} />,
      text: "Официальные дистрибьюторы",
    },
    {
      icon: <CardIcon width={30} height={30} />,
      text: "Безопасная Оплата картой",
    },
    {
      icon: <CheckIcon width={30} height={30} />,
      text: "Быстрая обработка заказов",
    },
    {
      icon: <CheckIcon width={30} height={30} />,
      text: "Большой ассортимент товаров",
    },
  ];

  const RenderFeatures = useMemo(
    () =>
      Array.from({ length: featuresRepeatCount }).flatMap((_, i) =>
        features.map((feature, j) => (
          <div className="features__block" key={i + "-" + j}>
            {feature.icon}
            <span className="features__text big-paragraph">{feature.text}</span>
          </div>
        )),
      ),
    [featuresRepeatCount],
  );

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
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="appstore-buttons__btn"
        >
          <GooglePlayIcon />
        </a>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="appstore-buttons__btn"
        >
          <AppStoreIcon />
        </a>
      </div>
      <section className="features">
        <div className="features__track">{RenderFeatures}</div>
      </section>
    </section>
  );
};

export default Hero;
