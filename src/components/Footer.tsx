"use client";
import React from "react";
import "../app/styles/styles.scss";
import MailIcon from "./icons/MailIcon";
import CallIcon from "./icons/CallIcon";

const Footer: React.FC = () => (
  <footer className="footer" id="partners">
    <div className="container footer__main">
      <h3 className="footer__heading h3">
        Производите или поставляете кальянную продукцию?
      </h3>
      <div className="footer__section">
        <div className="footer__left-block">
          <div className="footer__cooperation-text big-paragraph sb">
            Мы открыты к сотрудничеству с брендами и дистрибьюторами.
          </div>
          <button className="footer__contact-btn">Связаться</button>
        </div>
        <div className="footer__right-block">
          <div className="footer__right-text big-paragraph sb">
            Если вы хотите продавать свою продукцию через Overpack — оставьте
            заявку, и мы свяжемся с вами.
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">© ООО "OVER" 2025</div>
        <div className="footer__contacts">
          <div className="footer__contacts-block">
            <CallIcon />
            <span className="footer__contact">+7 499 930 34 24</span>
          </div>
          <div className="footer__contacts-block">
            <MailIcon />
            <span className="footer__contact">overpack@hook.com</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
