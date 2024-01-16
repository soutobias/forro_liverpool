import styles from './Bg.module.css'
// import { LFFLogo } from '@/assets/lff_logo'
import Image from 'next/image'
import LFFLogo from '../assets/LFF_Logo.png'
import CrossWalk from '../assets/Images-LFF-Crosswalk.png'
import CrossWalk1 from '../assets/images-lff-crosswalk-1.png'
import { MainButton } from './MainButton'
import { Scroll } from '@/assets/scroll'
import { useLanguage } from '@/lib/language'
import { CursorFollower } from './CursorFollower'
import { CursorTrail } from './CursorTrail'
import { useState } from 'react'

export function HeroLFF(props: { siteFestival: any }) {
  const { language } = useLanguage()
  const keyForRerender = language
  const [isCursorInDiv, setIsCursorInDiv] = useState(false)

  return (
    <div
      className={`w-full z-[59] font-changa relative ${styles.blackBg}`}
      onMouseEnter={() => setIsCursorInDiv(true)}
      onMouseLeave={() => setIsCursorInDiv(false)}
    >
      {/* <CursorFollower isVisible={isCursorInDiv} /> */}
      <CursorTrail isVisible={isCursorInDiv} />
      <div className="pt-[6.75rem]">
        <div>
          <div className="flex justify-center pl-4 pr-4">
            <div className="hidden sm:flex sm:justify-around sm:items-center uppercase w-full 2xl:w-[80%]">
              {props.siteFestival && (
                <div className="block">
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].data.split(',')[0].trim()}
                  </p>
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].data.split(',')[1].trim()}
                  </p>
                </div>
              )}
              <Image
                src={LFFLogo}
                alt="illustration"
                className="w-auto md:h-[30rem] xl:h-[35rem] 2xl:h-[38rem]"
                width={1336}
                height={614}
              />
              {props.siteFestival && (
                <div className="block">
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].local.split(',')[0].trim()}
                  </p>
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].local.split(',')[1].trim()}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center pl-4 pr-4">
            <Image
              src={LFFLogo}
              alt="illustration"
              className="h-[17rem] w-auto md:h-[25rem] xl:h-[30rem] md:hidden"
              width={1336}
              height={614}
            />
          </div>
          <div className="pt-1 flex justify-center">
            <Image
              src={CrossWalk}
              alt="illustration"
              className="overflow-hidden h-[5.25rem] w-full object-cover md:hidden"
              width={1336}
              height={614}
            />
          </div>
          <div className="pt-1 flex justify-center w-full overflow-hidden">
            <Image
              src={CrossWalk1}
              alt="illustration"
              className="xl:h-[9rem] md:h-[7rem] w-[130vw] max-w-[130vw] md:block hidden"
              width={1336}
              height={614}
            />
          </div>
          <div className="-mt-[5rem] md:flex md:justify-center hidden">
            <Scroll />
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-4">
            <p className="text-center text-white pt-8 pb-0 pl-4 pr-4 text-[1.5rem] leading-5  font-extrabold">
              {props.siteFestival && props.siteFestival[0].data}
            </p>
            <p className="text-center text-white uppercase font-changa pt-2 pb-8 pl-3 pr-3 text-[1rem] leading-5 font-extrabold">
              {props.siteFestival && props.siteFestival[0].local}
            </p>
            <div className="md:flex md:justify-center hidden">
              <MainButton
                key={keyForRerender}
                href="/lff2024/tickets"
                content={language === 'en' ? 'Get Tickets' : 'Ingressos'}
                bg="white"
                font="black"
                width="457px"
              />
            </div>
            <div className="md:hidden">
              <MainButton
                key={keyForRerender}
                href="/lff2024/tickets"
                content={language === 'en' ? 'Get Tickets' : 'Ingressos'}
                bg="white"
                font="black"
              />
            </div>
            <div className="pt-8 flex justify-center">
              <Scroll />
            </div>
          </div>
        </div>
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
