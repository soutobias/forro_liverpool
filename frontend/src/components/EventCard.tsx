import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import { LocationMarker } from '@/assets/location_marker'
import Image from 'next/image'
import flag from '../assets/flag.png'
import { useLanguage } from '@/lib/language'

interface EventCardProps {
  event: keyable
  setShowEvent?: Dispatch<SetStateAction<keyable>>
  aspectRatio?: string
}

export function EventCard(props: EventCardProps) {
  const { event, aspectRatio } = props

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
            ? `aspect-square md:${aspectRatio || 'aspect-square'} text-white`
            : 'aspect-300/168 md:aspect-300/168 text-black'
        } bg-cover rounded-xl font-changa w-full mb-4 shadow-custom`}
        style={{
          backgroundImage: `url(${event.image[0]})`,
          backgroundPosition: 'bottom', // Centers the background image
          backgroundSize: 'cover', // Ensures the image covers the entire element
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
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
              className="w-8 md:w-8 lg:w-10 xl:w-12"
              width={24}
              height={1}
            />
          </div>
        )}

        <div className="text-[1.25rem] md:text-[1.5rem] leading-[1.625rem] font-extrabold md:leading-8 pt-4 pl-4 pr-[9rem] md:pr-[8rem]">
          {event.name[position]}
        </div>
        <div className="bg-white uppercase text-black ml-4 mt-4 w-max pl-4 pr-4 rounded-2xl text-[1rem] md:text-[1.25rem] font-extrabold pt-0 pb-0 leading-4 md:leading-5 tracking-[0.05rem]">
          {event.date[position]}
        </div>
        {event.location &&
          event.name[0] !== 'Liverpool Forró Festival 2024' && (
            <div className="flex ml-4 pt-4">
              <LocationMarker />
              <div className="uppercase leading-4 md:leading-5 pl-2 font-extrabold text-[1rem] md:text-[1.25rem]">
                {event.location[0]}
                {/* <Link href={event.location[2]}>{event.location[0]}</Link> */}
              </div>
            </div>
          )}
      </div>
    </Link>
  )
}
