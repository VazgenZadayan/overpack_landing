"use client";
import React, { useRef, useEffect } from "react";
import Hero from "@/sections/Hero/Hero";
import WhyChooseOverPack from "../sections/WhyChooseOverPack/WhyChooseOverPack";
import IndustrySection from "@/sections/IndustrySection/IndustrySection";
import ApplicationPreview from "../sections/ApplicationPreview/ApplicationPreview";
import Footer from "@/sections/Footer/Footer";
import Anchor from "../components/Anchor";
import "../app/[lang]/styles/styles.scss";

const MainPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const currentPageRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const numPages = 5;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Игнорируем слабые скроллы
      if (Math.abs(e.deltaY) < 30) return;

      // Блокируем скролл во время анимации
      if (isScrollingRef.current) return;

      const direction = e.deltaY > 0 ? "down" : "up";
      let nextPage = currentPageRef.current;

      if (direction === "down") {
        nextPage = Math.min(currentPageRef.current + 1, numPages - 1);
      } else if (direction === "up") {
        nextPage = Math.max(currentPageRef.current - 1, 0);
      }

      if (nextPage !== currentPageRef.current) {
        isScrollingRef.current = true;
        currentPageRef.current = nextPage;

        container.scrollTo({
          top: container.clientHeight * nextPage,
          behavior: "smooth",
        });

        // Разрешаем новый скролл через 800мс (время анимации)
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    };

    const onScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const newPage = Math.round(container.scrollTop / container.clientHeight);
        currentPageRef.current = newPage;
      }, 100); // Оставим небольшую задержку
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fullpage-scroll-container"
      ref={containerRef}
      style={{
        scrollSnapType: "none", // отключаем scroll snap
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <div className="fullpage-scroll-page">
        <Hero />
      </div>
      <div className="fullpage-scroll-page">
        <WhyChooseOverPack />
      </div>
      <div className="fullpage-scroll-page">
        <ApplicationPreview />
      </div>
      <div className="fullpage-scroll-page">
        <IndustrySection />
      </div>
      <div className="fullpage-scroll-page">
        <Footer />
      </div>
      <Anchor scrollContainerRef={containerRef} />
    </div>
  );
};

export default MainPage;
