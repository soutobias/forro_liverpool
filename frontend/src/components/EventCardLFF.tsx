import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import styles from './Bg.module.css'
import { LocationMarker } from '@/assets/location_marker'
import { useLanguage } from '@/lib/language'

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
      className={`m-2 h-[15rem] font-changa rounded-2xl border-black border-4 ${styles.begeBg}`}
    >
      <div className="pl-3 pt-5 pr-3">
        <div className="text-black text-[1.5rem] font-extrabold leading-8 ont-changa">
          {event.name[position]}
        </div>
        <div className="flex pt-6">
          <div>
            <div className="bg-pink-400 uppercase text-white align-middle items-center font-bold pl-4 pr-4 py-0 rounded-2xl text-[1rem] font-sans">
              {event.date[position]}
            </div>
          </div>
          <div className="flex ml-6 mt-2 text-black">
            <LocationMarker />
            <div className="text-black uppercase pl-0 mt-1 ml-1 font-extrabold pr-2 text-[1rem] font-changa leading-5">
              <Link href={event.location[2]} target="_blank">
                {event.location[0]}
              </Link>
            </div>
          </div>
        </div>
        {event.is_class === true ? (
          <div className="flex justify-center pt-4">
            <Link
              href="#"
              className="rounded-2xl no-underline bg-pink-400 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full text-white"
            >
              View Class Schedule
            </Link>
          </div>
        ) : (
          <div className="flex justify-center pt-8">
            <Link
              href="#"
              className="rounded-2xl no-underline bg-pink-400 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full text-white"
            >
              See event details
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
