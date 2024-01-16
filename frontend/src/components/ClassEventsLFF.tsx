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
        className={`absolute -top-[10rem] md:-top-[11rem] lg:-top-[12rem] xl:-top-[14rem]  2xl:-top-[15rem] w-full min-h-[20rem] md:min-h-[25rem] lg:min-h-[30rem] xl:min-h-[35rem] 2xl:min-h-[40rem] ${styles.circlesBg2}`}
      />
      <div className="px-4 md:px-[8.25rem]">
        <div className="pt-[10rem] md:pt-[25rem] pb-12 text-center">
          <H1
            color="white"
            text={language === 'en' ? '3 Days of Dance!' : '3 Dias de Dança!'}
          />
        </div>
        <div className="">
          {eventsEmpty ? (
            <div
              className={`h-[15rem] font-changa rounded-2xl border-black border-4 ${styles.begeBg}`}
            >
              <div className="w-full h-full flex justify-center align-middle items-center">
                <div className="text-black text-[1.5rem] md:text-[2rem] text-center font-extrabold leading-8 md:leading-10 pl-16 pr-16">
                  Check back soon for the complete festival schedule!
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-16">
                {language === 'en' ? 'Friday, 10 May' : 'Sexta-feira, dia 10'}
              </h2>
              <div className="block h-max gap-3 md:grid md:grid-cols-[repeat(auto-fit,_40%)] md:justify-center xl:grid-cols-[repeat(auto-fit,_33.33%)] justify-items-center">
                {events.map((event: any) => (
                  <EventCardLFF
                    key={event.id}
                    event={event}
                    setShowEvent={setShowEvent}
                  />
                ))}
              </div>
              <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-16">
                {language === 'en' ? 'Saturday, 11 May' : 'Sábado, dia 11'}
              </h2>
              <div className="block gap-3 md:grid md:grid-cols-[repeat(auto-fit,_40%)] md:justify-center xl:grid-cols-[repeat(auto-fit,_33.33%)] justify-items-center">
                {events.map((event: any) => (
                  <EventCardLFF
                    key={event.id}
                    event={event}
                    setShowEvent={setShowEvent}
                  />
                ))}
              </div>
              <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-16">
                {language === 'en' ? 'Sunday, 12 May' : 'Domingo, dia 12'}
              </h2>
              <div className="block gap-3 md:grid md:grid-cols-[repeat(auto-fit,_40%)] md:justify-center xl:grid-cols-[repeat(auto-fit,_33.33%)] justify-items-center">
                {events.map((event: any) => (
                  <EventCardLFF
                    key={event.id}
                    event={event}
                    setShowEvent={setShowEvent}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
