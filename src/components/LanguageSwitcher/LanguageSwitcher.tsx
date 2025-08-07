"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";
import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
        if (locale === "en") {
      return "/";
    }
    
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={styles.languageSwitcher__button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <GlobeAltIcon style={{ width: 20, height: 20, verticalAlign: 'middle' }} />
      </button>
      {isOpen && (
        <div className={styles.languageSwitcher__dropdown}>
          {i18n.locales.map((language) => (
            <Link
              key={language}
              className={
                styles.languageSwitcher__option +
                (language === pathname?.replaceAll('/', '') ? ' ' + styles.active : '')
              }
              onClick={() => setIsOpen(false)}
              href={redirectedPathname(language)}
            >
              {language.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
