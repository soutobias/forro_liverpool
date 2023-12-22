import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { EventCard } from './EventCard'
import { keyable } from './ClassEvent'
import { fetchApi } from '@/lib/api'

interface ClassEventsProps {
  setShowEvent: Dispatch<SetStateAction<keyable>>
  name: string
  id: number
  start_datetime: string
  end_datetime: string
  type_event: string
  location: string
}

export function ClassEvents(props: ClassEventsProps) {
  const { setShowEvent } = props

  const [events, setEvents] = useState<ClassEventsProps[]>([])
  const url = 'api/v1/events'
  console.log(events, 'eventCard')

  useEffect(() => {
    fetchApi(url, setEvents)
  }, [])

  console.log(events, 'eventCard222222222')

  return (
    <div id="classes-events" className="pb-20">
      <h1 className="pt-16 pl-2 text-[2rem] leading-9 font-sans font-semibold">
        Classes & Events
      </h1>
      <div>
        <h2 className="font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-5">
          Special Events
        </h2>
        <div>
          {events
            .filter((event) => event.type_event === 'Special Events')
            .map((event) => (
              <EventCard
                key={event.id}
                title={event.name}
                period={`${event.start_datetime} - ${event.end_datetime}`}
                location={event.location}
                setShowEvent={setShowEvent}
              />
            ))}
        </div>
      </div>
      <div>
        <h2 className="font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-5">
          Regular Events
        </h2>
        <div>
          {events
            .filter((event) => event.type_event === 'Regular Events')
            .map((event) => (
              <EventCard
                key={event.id}
                title={event.name}
                period={`${event.start_datetime} - ${event.end_datetime}`}
                location={event.location}
                setShowEvent={setShowEvent}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
