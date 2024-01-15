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
    setTimeout(() => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 300)
  }, [])

  const [urlFestival, setUrlFestival] = useState<string>('')

  const [isNotVisible, setIsNotVisible] = useState(false)
  const targetRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsNotVisible(!entry.isIntersecting)
      },
      { threshold: 0.1 },
    ) // Adjust the threshold as needed

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

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
            <Navbar plusColor="#EAEAEA" siteFestival={siteFestival}></Navbar>
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
        <UpButton />
      </div>
    </>
  )
}
