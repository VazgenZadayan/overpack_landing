// Автоматическое определение API URL на основе окружения
const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  
  return process.env.NODE_ENV === 'production' 
    ? 'https://api.overpack.am' 
    : 'https://test-api.overpack.am';
};

export const config = {
  API_BASE_URL: getApiBaseUrl(),
  
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Overpack',
  APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  
  CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+37441919694',
  
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
  CORS_METHODS: process.env.CORS_METHODS || 'POST, OPTIONS',
  CORS_HEADERS: process.env.CORS_HEADERS || 'Content-Type',
} as const;

// Логирование для отладки (только в development)
if (config.NODE_ENV === 'development') {
  console.log(`🚀 API Base URL: ${config.API_BASE_URL}`);
  console.log(`📱 Environment: ${config.NODE_ENV}`);
}

export const apiEndpoints = {
  newsletter: `${config.API_BASE_URL}/v1/user/add/newsletter/phone`,
} as const;

export default config;
