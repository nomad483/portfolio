import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import '../styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'A fast, responsive portfolio built with Next.js and TailwindCSS. Content is dynamically loaded from Google Drive, allowing easy updates without redeploying. Features include serverless API routes, clean UI/UX, and cloud-based data handling for a flexible, low-maintenance setup.',
  robots: {
    // TODO: development settings, change to true in the future
    index: false,
    follow: false,
    nocache: false,
  },
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-dvh min-w-full flex-col antialiased`}
        style={{
          minHeight: '-webkit-fill-available',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div id="background-layer" />
        <main className="relative flex min-w-full flex-grow justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
