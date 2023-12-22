import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'
import { keyable } from './ClassEvent'

interface EventCardProps {
  event: keyable
  setShowEvent: Dispatch<SetStateAction<keyable>>
}

export function EventCard(props: EventCardProps) {
  const { event, setShowEvent } = props

  return (
    <div
      className={`p-2 m-2 ${
        event.name === 'Liverpool Forró Festival 2024' ? 'h-[22.5rem]' : 'h-52'
      } bg-cover rounded-xl`}
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
      onClick={() =>
        setShowEvent({
          title: event.name,
          period: event.start_datetime ? event.start_datetime : '',
          location: event.location ? event.location : '',
        })
      }
    >
      <div className="text-white text-[1.5rem] font-semibold leading-6 pt-3 pl-4 font-sans">
        {event.name}
      </div>
      <div className="bg-gray-60 uppercase text-black ml-4 mt-1 w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans">
        {event.start_datetime}
      </div>
      {event.location && (
        <div className="flex ml-4 mt-2 text-white">
          <FontAwesomeIcon icon={faLocationDot} className="h-4 pr-0 pt-1" />
          <div className="text-white uppercase leading-4 pl-0 mt-1 ml-1 font-bold pr-2 text-[1rem] font-sans">
            {event.location}
          </div>
        </div>
      )}
    </div>
  )
}
