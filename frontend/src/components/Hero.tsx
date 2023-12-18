import Image from 'next/image'
import bgHero from '../assets/bg_hero.jpg'

export function Hero() {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(assets/bg_hero.jpg)`,
      }}
    >
      <h1 className="pt-16 pb-20 pl-3 pr-3 text-[2rem] leading-9 font-sans font-semibold">
        Brazilian forró classes & events in the heart of Liverpool
      </h1>
      <p className="pt-1 pl-2 pr-2 pb-8 text-[1rem] leading-5 font-sans font-normal">
        Beginner-friendly, Roots-style forró dance classes and live music events
        in the heart of Liverpool. No partner needed. Come try a free intro
        class!
      </p>
      <div className="flex justify-center">
        <a
          href="/#classes-events"
          className="no-underline bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 ml-2 mr-2"
        >
          Come dance with us
        </a>
      </div>
      <Image
        src={
          'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="illustration"
        className="p-2 rounded-2xl overflow-hidden h-[614px] object-cover"
        width={1336}
        height={614}
      />
    </div>
  )
}
