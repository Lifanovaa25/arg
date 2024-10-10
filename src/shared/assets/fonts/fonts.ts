import localFont from 'next/font/local';
import { Onest } from 'next/font/google';

export const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
  variable: '--font-onest',
});
export const mont = localFont({
  src: [
    {
      path: './Mont-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Mont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Mont-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Mont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-mont',
});
