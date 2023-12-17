import type { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const MessinaSans: NextFont = localFont({
  src: [
    {
      path: './local/MessinaSans/MessinaSans-Book.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './local/MessinaSans/MessinaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './local/MessinaSans/MessinaSans-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './local/MessinaSans/MessinaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './local/MessinaSans/MessinaSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});
