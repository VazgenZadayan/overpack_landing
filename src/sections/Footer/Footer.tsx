"use client";
import React from "react";
import styles from "./Footer.module.scss";
import { MdEmail, MdPhone } from "react-icons/md";

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
        <div style={{ flexDirection: 'column', alignItems: 'flex-start', display: 'flex', gap: '5px' }}>
        <div className={styles.footer__copyright}>© OVERPACK 2025</div>
        <div className={styles.footer__developed}>
          Developed by 
          <a href="https://am.linkedin.com/in/react-javascript-developer-frontend-engineer-nextjs-next-reactnative-typescript?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer" className={styles.footer__devlink}>Gago</a>
          &amp;
          <a href="https://am.linkedin.com/in/vazgenzadayan/en" target="_blank" rel="noopener noreferrer" className={styles.footer__devlink}>Vazgen</a>
        </div>
        </div>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__contactsBlock}>
            <MdPhone size={24} color="#F03341" />
            <a href="tel:+37441919694" className={styles.footer__contact}>+374 41 919694</a>
          </div>
          <div className={styles.footer__contactsBlock}>
            <MdEmail size={24} color="#F03341" />
            <a href="mailto:overpackhookahmarket@gmail.com" className={styles.footer__contact}>overpackhookahmarket@gmail.com</a>
          </div>
        </div>
      </div>
  </footer>
);

export default Footer;
