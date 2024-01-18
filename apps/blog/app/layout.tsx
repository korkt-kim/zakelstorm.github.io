import '@/styles/globals.css'
import '@zakelstorm/ui/globals.css'

import { ToastCtx } from '@zakelstorm/ui'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { PropsWithChildren } from 'react'

import { AppShell } from '@/features/layouts/AppShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '코딩하는 폴제트',
  description: '프론트엔드 개발자, 코딩하는 폴제트의 작은 공간입니다.',
}

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang='en'>
      <Script src='/env.js' type='text/javascript' />
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
        <ToastCtx />
      </body>
    </html>
  )
}
