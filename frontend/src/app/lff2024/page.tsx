'use client'

import { HeroLFF } from '@/components/HeroLFF'
// import { VideoIntro } from '@/components/VideoIntro'
import { Faq } from '@/components/Faq'
import { Navbar } from '@/components/NavBar'
// import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useRef, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getCookieAuth } from '@/lib/handleCookie'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { VideoIntro } from '@/components/VideoIntro'
import { Teachers } from '@/components/Teachers'
import { ClassEventsLFF } from '@/components/ClassEventsLFF'
import { Liverpool } from '@/components/Liverpool'
// import { LiverpoolEvents } from '@/components/LiverpoolEvents'
import { GetTickets } from '@/components/GetTickets'
import { fetchApi } from '@/lib/api'
import { useLanguage } from '@/lib/language'
import Head from 'next/head'
import { useRouter } from 'next/router'

export interface keyable {
  [key: string]: any
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [showEvent, setShowEvent] = useState<keyable>({})
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null)

  const { language } = useLanguage()

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
        {/* Other metadata tags */}
      </Head>
      <div className={showGDPR ? 'overflow-hidden pointer-events-none' : ''}>
        {/* <FrameImportant text="early bird tickets now available!" /> */}
        {siteFestival && (
          <>
            <div ref={targetRef}>
              <Navbar plusColor="#EAEAEA" siteFestival={siteFestival} />
            </div>
            <HeroLFF siteFestival={siteFestival}></HeroLFF>
            <VideoIntro siteFestival={siteFestival}></VideoIntro>
          </>
        )}
        <Teachers></Teachers>
        <ClassEventsLFF setShowEvent={setShowEvent}></ClassEventsLFF>
        <Liverpool />
        <GetTickets />
        {/* <LiverpoolEvents /> */}
        <Faq isFestival={true} />
        <Footer siteFestival={siteFestival} />
        {/* {showGDPR && <GDPR setShowGDPR={setShowGDPR} />} */}
        {/* {Object.keys(showEvent).length > 0 && (
        <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
      )} */}
        {!isVisible && <UpButton />}
      </div>
    </>
  )
}
