import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { EventCard } from './EventCard'
import { keyable } from './ClassEvent'
import { Line1 } from '@/assets/line1'
import { Line2 } from '@/assets/line2'
import { fetchApi } from '@/lib/api'
import { H1 } from './H1'
import { useLanguage } from '@/lib/language'

interface ClassEventsProps {
  setShowEvent: Dispatch<SetStateAction<keyable>>
}

export function ClassEvents(props: ClassEventsProps) {
  const { setShowEvent } = props
  const [events, setEvents] = useState<keyable[]>([])

  const url = 'api/v1/events?is_festival=false'
  const { language } = useLanguage()

  useEffect(() => {
    fetchApi(url, setEvents)
  }, [url])

  return (
    <div id="classes-events" className="font-changa px-4 md:px-[8.5rem] pb-20">
      <div className="pt-20 text-left md:text-center">
        <H1
          color="black"
          text={language === 'en' ? 'Classes & Events' : 'Classes e Eventos'}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-40">
        <div>
          <div className="pt-5 pb-8 flex justify-between items-center">
            <h2 className="text-[1.5rem] leading-8 font-extrabold">
              {language === 'en' ? 'Special Events' : 'Eventos Especiais'}
            </h2>
            <Line1 />
          </div>
          <div>
            {events
              .filter(
                (event: any) =>
                  event.name[0] === 'Liverpool Forró Festival 2024',
              )
              .map((event: any, index: number) => (
                <EventCard
                  key={index}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ))}
            {events
              .filter(
                (event: any) =>
                  event.type_event === 'Special Events' &&
                  event.name[0] !== 'Liverpool Forró Festival 2024',
              )
              .map((event: any, index: number) => (
                <EventCard
                  key={index}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ))}
          </div>
        </div>
        <div>
          <div className="pt-5 pb-8 flex justify-between items-center">
            <h2 className="text-[1.5rem] leading-8 font-extrabold">
              {language === 'en' ? 'Regular Events' : 'Eventos Regulares'}
            </h2>
            <Line2 />
          </div>
          <div>
            {events
              .filter((event: any) => event.type_event === 'Regular Events')
              .map((event: any, index: number) => (
                <EventCard
                  key={index}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
