'use client'

import { HeroLFF } from '@/components/HeroLFF'
// import { VideoIntro } from '@/components/VideoIntro'
import { Faq } from '@/components/Faq'
import { Navbar } from '@/components/NavBar'
// import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getToken } from '@/lib/handleCookie'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { VideoIntro } from '@/components/VideoIntro'
import { Teachers } from '@/components/Teachers'
import { ClassEventsLFF } from '@/components/ClassEventsLFF'
import { Liverpool } from '@/components/Liverpool'
// import { LiverpoolEvents } from '@/components/LiverpoolEvents'
import { GetTickets } from '@/components/GetTickets'
import { fetchApi } from '@/lib/api'

export interface keyable {
  [key: string]: string
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [showEvent, setShowEvent] = useState<keyable>({})
  const [language, setLanguage] = useState('en')
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null)

  const url = 'api/v1/sitefestivals'

  useEffect(() => {
    fetchApi(url, setSiteFestival)
  }, [])

  useEffect(() => {
    setShowGDPR(getToken())
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  console.log(showEvent)
  return (
    <div className={showGDPR ? 'overflow-hidden pointer-events-none' : ''}>
      {/* <FrameImportant text="early bird tickets now available!" /> */}
      {siteFestival && (
        <>
          <Navbar
            language={language}
            setLanguage={setLanguage}
            plusColor="#EAEAEA"
            siteFestival={siteFestival}
          ></Navbar>
          <HeroLFF siteFestival={siteFestival}></HeroLFF>
          <VideoIntro siteFestival={siteFestival}></VideoIntro>
        </>
      )}
      <Teachers></Teachers>
      <ClassEventsLFF setShowEvent={setShowEvent}></ClassEventsLFF>
      <Liverpool />
      <GetTickets />
      {/* <LiverpoolEvents /> */}
      <Faq></Faq>
      <Footer></Footer>
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
      {/* {Object.keys(showEvent).length > 0 && (
        <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
      )} */}
      <UpButton />
    </div>
  )
}
