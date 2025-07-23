'use client';
import Link from "next/link";
import Image from "next/image";   
import { getDictionary } from "../../get-dictionary";
import type { Locale } from "../../i18n-config";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function NotFound() {

  const pathname = usePathname();

  const match = pathname.match(/^\/(en|ru|hy)(\/|$)/);
  const locale = (match?.[1] || "en") as Locale;

  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(locale).then(setDict);
  }, [locale]);

  if (!dict) {
    return null;
  }

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "inherit",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        paddingBottom: '100px',
      }}
    >
      <Image
        src="/LogoWithText.svg"
        alt="Logo"
        width={480}
        height={250}
      />
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          margin: 0,
          color: "#222",
          fontWeight: 800,
          letterSpacing: "-2px",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          margin: "16px 0 8px",
          color: "#444",
          fontWeight: 700,
        }}
      >
        {dict.notFound.title}
      </h2>
      <p
        style={{
          color: "#666",
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          marginBottom: 32,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        {dict.notFound.description}
      </p>
      <Link
        href={`/${locale}`}
        style={{
          display: "inline-block",
          background: "#222",
          color: "#fff",
          padding: "12px 32px",
          borderRadius: 32,
          fontWeight: 600,
          fontSize: "1.1rem",
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          transition: "background 0.2s",
        }}
      >
        {dict.notFound.backToHome}
      </Link>
    </div>
  );
}
