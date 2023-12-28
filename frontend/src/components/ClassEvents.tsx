import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { EventCard } from './EventCard'
import { keyable } from './ClassEvent'
import { Line1 } from '@/assets/line1'
import { Line2 } from '@/assets/line2'
import { fetchApi } from '@/lib/api'
import { H1 } from './H1'

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
    <div id="classes-events" className="font-changa pl-4 pr-4 pb-20">
      <div className="pt-20">
        <H1 color="black" text="Classes & Events" />
      </div>
      <div>
        <div className="pt-5 pb-8 flex justify-between items-center">
          <h2 className="text-[1.5rem] leading-8 font-extrabold">
            Special Events
          </h2>
          <Line1 />
        </div>
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
        <div className="pt-5 pb-8 flex justify-between items-center">
          <h2 className="text-[1.5rem] leading-8 font-extrabold">
            Regular Events
          </h2>
          <Line2 />
        </div>
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
