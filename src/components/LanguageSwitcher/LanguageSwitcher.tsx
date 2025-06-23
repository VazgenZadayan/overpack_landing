"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import "./LanguageSwitcher.scss";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { i18n, Locale } from "@/i18n-config";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
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
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <LanguageIcon style={{ width: 20, height: 20, verticalAlign: 'middle' }} />
      </button>
      {isOpen && (
        <div className="language-switcher__dropdown">
          {i18n.locales.map((language) => (
            <Link
              key={language}
              className={`language-switcher__option ${
                language === pathname?.replaceAll('/', '') ? "active" : ""
              }`}
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
