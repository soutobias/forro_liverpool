import styles from './Bg.module.css'
// import { LFFLogo } from '@/assets/lff_logo'
import Image from 'next/image'
import LFFLogo from '../assets/LFF_Logo.png'
import CrossWalk from '../assets/Images-LFF-Crosswalk.png'
import { MainButton } from './MainButton'

export function HeroLFF(props: { siteFestival: any }) {
  return (
    <div className={`w-full z-[59] font-changa relative ${styles.blackBg}`}>
      <div className="pt-[6.75rem] flex justify-center pl-4 pr-4">
        <Image
          src={LFFLogo}
          alt="illustration"
          className="h-[292px]"
          width={1336}
          height={614}
        />
      </div>
      <div className="pt-1">
        <Image
          src={CrossWalk}
          alt="illustration"
          className="overflow-hidden h-[85px] object-cover"
          width={1336}
          height={614}
        />
      </div>
      <div className="pr-4 pl-4">
        <p className="text-center text-white pt-8 pb-0 pl-4 pr-4 text-[1.5rem] leading-5  font-extrabold">
          {props.siteFestival && props.siteFestival[0].data}
        </p>
        <p className="text-center text-white uppercase font-changa pt-2 pb-8 pl-3 pr-3 text-[1rem] leading-5 font-extrabold">
          {props.siteFestival && props.siteFestival[0].local}
        </p>
        <MainButton href="#" content="TICKETS" bg="white" font="black" />
        {/* <div className="flex justify-center leading-5">
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
        </div> */}
      </div>
    </div>
  )
}
