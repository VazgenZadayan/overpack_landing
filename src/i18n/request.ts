import { getRequestConfig } from 'next-intl/server';
import { i18n } from '../i18n-config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Получаем локаль из request
  let locale = await requestLocale;
  
  // Валидация языка
  if (!locale || !i18n.locales.includes(locale as any)) {
    locale = i18n.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../dictionaries/${locale}.json`)).default,
    timeZone: 'Asia/Yerevan',
    now: new Date()
  };
});

