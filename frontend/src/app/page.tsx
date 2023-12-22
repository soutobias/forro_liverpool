'use client'

import { Hero } from '@/components/Hero'
// import { VideoIntro } from '@/components/VideoIntro'
import { ClassEvents } from '@/components/ClassEvents'
import { Community } from '@/components/Community'
import { Faq } from '@/components/Faq'
import { Navbar } from '@/components/NavBar'
import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useState } from 'react'
import { GDPR } from '@/components/GDPR'
import { getToken } from '@/lib/handleCookie'
import { ClassEvent } from '@/components/ClassEvent'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'

export interface keyable {
  [key: string]: any
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
      <FrameImportant text="liverpool forró fest early bird tickets now available!" />
      <Navbar></Navbar>
      <Hero></Hero>
      <ClassEvents setShowEvent={setShowEvent}></ClassEvents>
      <Community></Community>
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
