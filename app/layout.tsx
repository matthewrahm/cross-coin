import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Fredoka } from 'next/font/google'
import { Nav } from './(site)/nav'
import { GA } from './components/analytics'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://just-a-community.example'),
  title: 'Just a Community — The Value Is Us',
  description: 'No roadmap. No utility. No promises. Just a community that shows up.',
  openGraph: {
    title: 'Just a Community — The Value Is Us',
    description: 'No roadmap. No utility. No promises. Just a community that shows up.',
    type: 'website',
    url: 'https://just-a-community.example',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Just a Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just a Community — The Value Is Us',
    description: 'No roadmap. No utility. No promises. Just a community that shows up.',
    images: ['/api/og'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#faf8f4',
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


