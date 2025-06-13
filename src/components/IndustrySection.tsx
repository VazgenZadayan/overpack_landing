import React from "react";
import "../app/styles/styles.scss";
import { ReactNode } from "react";
import CashIcon from "./icons/CashIcon";
import MessageIcon from "./icons/MessageIcon";
import TimeIcon from "./icons/TimeIcon";
import PhoneIcon from "./icons/PhoneIcon";

interface IndustryCard {
  text: string;
  icon: ReactNode;
}

const cards: IndustryCard[] = [
  {
    text: "Card 1 text goes here.",
    icon: <CashIcon />, // You can replace this with your SVG component
  },
  {
    text: "Card 2 text goes here.",
    icon: <MessageIcon />, // You can replace this with your SVG component
  },
  {
    text: "Card 3 text goes here.",
    icon: <TimeIcon />, // You can replace this with your SVG component
  },
  {
    text: "Card 4 text goes here.",
    icon: <PhoneIcon />, // You can replace this with your SVG component
  },
];

const IndustrySection: React.FC = () => (
  <section className="industry" id="business">
    <div className="container">
      <h2 className="industry__heading h2">Do you work in the industry?</h2>
      <div className="industry__special">
        <span className="industry__special-text h4">
          We have special conditions for you
        </span>
      </div>
      <div className="industry__bottom">
        <div className="industry__bottom-left">
          We value partnership and offer favorable conditions for establishments
          and stores
        </div>
        <div className="industry__bottom-right">
          {cards.map((card, idx) => (
            <div className="industry__card" key={idx}>
              {card.icon && (
                <div className="industry__card-icon">{card.icon}</div>
              )}
              <span className="industry__card-text med-paragraph">
                {card.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default IndustrySection;
