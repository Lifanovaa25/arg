import { TanstackQuery } from '@/src/app/providers/TanStackQuery';
import { StoreProvider } from '@/src/app/providers/Store';
import { ToastProvider } from '@/src/app/providers/Toast';
import { MainProvider } from '@/src/app/providers/MainContainer';
import { Header } from '@/src/widgets/Header';
import { Footer } from '@/src/widgets/Footer';
import { Aside } from '@/src/widgets/Aside';
import { onest, mont } from '@/src/shared/assets/fonts/fonts';
import '@/src/app/styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${mont.variable} ${onest.variable}`}>
        <div id="__next">
          <StoreProvider>
            <TanstackQuery>
              <ToastProvider>
                <Header />

                <Aside />

                <MainProvider>{children}</MainProvider>

                <Footer />
              </ToastProvider>
            </TanstackQuery>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
