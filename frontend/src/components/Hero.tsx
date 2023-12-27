import Image from 'next/image'
import { MainButton } from './MainButton'
import styles from './Bg.module.css'

export function Hero() {
  return (
    <div className={`w-full z-[59] relative ${styles.heroBg}`}>
      <div className="pl-4 pr-4">
        <h1 className="pt-[6.75rem]  text-[2rem] leading-10 font-extrabold font-changa">
          Brazilian forró classes & events in the heart of Liverpool
        </h1>
        <p className="pt-4  pb-[7.25rem] text-[1rem] leading-6 font-sans font-normal">
          Beginner-friendly, Roots-style forró dance classes and live music
          events in the heart of Liverpool. No partner needed. Come try a free
          intro class!
        </p>
        <div className="">
          <MainButton
            href="/#classes-events"
            content="Come dance with us"
            bg="black"
            font="white"
          />
        </div>
        <Image
          src={
            'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="illustration"
          className="pt-4 pb-4 rounded-3xl overflow-hidden h-[614px] object-cover"
          width={1336}
          height={614}
        />
      </div>
    </div>
  )
}
