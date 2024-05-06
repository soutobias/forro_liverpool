import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import styles from './Bg.module.css'
import { LocationMarker } from '@/assets/location_marker'
import { useLanguage } from '@/lib/language'
import { MainButton } from './MainButton'
import { H1 } from './H1'

export function EventCardLFF(props: {
  size?: string
  event: keyable
  setShowEvent?: Dispatch<SetStateAction<keyable>>
  eventType?: string
}) {
  const { event } = props

  const { language } = useLanguage()
  const [position, setPosition] = useState<number>(0)

  useEffect(() => {
    if (language === 'en') {
      setPosition(0)
    } else {
      setPosition(1)
    }
  }, [language])

  const generateEventUrl = () => {
    return `/lff2024/events?id=${event.id}`
  }
  return (
    <div
      className={`mb-2 pb-2 font-changa w-full h-full rounded-2xl md:w-[22rem] md:h-[16rem] aspect-343/223 border-black border-4 ${styles.begeBg}`}
    >
      <div className="pl-3 pt-4 pr-3 font-changa w-full">
        <h2 className="font-changa text-black text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold">
          {event.name[position]}
        </h2>
        {/* <div className="text-black text-[1.5rem] md:text-[2rem] font-extrabold leading-8 md:leading-9 ont-changa">
          {event.name[position]}
        </div> */}
        <div className="grid grid-cols-2 pt-6 gap-2 justify-start">
          <div>
            <div className="bg-pink-600 uppercase text-white align-middle items-center text-[1rem] md:text-[1.25rem] font-extrabold pl-3 pr-3 py-0 rounded-2xl font-sans leading-6 md:leading-7 w-max">
              {event.time[position]}
            </div>
          </div>
          <div>
            <div className="flex text-black">
              <div>
                <LocationMarker />
              </div>
              <div className="text-black uppercase pl-0 ml-1 font-extrabold pr-2 md:pr-0 text-[1rem] font-changa leading-6 md:leading-7 md:text-[1.25rem]">
                {event.location.length === 1
                  ? `${event.location[0][0]}`
                  : `${event.location[0][0]} & ${event.location[1][0]}`}
              </div>
            </div>
          </div>
        </div>
        {event.is_class === true ? (
          <div className="flex justify-center pt-4 w-full">
            <MainButton
              href={generateEventUrl()}
              content={
                language === 'en'
                  ? 'Download Class Schedule'
                  : 'Download programação'
              }
              bg="pink-600"
              font="white"
              width="100%"
            />
          </div>
        ) : (
          <div className="flex justify-center pt-4 w-full">
            <MainButton
              href={generateEventUrl()}
              content={
                language === 'en' ? 'See event details' : 'Detalhes do evento'
              }
              bg="pink-600"
              font="white"
              width="100%"
            />
          </div>
        )}
      </div>
    </div>
  )
}
