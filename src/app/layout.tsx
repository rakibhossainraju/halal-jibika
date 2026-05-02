import type { Metadata } from 'next';
import { Inter, El_Messiri, Open_Sans, Playfair_Display_SC } from 'next/font/google';
import '@styles/globals.css';
import NavbarComponent from '@/components/navbar/NavbarComponent';
import FooterComponent from '@/components/footer/FooterComponent';
import { HandleOnComplete } from '@/lib/custom-router';
import ProgressBarController from '@/components/ProgressBarController';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDevelopment = process?.env?.NODE_ENV === 'development';
  return (
    <html
      lang="en"
      className={`${inter.variable} ${elMessiri.variable} ${openSans.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {isDevelopment && (
          <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" />
        )}
      </head>
      <body className="antialiased">
        <ProgressBarController />
        <HandleOnComplete />
        <Suspense fallback={null}>
          <NavbarComponent />
        </Suspense>
        <ViewTransition>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[2rem]">Loading...</div>}>
            {children}
          </Suspense>
        </ViewTransition>
        <FooterComponent />
      </body>
    </html>
  );
}
