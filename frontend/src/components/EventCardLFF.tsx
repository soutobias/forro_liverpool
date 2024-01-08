import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import styles from './Bg.module.css'
import { LocationMarker } from '@/assets/location_marker'

export function EventCardLFF(props: {
  size?: string
  event: keyable
  setShowEvent: Dispatch<SetStateAction<keyable>>
}) {
  const { event } = props
  return (
    <div
      className={`m-2 h-[15rem] font-changa rounded-2xl border-black border-4 ${styles.begeBg}`}
    >
      {event.length === 0 ? (
        <div className="w-full h-full flex justify-center align-middle items-center">
          <div className="text-black text-[1.5rem] text-center font-extrabold leading-8 pl-16 pr-16">
            Check back soon for the complete festival schedule!
          </div>
        </div>
      ) : (
        <div className="pl-5 pt-5 pr-5">
          <div className="text-black text-[1.5rem] font-extrabold leading-8 ont-changa">
            {event.name}
          </div>
          <div className="flex pt-6">
            <div>
              <div className="bg-pink-400 uppercase text-white align-middle items-center font-bold pl-4 pr-4 py-0 rounded-2xl text-[1rem] font-sans">
                {event.date}
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
          <div className="flex justify-center pt-8">
            {event.is_class === true ? (
              <Link
                href="#"
                className="rounded-2xl no-underline bg-pink-400 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full text-white"
              >
                View Class Schedule
              </Link>
            ) : (
              <Link
                href="#"
                className="rounded-2xl no-underline bg-pink-400 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full text-white"
              >
                See event details
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

{
  /* onClick={() =>
  props.setShowEvent({
    title: props.title,
    period: props.period,
    location: props.location ? props.location : '',
  })
} */
}
