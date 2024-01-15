'use client'

import { Hero } from '@/components/Hero'
// import { VideoIntro } from '@/components/VideoIntro'
import { ClassEvents } from '@/components/ClassEvents'
import { Community } from '@/components/Community'
import { Navbar } from '@/components/NavBar'
import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useRef, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getCookieAuth } from '@/lib/handleCookie'
import { ClassEvent } from '@/components/ClassEvent'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { fetchApi } from '@/lib/api'
import { Faq } from '@/components/Faq'
import Head from 'next/head'
import { useLanguage } from '@/lib/language'

export interface keyable {
  [key: string]: any
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [showEvent, setShowEvent] = useState<keyable>({})
  const [site, setSite] = useState<keyable[] | null>(null)
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null)

  const { language } = useLanguage()

  const [url, setUrl] = useState<string>('')
  const [urlFestival, setUrlFestival] = useState<string>('')

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
    if (language === 'en') {
      setUrl('api/v1/sites')
      setUrlFestival('api/v1/sitefestivals')
    } else {
      setUrl('api/v1/site_translations')
      setUrlFestival('api/v1/site_festival_translations')
    }
  }, [language])

  useEffect(() => {
    if (url) {
      fetchApi(url, setSite)
      fetchApi(urlFestival, setSiteFestival)
    }
  }, [url, urlFestival])

  useEffect(() => {
    setShowGDPR(getCookieAuth())
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (siteFestival) {
      setTimeout(() => {
        const hash = window.location.hash
        if (hash) {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }, 500)
    }
  }, [siteFestival])

  console.log('site', isVisible)
  if (!hasMounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>Forro Liverpool</title>
        <meta name="description" content="Forro Liverpool" />
        {/* Other metadata tags */}
      </Head>
      <div
        className={
          showGDPR ? 'overflow-hidden pointer-events-none opacity-20' : ''
        }
      >
        <FrameImportant site={site} />
        {siteFestival && (
          <div ref={targetRef}>
            <Navbar siteFestival={siteFestival} />
          </div>
        )}
        <Hero site={site} />
        <ClassEvents setShowEvent={setShowEvent} />
        <Community />
        <Faq isFestival={false} />
        <Footer siteFestival={siteFestival} />
        {Object.keys(showEvent).length > 0 && (
          <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
        )}
        {!isVisible && <UpButton />}
      </div>
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
    </>
  )
}
