import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function MMTBusPart(props: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="m-2 flex">
      <div className="pr-2 text-black text-[1.25rem] font-semibold leading-6 pt-8 pl-6 font-sans">
        {props.number}
      </div>
      <div className="pl-6 pt-6 border-l-2 border-l-black">
        <div className="text-black font-bold pl-4 pr-4 rounded-2xl text-[1rem] font-sans">
          {props.title}
        </div>
        <div className="text-black leading-4 pl-0 mt-1 ml-1 font-bold pr-2 text-[1rem] font-sans">
          {props.description}{' '}
        </div>
      </div>
    </div>
  )
}

export function MMTBus() {
  return (
    <div>
      <MMTBusPart
        number="01"
        title="Penny Lane Sign"
        description="See the original Penny Lane sign, signed by Paul McCartney himself!"
      />
      <MMTBusPart
        number="02"
        title="John Lennon's House"
        description="Tour where the famous musician grew up!"
      />
      <MMTBusPart
        number="03"
        title="The Cavern Club"
        description="Wrap up with a stop at the famous
        underground bar where the Beatles
        got their start, featuring a live
        cover band and awesome music
        memoribilia."
      />
    </div>
  )
}
