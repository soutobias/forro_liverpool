'use client'

import { useEffect, useState } from 'react'
import { keyable, ClassEvent } from '@/components/ClassEvent'
import { fetchApi } from '@/lib/api'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { ArrowUpRight } from 'phosphor-react'
import { FrameImportant } from '@/components/FrameImportant'
import { Navbar } from '@/components/NavBar'
import { getToken } from '@/lib/handleCookie'
import { Footer } from '@/components/Footer'
import { UpButton } from '@/components/UpButton'
import { GDPR } from '@/components/GDPR'
import { EventCard } from '@/components/EventCard'

export default function EventDetails({ params }: { params: any }) {
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

  useEffect(() => {
    fetchApi(url, setSite)
    fetchApi(urlFestival, setSiteFestival)
  }, [])

  useEffect(() => {
    fetchApi(urlEvents, setEvents)
  }, [params.id])

  useEffect(() => {
    if (events.length > 0) {
      console.log(params.id, 'params.id')
      const foundEvent = events.find((event) => {
        console.log(event.id, 'event.id')
        return String(event.id) === params.id
      })
      setSelectedEvent(foundEvent || null)
    }
  }, [events, params.id])
  console.log(selectedEvent, 'selectedEvent')

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
      <div className="">
        {selectedEvent && (
          <>
            <div className=" bg-gray-100 opacity-90"></div>
            <div className="bg-white z-20 rounded-t-2xl">
              <div className="bg-gray-100 opacity-90">
                <Image
                  src={selectedEvent.image[0]}
                  alt="illustration"
                  className="rounded-t-2xl"
                  width={1336}
                  height={400}
                />
              </div>
              <div className="pt-7 pl-3 pr-3 pb-8">
                <div className="pt-0 pr-2">
                  <p className="text-black text-[2rem] leading-9 font-sans font-semibold pb-8">
                    {selectedEvent.name}
                  </p>
                  <div className="flex gap-16 justify-between w-full pb-6">
                    <div className="pl-2">
                      <div className="bg-gray-60 uppercase text-black mb-4 w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans">
                        {selectedEvent.date}
                      </div>
                      <div className="bg-gray-60 uppercase text-black w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans">
                        &pound; 7
                      </div>
                    </div>
                    <div>
                      {selectedEvent.location && (
                        <div>
                          <div className="flex text-black">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="h-4 pr-0 pt-1"
                            />
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
                  <p className="pt-0 pb-7 text-black text-[1rem] leading-5 font-sans font-normal">
                    {selectedEvent.description}
                  </p>
                </div>
                {/* <Link
                  href="/registration"
                  className="no-underline mr-2 flex bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 justify-center"
                >
                  <div>Get Tickets</div>
                  <ArrowUpRight size={20} />
                </Link> */}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="text-black font-sans bg-white z-20 pb-2 font-bold">
        Plus, join us for...
      </div>
      <div>
        {events &&
          events.length > 0 &&
          events.map(
            (event: any) =>
              String(event.id) !== params.id && (
                <EventCard
                  key={event.id}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ),
          )}
      </div>
      <Footer siteFestival={siteFestival} />
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
      {Object.keys(showEvent).length > 0 && (
        <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
      )}
      <UpButton />
    </div>
  )
}
