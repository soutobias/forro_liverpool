'use client'

import { HeroLFF } from '@/components/HeroLFF'
// import { VideoIntro } from '@/components/VideoIntro'
import { Faq } from '@/components/Faq'
import { Navbar } from '@/components/NavBar'
import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getToken } from '@/lib/handleCookie'
import { ClassEvent } from '@/components/ClassEvent'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { VideoIntro } from '@/components/VideoIntro'
import { Teachers } from '@/components/Teachers'
import { Tickets } from '@/components/Tickets'
import { ClassEventsLFF } from '@/components/ClassEventsLFF'
import { Liverpool } from '@/components/Liverpool'

export interface keyable {
  [key: string]: string
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [showEvent, setShowEvent] = useState<keyable>({})

  useEffect(() => {
    setShowGDPR(getToken())
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return (
    <div className={showGDPR ? 'overflow-hidden pointer-events-none' : ''}>
      <FrameImportant text="early bird tickets now available!" />
      <Navbar></Navbar>
      <HeroLFF></HeroLFF>
      <VideoIntro></VideoIntro>
      <Teachers></Teachers>
      <Tickets />
      <ClassEventsLFF setShowEvent={setShowEvent}></ClassEventsLFF>
      <Liverpool />
      <Faq></Faq>
      <Footer></Footer>
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
      {Object.keys(showEvent).length > 0 && (
        <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
      )}
      <UpButton />
    </div>
  )
}
