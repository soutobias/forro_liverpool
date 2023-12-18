import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tickets } from './Tickets'

export function HeroLFF() {
  return (
    <div className="w-full h-[calc(100vh-7.5rem)] pl-3 pr-3">
      <p className="text-center pt-32 pb-8 pl-3 pr-3 text-[1rem] leading-9 font-sans font-normal">
        1st ever
      </p>
      <h1 className="text-center pt-8 pb-8 pl-20 pr-20 text-[2rem] leading-9 font-sans font-semibold">
        Liverpool Forró Festival
      </h1>
      <p className="text-center pt-8 pb-0 pl-3 pr-3 text-[1rem] leading-5 font-sans font-normal">
        10-12 May, 2024
      </p>
      <p className="text-center pt-0 pb-10 pl-3 pr-3 text-[1rem] leading-5 font-sans font-normal">
        Liverpool, England
      </p>
      <Tickets />
      <div className="flex justify-center leading-5">
        <div className="pt-16">
          <div className="p-0 mt-0 animate-fadeInOut-100">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
          </div>
          <div className="p-0 -mt-2 animate-fadeInOut-200">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
          </div>
          <div className="p-0 -mt-2 animate-fadeInOut-300">
            <FontAwesomeIcon icon={faChevronDown} className="text-2xl p-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
