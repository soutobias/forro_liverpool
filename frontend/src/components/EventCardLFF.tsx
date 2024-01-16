import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import styles from './Bg.module.css'
import { LocationMarker } from '@/assets/location_marker'
import { useLanguage } from '@/lib/language'
import { MainButton } from './MainButton'

export function EventCardLFF(props: {
  size?: string
  event: keyable
  setShowEvent: Dispatch<SetStateAction<keyable>>
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

  return (
    <div
      className={`mb-2 pb-2 h-full w-full font-changa rounded-2xl border-black border-4 ${styles.begeBg}`}
    >
      <div className="pl-3 pt-5 pr-3">
        <div className="text-black text-[1.5rem] md:text-[2rem] font-extrabold leading-8 md:leading-9 ont-changa">
          {event.name[position]}
        </div>
        <div className="flex pt-6">
          <div>
            <div className="bg-pink-400 uppercase text-white align-middle items-center font-bold pl-4 pr-4 py-0 rounded-2xl text-[1rem] md:text-[1.25rem] font-sans leading-6 md:leading-7">
              {event.date[position]}
            </div>
          </div>
          <div className="flex ml-6 mt-2 text-black">
            <LocationMarker />
            <div className="text-black uppercase pl-0 ml-1 font-extrabold pr-2 text-[1rem] font-changa leading-6 md:leading-7 md:text-[1.25rem]">
              <Link href={event.location[2]} target="_blank">
                {event.location[0]}
              </Link>
            </div>
          </div>
        </div>
        {event.is_class === true ? (
          <div className="flex justify-center pt-4">
            <MainButton
              href="#"
              content={
                language === 'en' ? 'View Class Schedule' : 'Ver programação'
              }
              bg="pink-400"
              font="white"
            />
          </div>
        ) : (
          <div className="flex justify-center pt-8">
            <MainButton
              href="#"
              content={
                language === 'en' ? 'See event details' : 'Detalhes do evento'
              }
              bg="pink-400"
              font="white"
            />
          </div>
        )}
      </div>
    </div>
  )
}
