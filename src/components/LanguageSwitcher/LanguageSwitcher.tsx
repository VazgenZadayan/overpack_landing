"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "../../i18n/navigation";
import { useState, useRef, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { i18n, Locale } from "@/i18n-config";
import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const pathname = usePathname(); // usePathname из next-intl возвращает путь БЕЗ локали
  const currentLocale = useLocale() as Locale;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Проверяем активен ли язык
  const isActiveLocale = (locale: Locale) => {
    return locale === currentLocale;
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
        aria-label={`Current language: ${currentLocale.toUpperCase()}`}
      >
        <GlobeAltIcon style={{ width: 20, height: 20, verticalAlign: 'middle' }} />
      </button>
      {isOpen && (
        <div className={styles.languageSwitcher__dropdown}>
          {i18n.locales.map((locale) => {
            const isActive = isActiveLocale(locale);
            
            return (
              <Link
                key={locale}
                className={
                  styles.languageSwitcher__option +
                  (isActive ? ' ' + styles.active : '')
                }
                onClick={() => setIsOpen(false)}
                href={pathname}
                locale={locale}
                aria-label={`Switch to ${locale.toUpperCase()}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {locale.toUpperCase()}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
