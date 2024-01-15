import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { keyable } from './ClassEvent'
import { EventCardLFF } from './EventCardLFF'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'
import { H1 } from './H1'
import { useLanguage } from '@/lib/language'

interface ClassEventsLFFProps {
  setShowEvent: Dispatch<SetStateAction<keyable>>
}

export function ClassEventsLFF(props: ClassEventsLFFProps) {
  const { setShowEvent } = props
  const [events, setEvents] = useState<keyable[]>([])
  const { language } = useLanguage()
  const [eventsEmpty, setEventsEmpty] = useState<boolean>(true)

  const url = 'api/v1/events?is_festival=true'

  useEffect(() => {
    fetchApi(url, setEvents)
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      setEventsEmpty(false)
    }
  }, [events])

  return (
    <div
      id="program"
      className={`relative pb-[13rem] md:pb-[25rem] font-changa ${styles.pinkBg}`}
    >
      <div
        className={`absolute -top-[10rem] md:-top-[17rem] w-full h-[20rem] md:h-[40rem] ${styles.circlesBg2}`}
      />
      <div className=" px-2 md:px-[8.25rem]">
        <div className="pt-[10rem] md:pt-[25rem] pb-12 text-center">
          <H1
            color="white"
            text={language === 'en' ? '3 days of dance!' : '3 dias de dança!'}
          />
        </div>
        <div className="md:grid md:grid-cols-3 md:px-[8.5rem]">
          {eventsEmpty ? (
            <div
              className={`m-2 h-[15rem] font-changa rounded-2xl border-black border-4 ${styles.begeBg}`}
            >
              <div className="w-full h-full flex justify-center align-middle items-center">
                <div className="text-black text-[1.5rem] text-center font-extrabold leading-8 pl-16 pr-16">
                  Check back soon for the complete festival schedule!
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-center font-changa text-white text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
                {language === 'en' ? 'Friday 10th' : 'Sexta-feira, dia 10'}
              </h2>

              {events.map((event: any) => (
                <EventCardLFF
                  key={event.id}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ))}
              <h2 className="text-center font-changa text-white text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
                {language === 'en' ? 'Saturday 11th' : 'Sábado, dia 11'}
              </h2>
              {events.map((event: any) => (
                <EventCardLFF
                  key={event.id}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ))}
              <h2 className="text-center font-changa text-white text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
                {language === 'en' ? 'Sunday 12th' : 'Domingo, dia 12'}
              </h2>
              {events.map((event: any) => (
                <EventCardLFF
                  key={event.id}
                  event={event}
                  setShowEvent={setShowEvent}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
