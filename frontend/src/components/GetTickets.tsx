import { H1 } from './H1'
import { MainButton } from './MainButton'
import styles from './Bg.module.css'
import Image from 'next/image'
import triangle from '../assets/triangle.png'
import zabumba from '../assets/zabumba.png'
import sanfona from '../assets/sanfona.png'

export function GetTickets() {
  return (
    <div id="get_tickets" className="relative font-changa">
      <div className={`relative ${styles.purpleBg}`}>
        <div
          className={`absolute -top-[10rem] md:-top-[19rem] w-full h-[20rem] md:h-[30rem] ${styles.rainbowBg}`}
        />
        <div className="pt-[12rem] md:pt-[20rem] pb-10 relative z-[61] text-center">
          <H1 color="white" text={'Are you ready to party?'} />
          <H1 color="white" text={'Let’s forrozear!'} />
        </div>
        <div className="pl-4 pr-4 pt-8 z-[61] md:hidden">
          <MainButton href="#" content="GET TICKETS" bg="white" font="black" />
        </div>
        <div className="pl-4 pr-4 pt-8 z-[61] md:flex md:justify-center hidden">
          <MainButton
            href="#"
            content="GET TICKETS"
            bg="white"
            font="black"
            width="50%"
          />
        </div>
        <Image
          src={triangle}
          alt="illustration"
          className="absolute top-[20%] left-[25%] z-[60] w-[8rem]"
          width={100}
          height={100}
          style={{ maxWidth: '10rem' }}
        />
      </div>
      <div className={`relative h-[45rem] ${styles.gradientBg}`}>
        <Image
          src={zabumba}
          alt="illustration"
          className="absolute top-[10%] left-[50%] z-[60] w-[9rem]"
          width={100}
          height={100}
          style={{ maxWidth: '10rem' }}
        />
        <Image
          src={sanfona}
          alt="illustration"
          className="absolute top-[40%] left-[10%] z-[60] w-[11rem]"
          width={100}
          height={100}
          style={{ maxWidth: '10rem' }}
        />
      </div>
    </div>
  )
}
