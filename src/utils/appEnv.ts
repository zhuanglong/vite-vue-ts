export function getAppInfo() {
  const env = import.meta.env;
  return {
    appName: env.VITE_APP_NAME || '',
    apiPrefix: env.VITE_API_PREFIX || '',
  };
}

export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

export function isProdMode(): boolean {
  return import.meta.env.PROD;
}
