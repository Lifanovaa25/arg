import { TanstackQuery } from '@/src/app/providers/TanStackQuery';
import { ToastProvider } from '@/src/app/providers/Toast';
import { MainProvider } from '@/src/app/providers/MainContainer';
import { Header } from '@/src/widgets/Header';
import { Footer } from '@/src/widgets/Footer';
import { Aside } from '@/src/widgets/Aside';
import { onest, mont } from '@/src/shared/assets/fonts/fonts';
import '@/src/app/styles/globals.scss';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { CartProvider } from '@/src/app/providers/CartProvider/CartProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReCaptchaProvider reCaptchaKey="6LdU9GgqAAAAAAJiU_oxCNnUTR4HkG_0tCuHHlCz">
      <html lang="en">
        <head>
          {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        /> */}
          {/* <link rel="icon" href="/public/favicon.png" />  */}
          {/* <link rel="icon" href="/favicon.png" sizes="any" /> */}
          <link rel="icon" href="/favicon2.ico" sizes="any" />
        </head>
        <body className={`${mont.variable} ${onest.variable}`}>
          <div id="__next">
            <TanstackQuery>
              <ToastProvider>
                <CartProvider>
                  <Header />

                  <Aside />

                  <MainProvider>{children}</MainProvider>

                  <Footer />
                </CartProvider>
              </ToastProvider>
            </TanstackQuery>
          </div>
        </body>
      </html>
    </ReCaptchaProvider>
  );
}
