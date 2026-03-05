import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'McKinney Plumbing Experts | Trusted Plumbing Services in McKinney, TX',
  description:
    'McKinney Plumbing Experts offers professional residential and commercial plumbing services in McKinney, Texas. 24/7 emergency service. Call (469) 555-1234.',
  keywords: 'plumbing, McKinney, Texas, plumber, emergency plumbing, drain cleaning, water heater',
}

export const viewport: Viewport = {
  themeColor: '#1a5fb4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
