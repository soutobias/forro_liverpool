import { Dispatch, SetStateAction } from 'react'
import { EventCard } from './EventCard'
import { keyable } from './ClassEvent'

export function ClassEvents(props: {
  setShowEvent: Dispatch<SetStateAction<keyable>>
}) {
  // const [events, setEvents] = useState([])

  // useEffect(() => {
  //   get('/api/v1/events').then((data) => {
  //     setEvents(data)
  //   }
  // }, [])

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
          <EventCard
            title={'Liverpool Forro Festival 2024'}
            period={'10-12 may'}
            size={'large'}
            setShowEvent={props.setShowEvent}
          />
          <EventCard
            title={'Forró workshop with guest teacher Lucas Dumont'}
            period={'8 nov'}
            location={'Revolución de Cuba'}
            setShowEvent={props.setShowEvent}
          />
          <EventCard
            title={'Forró workshop with guest teacher Luiz Henrique'}
            period={'16 dec'}
            location={'The Caledonia'}
            setShowEvent={props.setShowEvent}
          />
        </div>
      </div>
      <div>
        <h2 className="font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-5">
          Regular Events
        </h2>
        <div>
          <EventCard
            title={'All-levels forro classes'}
            period={'Mondays'}
            location={'The Caledonia'}
            setShowEvent={props.setShowEvent}
          />
          <EventCard
            title={'Forró & Chips live forró music'}
            period={'16 nov'}
            location={'The Caledonia'}
            setShowEvent={props.setShowEvent}
          />
        </div>
      </div>
    </div>
  )
}
