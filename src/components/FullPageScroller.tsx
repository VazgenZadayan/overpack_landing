"use client";
import React, { useRef } from "react";
import Header from "./Header";
import MainBanner from "./MainBanner";
import Features from "./Features";
import AppStoreButtons from "./AppStoreButtons";
import WhyChooseOverPack from "./WhyChooseOverPack";
import IndustrySection from "./IndustrySection";
import ScreenSection from "./ScreenSection";
import Footer from "./Footer";
import Anchor from "./Anchor";
import "../app/styles/styles.scss";

const FullPageScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="fullpage-scroll-container" ref={containerRef}>
      <div
        className="fullpage-scroll-page"
        style={{ height: "100vh", paddingTop: "30px" }}
      >
        <Header />
        <MainBanner />
        <Features />
        <AppStoreButtons />
      </div>
      <div
        className="fullpage-scroll-page"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WhyChooseOverPack />
      </div>
      <div
        className="fullpage-scroll-page"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--gray-1)",
        }}
      >
        <IndustrySection />
      </div>
      <div
        className="fullpage-scroll-page"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ScreenSection />
      </div>
      <div
        className="fullpage-scroll-page"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "var(--gray-1)",
        }}
      >
        <Footer />
      </div>
      <Anchor scrollContainerRef={containerRef} />
    </div>
  );
};

export default FullPageScroller;
