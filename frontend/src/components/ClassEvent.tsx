import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'

export interface keyable {
  [key: string]: any
}

export function ClassEvent(props: {
  showEvent: keyable
  setShowEvent: Dispatch<SetStateAction<keyable>>
}) {
  return (
    <div className=" h-full w-full z-20 bottom-0 fixed pointer-events-auto">
      <div
        className="h-[20%] bg-gray-100 opacity-90"
        onClick={() => props.setShowEvent({})}
      ></div>
      <div className="bg-white h-[80%] z-20 rounded-t-2xl">
        <div className="bg-gray-100 opacity-90">
          <Image
            src={props.showEvent.image[0]}
            alt="illustration"
            className="rounded-t-2xl overflow-hidden"
            width={1336}
            height={400}
          />
        </div>
        <div className="pt-7 pl-3 pr-3 pb-8">
          {/* <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl p-2"
            onClick={() => props.setShowGDPR(addCookieAuth())}
          />
        </div> */}
          <div className="pt-0 pr-2">
            <p className="text-black text-[2rem] leading-9 font-sans font-semibold pb-8">
              {props.showEvent.title}
            </p>
            <div className="flex gap-16 justify-between w-full pb-6">
              <div className="pl-2">
                <div className="bg-gray-60 uppercase text-black mb-4 w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans">
                  {props.showEvent.period}
                </div>
                <div className="bg-gray-60 uppercase text-black w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans">
                  &pound; 7
                </div>
              </div>
              <div>
                {props.showEvent.location && (
                  <div>
                    <div className="flex text-black">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="h-4 pr-0 pt-1"
                      />
                      <div className="text-black uppercase leading-4 pl-0 mt-1 ml-1 font-bold text-[1rem] font-sans">
                        {props.showEvent.location[0]}
                        <Link
                          href={props.showEvent.location[2]}
                          target="_blank"
                        >
                          {props.showEvent.location[0]}
                        </Link>
                      </div>
                      <ArrowUpRight size={20} />
                    </div>
                    <div className="ml-4 mt-2 text-black">
                      <div className="text-black leading-4 pl-0 mt-1 font-normal text-[1rem] font-sans">
                        {props.showEvent.location[1]}
                      </div>
                      <div className="text-black leading-4 pl-0 mt-1 pt-3 font-normal text-[1rem] font-sans">
                        {props.showEvent.time}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <p className="pt-0 pb-7 text-black text-[1rem] leading-5 font-sans font-normal">
              Short event description here. Maybe about where Lucas is from,
              where he has trained, what he will be teaching. Also, all levels,
              special instructions.
            </p>
          </div>
          <Link
            href="/registration"
            className="no-underline mr-2 flex bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 justify-center"
          >
            <div>Get Tickets</div>
            <ArrowUpRight size={20} />
          </Link>
          {/* <div
          className="no-underline bg-white text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4"
          onClick={() => props.setShowGDPR(addCookieAuth())}
        >
          Reject
        </div> */}
        </div>
      </div>
    </div>
  )
}
