'use client'

import { useEffect, useState } from 'react'
import { keyable } from '@/components/ClassEvent'
import { fetchApi } from '@/lib/api'
import Image from 'next/image'
import { ArrowUpRight } from 'phosphor-react'
import { FrameImportant } from '@/components/FrameImportant'
import { Navbar } from '@/components/NavBar'
import { getToken } from '@/lib/handleCookie'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { GDPR } from '@/components/GDPR'
import { EventCard } from '@/components/EventCard'
import styles from '@/components/Bg.module.css'
import { LocationMarker } from '@/assets/location_marker'
import { MainButton } from '@/components/MainButton'
import { useSearchParams } from 'next/navigation'

export default function EventDetails() {
  const [events, setEvents] = useState<keyable[]>([])
  const [showEvent, setShowEvent] = useState<keyable>({})
  const [selectedEvent, setSelectedEvent] = useState<keyable | null>(null)
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null)
  const [site, setSite] = useState<keyable[] | null>(null)
  const [showGDPR, setShowGDPR] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  const url = 'api/v1/sites'
  const urlEvents = 'api/v1/events'
  const urlFestival = 'api/v1/sitefestivals'

  const searchParams = useSearchParams()

  const paramsId = searchParams.get('id')

  console.log(showEvent)
  useEffect(() => {
    fetchApi(url, setSite)
    fetchApi(urlFestival, setSiteFestival)
  }, [])

  useEffect(() => {
    fetchApi(urlEvents, setEvents)
  }, [paramsId])

  useEffect(() => {
    if (events.length > 0) {
      const foundEvent = events.find((event) => {
        return String(event.id) === paramsId
      })
      setSelectedEvent(foundEvent || null)
    }
  }, [events, paramsId])

  const [language, setLanguage] = useState('en')
  useEffect(() => {
    setShowGDPR(getToken())
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <div className={showGDPR ? 'overflow-hidden pointer-events-none' : ''}>
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
      <div className={`w-full z-[59] relative ${styles.begeBg} pb-20`}>
        {selectedEvent && (
          <div className="px-4 md:px-[8.75rem] mt-[7.25rem] md:mt-[9rem]">
            <div className="md:flex md:justify-between md:gap-20">
              <Image
                src={selectedEvent.image[0]}
                alt="illustration"
                className="rounded-xl h-[12rem] md:h-max w-full md:w-[50%] object-cover"
                width={1336}
                height={192}
              />
              <div className="pt-7 pb-8">
                <div className="pt-0">
                  <h1 className="font-changa text-[2rem] leading-10 font-extrabold text-black">
                    {selectedEvent.name}
                  </h1>
                  <div className="flex gap-16 justify-between w-full pb-6 pt-7">
                    <div className="">
                      <div className="bg-pink-400 uppercase text-white mb-4 w-max pl-3 font-bold pr-3 rounded-2xl text-[1rem] font-sans">
                        {selectedEvent.date}
                      </div>
                      <div className="bg-pink-400 uppercase text-white w-max pl-3 font-bold pr-3 rounded-2xl text-[1rem] font-sans">
                        &pound;7
                      </div>
                    </div>
                    <div>
                      {selectedEvent.location && (
                        <div>
                          <div className="flex text-black">
                            <LocationMarker />
                            <div className="text-black uppercase leading-4 pl-0 mt-1 ml-1 font-bold text-[1rem] font-sans">
                              {selectedEvent.location[0]}
                            </div>
                            <ArrowUpRight size={20} />
                          </div>
                          <div className="ml-4 mt-2 text-black">
                            <div className="text-black leading-4 pl-0 mt-1 font-normal text-[1rem] font-sans">
                              {selectedEvent.location[1]}
                            </div>
                            <div className="text-black leading-4 pl-0 mt-1 pt-3 font-normal text-[1rem] font-sans">
                              {selectedEvent.time}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-8">
                    <p className="text-black text-[1rem] leading-6 font-sans font-semibold">
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {selectedEvent.type_event === 'Special Events' && (
              <div className="pt-8 z-[61]">
                <MainButton
                  href="#"
                  content="GET TICKETS"
                  bg="black"
                  font="white"
                />
              </div>
            )}
            <h1 className="font-changa text-[1.5rem] leading-10 font-extrabold text-black pt-12">
              Plus, join us for...
            </h1>
            <div className="pt-8 md:grid md:grid-cols-2 md:gap-4">
              {events &&
                events.length > 0 &&
                events.map(
                  (event: any) =>
                    String(event.id) !== paramsId && (
                      <EventCard
                        key={event.id}
                        event={event}
                        setShowEvent={setShowEvent}
                      />
                    ),
                )}
            </div>
          </div>
        )}
      </div>
      <Footer
        siteFestival={siteFestival}
        language={language}
        setLanguage={setLanguage}
      />
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
      <UpButton />
    </div>
  )
}
