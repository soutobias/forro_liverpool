import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import { LocationMarker } from '@/assets/location_marker'
import Image from 'next/image'
import flag from '../assets/flag.png'
import { useLanguage } from '@/lib/language'

interface EventCardProps {
  event: keyable
  setShowEvent: Dispatch<SetStateAction<keyable>>
}

export function EventCard(props: EventCardProps) {
  const { event, setShowEvent } = props

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
    if (event.name[0] === 'Liverpool Forró Festival 2024') {
      return '/lff2024'
    } else {
      return `/events?id=${event.id}`
    }
  }
  return (
    <Link href={generateEventUrl()} passHref>
      <div
        className={`relative ${
          event.name[0] === 'Liverpool Forró Festival 2024'
            ? 'h-[22.5rem] md:h-[22.5rem] text-white'
            : 'h-[11rem] md:h-[22.5rem] text-black'
        } bg-cover rounded-xl font-changa w-full mb-4`}
        style={{
          backgroundImage: `url(${event.image[0]})`,
        }}
        // onClick={() =>
        //   setShowEvent({
        //     title: event.name,
        //     period: event.date ? event.date : '',
        //     location: event.location ? event.location : '',
        //   })
        // }
      >
        {event.name[0] === 'Liverpool Forró Festival 2024' && (
          <div className="absolute right-5 top-0">
            <Image
              src={flag}
              alt="illustration"
              className=""
              width={24}
              height={37}
            />
          </div>
        )}

        <div className="text-[1.25rem] font-extrabold leading-6 pt-4 pl-4 pr-[9rem]">
          {event.name[position]}
        </div>
        <div className="bg-white uppercase text-black ml-4 mt-4 w-max pl-4 pr-4 rounded-2xl text-[1rem] font-extrabold pt-0 pb-0 leading-5 tracking-[0.05rem]">
          {event.date[position]}
        </div>
        {event.location &&
          event.name[0] !== 'Liverpool Forró Festival 2024' && (
            <div className="flex ml-4 pt-4">
              <LocationMarker />
              <div className="uppercase leading-5 pl-2 font-extrabold text-[1rem]">
                {event.location[0]}
                {/* <Link href={event.location[2]}>{event.location[0]}</Link> */}
              </div>
            </div>
          )}
      </div>
    </Link>
  )
}
