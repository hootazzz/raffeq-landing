import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'رفيق | RAFFEQ — تطبيق السفر المتكامل',
  description:
    'رفيقك في كل رحلة — حجوزات طيران، فنادق، تأشيرات، وكل خدمات السفر في تطبيق واحد.',
  openGraph: {
    title: 'رفيق | RAFFEQ',
    description: 'تطبيق السفر المتكامل — طيران، فنادق، تأشيرات، وأكثر.',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body>{children}</body>
    </html>
  );
}
