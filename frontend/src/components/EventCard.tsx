import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dispatch, SetStateAction } from 'react'
import { keyable } from './ClassEvent'
import { LocationMarker } from '@/assets/location_marker'

export function EventCard(props: {
  title: string
  period: string
  location?: string
  size?: string
  setShowEvent: Dispatch<SetStateAction<keyable>>
}) {
  return (
    <div
      className={`${
        props.size === 'large' ? 'h-[21.5rem]' : 'h-[12rem]'
      } bg-cover rounded-xl font-changa w-full mb-4`}
      style={{
        backgroundImage:
          'url(https://plus.unsplash.com/premium_photo-1668671069358-31e503a9a4d8?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
      onClick={() =>
        props.setShowEvent({
          title: props.title,
          period: props.period,
          location: props.location ? props.location : '',
        })
      }
    >
      <div className="text-black text-[1.25rem] font-extrabold leading-6 pt-4 pl-4 pr-[9rem]">
        {props.title}
      </div>
      <div className="bg-white uppercase text-black ml-4 mt-4 w-max pl-4 pr-4 rounded-2xl text-[1rem] font-extrabold pt-0 pb-0 leading-5 tracking-[0.05rem]">
        {props.period}
      </div>
      {props.location && (
        <div className="flex ml-4 pt-4 text-black">
          <LocationMarker />
          <div className="uppercase leading-5 pl-2 font-extrabold text-[1rem]">
            {props.location}
          </div>
        </div>
      )}
    </div>
  )
}
