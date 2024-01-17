'use client'

import {
  Roboto_Flex as Roboto,
  Inter,
  Changa,
  Open_Sans,
} from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import localFont from '@next/font/local'
// import { NavBar } from '@/components/NavBar'
import { LanguageProvider } from '@/lib/language'

const pieches = localFont({
  src: [
    {
      path: '../fonts/pieches-webfont.woff',
    },
  ],
  variable: '--font-pieches',
})

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const changa = Changa({ subsets: ['latin'], variable: '--font-changa' })

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${pieches.variable} ${roboto.variable} ${inter.variable} ${changa.variable} ${openSans.variable}  main-page font-sans`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
