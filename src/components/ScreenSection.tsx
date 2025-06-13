import React from "react";
import "../app/styles/styles.scss";

const ScreenSection: React.FC = () => (
  <section className="screen-section" id="about">
    <div className="container">
      <div className="screen-section__card">
        <div className="screen-section__content">
          <div className="screen-section__left">
            <span className="screen-section__text h3">
              Современное и простое в использовании приложение
            </span>
          </div>
          <div className="screen-section__right">
            <img
              src="/phone-bg.png"
              alt="Phone"
              className="screen-section__phone-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ScreenSection;
