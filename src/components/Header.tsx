"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/styles/styles.scss";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo">
          OverPack
        </Link>
        <nav className="nav">
          <button
            onClick={() => scrollToSection("main")}
            className={`navItem ${pathname === "/" ? "active" : ""}`}
          >
            Главная
          </button>
          <button
            onClick={() => scrollToSection("advantages")}
            className={`navItem ${pathname === "/advantages" ? "active" : ""}`}
          >
            Преимущества
          </button>
          <button
            onClick={() => scrollToSection("business")}
            className={`navItem ${pathname === "/business" ? "active" : ""}`}
          >
            Для бизнеса
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`navItem ${pathname === "/about" ? "active" : ""}`}
          >
            О приложении
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className={`navItem ${pathname === "/partners" ? "active" : ""}`}
          >
            Партнерам
          </button>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;
