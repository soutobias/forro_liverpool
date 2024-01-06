'use client'

import { Hero } from '@/components/Hero'
// import { VideoIntro } from '@/components/VideoIntro'
import { ClassEvents } from '@/components/ClassEvents'
import { Community } from '@/components/Community'
import { Navbar } from '@/components/NavBar'
import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getToken } from '@/lib/handleCookie'
import { ClassEvent } from '@/components/ClassEvent'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { fetchApi } from '@/lib/api'
import { Faq } from '@/components/Faq'

export interface keyable {
  [key: string]: any
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [showEvent, setShowEvent] = useState<keyable>({})
  const [site, setSite] = useState<keyable[] | null>(null)
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null)
  const [showQuestion, setShowQuestion] = useState<keyable[] | null>(null)

  const url = 'api/v1/sites'
  const urlFestival = 'api/v1/sitefestivals'
  const urlQuestions = 'api/v1/questions'

  useEffect(() => {
    fetchApi(url, setSite)
    fetchApi(urlFestival, setSiteFestival)
  }, [])

  const [language, setLanguage] = useState('en')
  useEffect(() => {
    setShowGDPR(getToken())
    setHasMounted(true)
  }, [])

  useEffect(() => {
    fetchApi(urlQuestions, setShowQuestion)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <>
      <div
        className={
          showGDPR ? 'overflow-hidden pointer-events-none opacity-20' : ''
        }
      >
        <FrameImportant site={site} />
        {siteFestival && (
          <>
            <Navbar
              language={language}
              setLanguage={setLanguage}
              siteFestival={siteFestival}
            />
          </>
        )}
        <Hero site={site} />
        <ClassEvents setShowEvent={setShowEvent} />
        <Community />
        {showQuestion && (
          <>
            <Faq
              showQuestion={showQuestion}
              setShowQuestion={setShowQuestion}
            />
          </>
        )}
        <Footer siteFestival={siteFestival} />
        {Object.keys(showEvent).length > 0 && (
          <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
        )}
        <UpButton />
      </div>
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
    </>
  )
}
