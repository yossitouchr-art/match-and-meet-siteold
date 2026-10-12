import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TabBar } from '@/components/Chrome';
import { RegisterSW } from '@/components/Pwa';
import { Reveal } from '@/components/Motion';
import { JsonLd, siteGraph } from '@/lib/jsonld';
import { NAME, ORG_DESCRIPTION, SITE_URL, SLOGAN } from '@/lib/site';

const display = Fraunces({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--font-display', display: 'swap' });
const body = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${NAME} | Compatibility-led matchmaking events in Bangkok`, template: `%s | ${NAME}` },
  description: ORG_DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  openGraph: {
    type: 'website', siteName: NAME, locale: 'en_US', url: SITE_URL, title: `${NAME}: ${SLOGAN}`, description: ORG_DESCRIPTION,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${NAME}: ${SLOGAN}` }],
  },
  twitter: { card: 'summary_large_image', title: `${NAME}: ${SLOGAN}`, description: ORG_DESCRIPTION, images: ['/og.png'] },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  appleWebApp: { capable: true, title: NAME, statusBarStyle: 'black-translucent' },
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#140F10',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <TabBar />
        <RegisterSW />
        <Reveal />
        <JsonLd data={siteGraph} />
      </body>
    </html>
  );
}
