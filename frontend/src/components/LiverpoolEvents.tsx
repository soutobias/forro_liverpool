import { MMTBus } from './MMTBus'
import { Tickets } from './Tickets'

export function LiverpoolEvents() {
  return (
    <div id="liverpool_events" className="pb-20">
      <div>
        <h2 className="text-center font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
          Hop on the Magical Mystery Tour Bus!
        </h2>
        <p className="text-center pt-4 pb-4 pl-2 pr-2 text-[1rem] leading-5 font-sans font-normal">
          Join us for a special forró edition of the classic Liverpool Magical
          Mystery Beatles tour! See famous Beatles sites with your new forró
          friends while enjoying forró Beatles covers.
        </p>
        <p className="text-center pt-4 pb-4 pl-2 pr-2 text-[1rem] leading-5 font-sans font-normal">
          Spots are limited, so reserve yours today!
        </p>
        <MMTBus />
        <Tickets />
      </div>
    </div>
  )
}
