"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../app/[lang]/styles/styles.scss";

interface AnchorProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const Anchor: React.FC<AnchorProps> = ({ scrollContainerRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const onScroll = () => {
      setVisible(container.scrollTop > 200);
    };
    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);

  const handleClick = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return visible ? (
    <div className="anchor-floating" onClick={handleClick}>
      <FaArrowUp size={32} color="#fff" />
    </div>
  ) : null;
};

export default Anchor;
