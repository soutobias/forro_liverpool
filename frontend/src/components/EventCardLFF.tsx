import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import styles from './Bg.module.css'

export function EventCardLFF(props: {
  title: string
  period: string
  location?: string
  size?: string
  eventType?: string
  setShowEvent: Dispatch<SetStateAction<keyable>>
}) {
  return (
    <div
      className={`m-2 h-[15rem] font-changa rounded-2xl border-black border-4 ${styles.begeBg}`}
    >
      {props.eventType === 'future' ? (
        <div className="w-full h-full flex justify-center align-middle items-center">
          <div className="text-black text-[1.5rem] text-center font-extrabold leading-8 pl-16 pr-16">
            {props.title}
          </div>
        </div>
      ) : (
        <>
          <div className="text-black text-[1.25rem] font-semibold leading-6 pt-8 pl-6">
            {props.title}
          </div>
          <div className="flex pl-6 pt-6">
            <div className="bg-gray-60 uppercase text-black font-bold pl-4 pr-4 rounded-2xl text-[1rem]">
              {props.period}
            </div>
            <div className="flex ml-4 mt-2 text-black">
              <FontAwesomeIcon icon={faLocationDot} className="h-4 pr-0 pt-1" />
              <div className="text-black uppercase leading-4 pl-0 mt-1 ml-1 font-bold pr-2 text-[1rem]">
                {props.location}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {props.eventType === 'class' ? (
              <Link
                href="#"
                className="no-underline bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 ml-2 mr-2"
              >
                View Class Schedule
              </Link>
            ) : (
              <Link
                href="#"
                className="no-underline bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 ml-2 mr-2"
              >
                See event details
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  )
}

// onClick={() =>
//   props.setShowEvent({
//     title: props.title,
//     period: props.period,
//     location: props.location ? props.location : '',
//   })
// }
