'use client'
import Script from 'next/script'

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
  const rout = window.location.href.split('/').pop()
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DQR97THJN6"
          strategy="afterInteractive"
          id="ga_analytics"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-DQR97THJN6');
       `}
        </Script>
        <title>Forró Liverpool</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <meta
          name="description"
          content="All-levels Brazilian dance classes, live music, and cultural events in Liverpool, England"
        />
        <meta property="og:title" content="Forro Liverpool" />
        <meta property="og:url" content="https://www.forroliverpool.co.uk/" />
        <meta
          property="og:description"
          content="All-levels Brazilian dance classes, live music, and cultural events in Liverpool, England"
        />
        <meta
          property="og:image"
          content={
            rout !== 'lff2024'
              ? 'https://www.forroliverpool.co.uk/images/fl_meta_image.png'
              : 'https://www.forroliverpool.co.uk/images/fl_meta_image_lff.png'
          }
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
