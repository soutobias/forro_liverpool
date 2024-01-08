import { Dispatch, SetStateAction } from 'react'
import { keyable } from './ClassEvent'
import Link from 'next/link'
import { LocationMarker } from '@/assets/location_marker'

interface EventCardProps {
  event: keyable
  setShowEvent: Dispatch<SetStateAction<keyable>>
}

export function EventCard(props: EventCardProps) {
  const { event, setShowEvent } = props

  const generateEventUrl = () => {
    if (event.name === 'Liverpool Forró Festival 2024') {
      return '/lff2024'
    } else {
      return `/events/${event.id}`
    }
  }

  return (
    <Link href={generateEventUrl()} passHref>
      <div
        className={`${
          event.name === 'Liverpool Forró Festival 2024'
            ? 'h-[21.5rem]'
            : 'h-[12rem]'
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
        <div className="text-black text-[1.25rem] font-extrabold leading-6 pt-4 pl-4 pr-[9rem]">
          {event.name}
        </div>
        <div className="bg-white uppercase text-black ml-4 mt-4 w-max pl-4 pr-4 rounded-2xl text-[1rem] font-extrabold pt-0 pb-0 leading-5 tracking-[0.05rem]">
          {event.date}
        </div>
        {event.location && (
          <div className="flex ml-4 pt-4 text-black">
            <LocationMarker />
            <div className="uppercase leading-5 pl-2 font-extrabold text-[1rem]">
              <Link href={event.location[2]}>{event.location[0]}</Link>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
