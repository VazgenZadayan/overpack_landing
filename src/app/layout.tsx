import '../styles/global.scss';
import React from 'react';

// Root layout - только глобальные стили
// Все языковые версии рендерятся через [lang]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
} 