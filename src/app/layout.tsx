import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Inter, El_Messiri, Open_Sans, Playfair_Display_SC } from 'next/font/google';
import Script from 'next/script';
import '@styles/globals.css';
import { auth } from '@/auth';
import NavbarComponent from '@/components/navbar/NavbarComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import { HandleOnComplete } from '@/lib/custom-router';
import ProgressBarController from '@/components/ProgressBarController';
import { Toaster } from '@/components/ui/sonner';
import { ViewTransition, Suspense } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const elMessiri = El_Messiri({ subsets: ['latin'], variable: '--font-el-messiri' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const playfairDisplay = Playfair_Display_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Halal Jibika',
  description: 'Find your dream job',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isDevelopment = process?.env?.NODE_ENV === 'development';

  return (
    <html
      lang="en"
      className={`${inter.variable} ${elMessiri.variable} ${openSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {isDevelopment && (
          <Script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="antialiased">
        <ProgressBarController />
        <HandleOnComplete />
        <Suspense fallback={null}>
          <NavbarComponent
            user={
              session?.user
                ? {
                    name: session.user.name ?? null,
                    image: session.user.image ?? null,
                  }
                : null
            }
          />
        </Suspense>
        <ViewTransition>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[2rem]">Loading...</div>}>
            {children}
          </Suspense>
        </ViewTransition>
        <Toaster richColors />
        <FooterComponent />
      </body>
    </html>
  );
}
