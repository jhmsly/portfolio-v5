import 'server-only';

export const IS_DEVELOPMENT = process.env.VERCEL_ENV === 'development';
export const IS_PREVIEW = process.env.VERCEL_ENV === 'preview';
export const IS_PRODUCTION = process.env.VERCEL_ENV === 'production';
