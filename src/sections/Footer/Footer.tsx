"use client";
import React from "react";
import styles from "./Footer.module.scss";
import MailIcon from "../../components/icons/MailIcon";
import CallIcon from "../../components/icons/CallIcon";

const Footer: React.FC = () => (
  <footer className={styles.footer} id="partners">
      <h3 className={`${styles.footer__heading} h3`}>
        Производите или поставляете кальянную продукцию?
      </h3>
      <div className={styles.footer__section}>
        <div className={styles.footer__leftBlock}>
          <div className={`${styles.footer__cooperationText} big-paragraph sb`}>
            Мы открыты к сотрудничеству с брендами и дистрибьюторами.
          </div>
          <button className={styles.footer__contactBtn}>Связаться</button>
        </div>
        <div className={styles.footer__rightBlock}>
          <div className={`${styles.footer__rightText} big-paragraph sb`}>
            Если вы хотите продавать свою продукцию через Overpack — оставьте
            заявку, и мы свяжемся с вами.
          </div>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className={styles.footer__copyright}>© ООО &quot;OVER&quot; 2025</div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__contactsBlock}>
            <CallIcon />
            <span className={styles.footer__contact}>+7 499 930 34 24</span>
          </div>
          <div className={styles.footer__contactsBlock}>
            <MailIcon />
            <span className={styles.footer__contact}>overpack@hook.com</span>
          </div>
        </div>
      </div>
  </footer>
);

export default Footer;
