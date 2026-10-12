import type { Metadata, Viewport } from 'next';
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/custom/providers';

const display = Source_Serif_4({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-data',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nagarjunaiasacademy.vercel.app'),
  title: {
    default: 'Nagarjuna IAS Academy | UPSC & APPSC Coaching, Guntur',
    template: '%s | Nagarjuna IAS Academy',
  },
  description:
    'Nagarjuna IAS Academy, Guntur: holistic and interdisciplinary UPSC Civil Services preparation with the 4i approach, daily current affairs briefings, a 3D geo atlas and answer-writing mastery under Sri V. Ravindra Babu.',
  keywords: [
    'UPSC coaching',
    'IAS academy Guntur',
    'APPSC Group 1',
    'current affairs UPSC',
    'civil services exam',
    'Nagarjuna IAS Academy',
  ],
  icons: { icon: '/brand/logo.png', apple: '/brand/logo.png' },
  openGraph: {
    title: 'Nagarjuna IAS Academy',
    description:
      'Transforming aspirants into officers. For Variety, Velocity and Veracity.',
    images: ['/brand/logo.png'],
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#1e2a52',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen bg-background font-sans text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
