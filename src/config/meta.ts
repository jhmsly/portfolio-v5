import 'server-only';

import { IS_PREVIEW, IS_PRODUCTION } from '@/config/environment';

let GET_WEB_URL: string = 'https://localhost:3000';

if (IS_PRODUCTION) GET_WEB_URL = 'https://hemsley.dev';
if (IS_PREVIEW)
  GET_WEB_URL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : '';

export const WEB_URL = GET_WEB_URL;
export const WEB_URL_PREVIEW_HOSTNAME_MASK = 'hemsley.dev';
export const META_URL = WEB_URL;
export const META_FORMAT_DETECTION = false;

// Replace ColorSchemeEnum with cloned enum here.
export type ViewportColorScheme =
  | 'normal'
  | 'light'
  | 'dark'
  | 'light dark'
  | 'dark light'
  | 'only light';

export const VIEWPORT_COLOR_SCHEME: ViewportColorScheme = 'dark light';
