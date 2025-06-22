import React from "react";
import styles from "./ApplicationPreview.module.scss";

const ApplicationPreview: React.FC = () => (
  <section className={styles.screenSection} id="about">
    <div className={styles.screenSection__card}>
      <div className={styles.screenSection__content}>
        <div className={styles.screenSection__left}>
          <span className={`${styles.screenSection__text} h3`}>
            Современное и простое в использовании приложение
          </span>
        </div>
        <div className={styles.screenSection__right}>
          <img
            src="/phone-bg.png"
            alt="Phone"
            className={styles.screenSection__phoneImg}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ApplicationPreview;
