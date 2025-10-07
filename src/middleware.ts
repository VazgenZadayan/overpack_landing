import createMiddleware from 'next-intl/middleware';
import { i18n } from './i18n-config';

// Создаем middleware с next-intl
export default createMiddleware({
  // Список всех поддерживаемых языков
  locales: i18n.locales,
  
  // Язык по умолчанию
  defaultLocale: i18n.defaultLocale,
  
  // Стратегия префиксов:
  // 'as-needed' - скрывать префикс для defaultLocale (/ для en, /hy/ и /ru/ с префиксами)
  localePrefix: 'as-needed',
  
  // Определение языка из Accept-Language заголовка
  localeDetection: true
});

export const config = {
  // Применяем middleware ко всем путям кроме api, статики и файлов
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
