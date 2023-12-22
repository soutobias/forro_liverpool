import { Dispatch, SetStateAction } from 'react'
import { EventCard } from './EventCard'
import { keyable } from './ClassEvent'
import { Line1 } from '@/assets/line1'
import { Line2 } from '@/assets/line2'

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
    <div id="classes-events" className="font-changa pl-4 pr-4 pb-20">
      <h1 className="pt-20 text-[2rem] leading-10 font-extrabold">
        Classes & Events
      </h1>
      <div>
        <div className="pt-5 pb-8 flex justify-between items-center">
          <h2 className="text-[1.5rem] leading-8 font-extrabold">
            Special Events
          </h2>
          <Line1 />
        </div>
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
        <div className="pt-5 pb-8 flex justify-between items-center">
          <h2 className="text-[1.5rem] leading-8 font-extrabold">
            Regular Events
          </h2>
          <Line2 />
        </div>
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
