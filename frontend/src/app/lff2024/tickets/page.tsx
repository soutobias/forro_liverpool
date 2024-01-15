'use client'

import { HeroTickets } from '@/components/HeroTickets'
import { Navbar } from '@/components/NavBar'
import { useEffect, useRef, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getCookieAuth } from '@/lib/handleCookie'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { fetchApi } from '@/lib/api'
import { useLanguage } from '@/lib/language'
import Head from 'next/head'

export interface keyable {
  [key: string]: any
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null)

  const { language } = useLanguage()

  const [urlFestival, setUrlFestival] = useState<string>('')

  useEffect(() => {
    if (language === 'en') {
      setUrlFestival('api/v1/sitefestivals')
    } else {
      setUrlFestival('api/v1/site_festival_translations')
    }
  }, [language])

  useEffect(() => {
    if (urlFestival) {
      fetchApi(urlFestival, setSiteFestival)
    }
  }, [urlFestival])

  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (siteFestival) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting)
          })
        },
        { threshold: 0.1 },
      )
      if (targetRef.current) {
        observer.observe(targetRef.current)
      }

      // Clean up function
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current)
        }
      }
    }
  }, [siteFestival])

  useEffect(() => {
    setShowGDPR(false)
    // setShowGDPR(getCookieAuth())
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return (
    <>
      <Head>
        <title>Liverpool Forro Festival 2024</title>
        <meta name="description" content="Forro Liverpool" />
      </Head>
      <div className={showGDPR ? 'overflow-hidden pointer-events-none' : ''}>
        {siteFestival && (
          <>
            <div ref={targetRef}>
              <Navbar plusColor="#EAEAEA" siteFestival={siteFestival}></Navbar>
            </div>
            <HeroTickets></HeroTickets>
          </>
        )}
        <Footer siteFestival={siteFestival} />
        {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
        {!isVisible && <UpButton />}
      </div>
    </>
  )
}
