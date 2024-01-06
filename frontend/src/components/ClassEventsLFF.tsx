import { Dispatch, SetStateAction } from 'react'
import { keyable } from './ClassEvent'
import { EventCardLFF } from './EventCardLFF'
import styles from './Bg.module.css'
import { H1 } from './H1'

export function ClassEventsLFF(props: {
  setShowEvent: Dispatch<SetStateAction<keyable>>
}) {
  return (
    <div
      id="program"
      className={`relative pb-[13rem] font-changa ${styles.pinkBg}`}
    >
      <div
        className={`absolute -top-[10rem] w-full h-[20rem] ${styles.circlesBg2}`}
      />
      <div className="pt-[10rem] pb-12 text-center">
        <H1 color="white" text="3 days of dance!" />
      </div>
      <div>
        <EventCardLFF
          title={'Check back soon for the complete festival schedule!'}
          period={''}
          location={''}
          eventType={'future'}
          setShowEvent={props.setShowEvent}
        />
        <EventCardLFF
          title={'Bem Vindos Party'}
          period={'8PM-3AM'}
          location={'Revolucion de Cuba'}
          eventType={'party'}
          setShowEvent={props.setShowEvent}
        />
        {/* <h2 className="text-center font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
          Friday 10th
        </h2>
        <div>
          <EventCardLFF
            title={'Check-in, Welcome Drinks, & Fundamentals Workshop'}
            period={'5-8pm'}
            location={'The Caledonia'}
            eventType={'event'}
            setShowEvent={props.setShowEvent}
          />
          <EventCardLFF
            title={'Bem Vindos Party'}
            period={'8PM-3AM'}
            location={'Revolucion de Cuba'}
            eventType={'party'}
            setShowEvent={props.setShowEvent}
          />
        </div>
        <h2 className="text-center font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
          Saturday 11th
        </h2>
        <div>
          <EventCardLFF
            title={'Check-in'}
            period={'12-1pm'}
            location={'Arts Bar'}
            eventType={'event'}
            setShowEvent={props.setShowEvent}
          />
          <EventCardLFF
            title={'Saturday Classes'}
            period={'1-4:30pm'}
            location={'Arts Bar'}
            eventType={'class'}
            setShowEvent={props.setShowEvent}
          />
          <EventCardLFF
            title={'Forrozeiros <3 The Beatles: Magical Mystery Tou'}
            period={'5:30-7pm'}
            location={'The docks'}
            eventType={'event'}
            setShowEvent={props.setShowEvent}
          />
          <EventCardLFF
            title={'Forro do Bole Bole Party'}
            period={'8PM-3AM'}
            location={'selina'}
            eventType={'paty'}
            setShowEvent={props.setShowEvent}
          />
        </div>
        <h2 className="text-center font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
          Sunday 12th
        </h2>
        <div>
          <EventCardLFF
            title={'Sunday Classes'}
            period={'1-4:30pm'}
            location={'Arts Bar'}
            eventType={'class'}
            setShowEvent={props.setShowEvent}
          />
          <EventCardLFF
            title={'Lado de La Party'}
            period={'8pm-3am'}
            location={'Metrocola'}
            eventType={'party'}
            setShowEvent={props.setShowEvent}
          />
        </div> */}
      </div>
    </div>
  )
}
