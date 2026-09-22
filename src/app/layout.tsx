import type { Metadata } from 'next';
import { Baloo_2, Manrope } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'PaGaraji — spare parts, sorted',
  description:
    'Zimbabwe’s marketplace for genuine spare parts. Buy and sell locally, or bring parts in from Dubai and China — real sellers, verified suppliers, direct chat.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${baloo.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
