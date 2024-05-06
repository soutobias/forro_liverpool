import { useState, useEffect } from 'react'
import { keyable } from './ClassEvent'
import { EventCardLFF } from './EventCardLFF'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'
import { H1 } from './H1'
import { useLanguage } from '@/lib/language'

// interface ClassEventsLFFProps {
//   setShowEvent?: Dispatch<SetStateAction<keyable>>
// }

export function ClassEventsLFF() {
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
        <div className="flex justify-center">
          {eventsEmpty ? (
            <div
              className={`h-[15rem] lg:h-[18rem] xl:h-[20rem] font-changa rounded-2xl border-black border-4 aspect-3/2 ${styles.begeBg}`}
            >
              <div className="w-full h-full flex justify-center align-middle items-center aspect-2/1">
                <div className="text-black text-[1.5rem] md:text-[2rem] text-center font-extrabold leading-8 md:leading-10 px-10">
                  {language === 'en'
                    ? 'Check back soon for the complete festival schedule!'
                    : 'Volte em breve para conferir a programação completa do festival'}
                </div>
              </div>
            </div>
          ) : (
            <div className="block md:flex md:justify-center md:gap-12">
              <div>
                <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-0 pb-8">
                  {language === 'en'
                    ? 'Friday, 10th May'
                    : 'Sexta-feira, 10 de Maio'}
                </h2>
                <div className="block justify-items-center">
                  {events
                    .filter((event: any) => event.date[0] === 'Friday')
                    .map((event: any) => (
                      <EventCardLFF key={event.id} event={event} />
                    ))}
                </div>
              </div>
              <div className="pl-2 pt-12 pb-8 md:pb-8 md:pl-0 md:pt-0">
                <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-0 pb-8">
                  {language === 'en'
                    ? 'Saturday, 11th May'
                    : 'Sábado, 11 de Maio'}
                </h2>
                <div className="block justify-items-center">
                  {events
                    .filter((event: any) => event.date[0] === 'Saturday')
                    .map((event: any) => (
                      <EventCardLFF key={event.id} event={event} />
                    ))}
                </div>
              </div>
              <div className="pl-2 pt-12 pb-8 md:pl-0 md:pt-0">
                <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-0 pb-8">
                  {language === 'en'
                    ? 'Sunday, 12th May'
                    : 'Domingo, 12 de Maio'}
                </h2>
                <div className="block justify-items-center">
                  {events
                    .filter((event: any) => event.date[0] === 'Sunday')
                    .map((event: any) => (
                      <EventCardLFF key={event.id} event={event} />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
