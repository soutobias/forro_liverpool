'use client'

// eslint-disable-next-line camelcase
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
import Script from 'next/script'
import forroLogoInstagram from '@/assets/fl_logo_instagram.png'

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

// eslint-disable-next-line camelcase
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Forro Liverpool</title>
        <link rel="icon" type="image/png" href="/images/fl_logo.png" />
        <meta
          name="description"
          content="Brazilian forró classes & events in the heart of Liverpool"
        />
        <meta property="og:title" content="Forro Liverpool" />
        <meta property="og:url" content="https://www.forroliverpool.co.uk/" />
        <meta
          property="og:description"
          content="Brazilian forró classes & events in the heart of Liverpool"
        />
        <meta
          property="og:image"
          content="https://www.forroliverpool.co.uk/images/meta_image1.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en-GB" />
      </head>
      <body
        className={`${pieches.variable} ${roboto.variable} ${inter.variable} ${changa.variable} ${openSans.variable}  main-page font-sans`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
