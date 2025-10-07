import { notFound } from 'next/navigation';

// Catchall для всех несуществующих страниц внутри /[lang]/
// Вызывает notFound(), который покажет /[lang]/not-found.tsx
export default function CatchAll() {
  notFound();
}

