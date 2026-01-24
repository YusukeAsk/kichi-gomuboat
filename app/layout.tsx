import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
})

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: 'ゴムボート日和 | 今を一生懸命、軽やかに漕ぎ出す',
  description: '手の届く自由、日常の延長にあるワクワクする冒険。SE・個人開発者・DIY愛好家のポートフォリオサイト。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
