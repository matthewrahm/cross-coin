import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Fredoka } from 'next/font/google'
import { Nav } from './(site)/nav'
import { GA } from './components/analytics'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cross-coin.example'),
  title: 'Cross Coin — A Heavenly Token of Faith & Community',
  description: 'Cross Coin represents more than just a cryptocurrency—it\'s a symbol of faith, hope, and the power of community united under divine purpose.',
  openGraph: {
    title: 'Cross Coin — A Heavenly Token of Faith & Community',
    description: 'Cross Coin represents more than just a cryptocurrency—it\'s a symbol of faith, hope, and the power of community united under divine purpose.',
    type: 'website',
    url: 'https://cross-coin.example',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Cross Coin - Heavenly Token',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross Coin — A Heavenly Token of Faith & Community',
    description: 'Cross Coin represents more than just a cryptocurrency—it\'s a symbol of faith, hope, and the power of community united under divine purpose.',
    images: ['/api/og'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#87CEEB',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${fredoka.className} h-full antialiased flex flex-col min-h-screen`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:px-4 focus:py-2 focus:bg-white focus:shadow-soft rounded-pill">Skip to content</a>
        <Nav />
        <div id="content" className="flex-1">{children}</div>
        <GA />
      </body>
    </html>
  )
}


