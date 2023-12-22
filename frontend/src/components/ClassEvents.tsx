import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { EventCard } from './EventCard'
import { keyable } from './ClassEvent'
import { fetchApi } from '@/lib/api'

interface ClassEventsProps {
  setShowEvent: Dispatch<SetStateAction<keyable>>
}

export function ClassEvents(props: ClassEventsProps) {
  const { setShowEvent } = props
  const [events, setEvents] = useState<keyable[]>([])

  const url = 'api/v1/events'

  useEffect(() => {
    fetchApi(url, setEvents)
  }, [])

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
            .filter((event: any) => event.type_event === 'Special Events')
            .map((event: any) => (
              <EventCard
                key={event.id}
                event={event}
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
            .filter((event: any) => event.type_event === 'Regular Events')
            .map((event: any) => (
              <EventCard
                key={event.id}
                event={event}
                setShowEvent={setShowEvent}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
