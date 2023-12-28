import Image from 'next/image'
import { MainButton } from './MainButton'
<<<<<<< HEAD
import styles from './Bg.module.css'
=======
import styles from './Hero.module.css'
import { keyable } from './ClassEvent'
>>>>>>> 53425c0 (backend do site do forró)

interface HeroProps {
  site: keyable[]
}

export function Hero(props: HeroProps) {
  return props.site ? (
    <div className={`w-full z-[59] relative ${styles.heroBg}`}>
      <div className="pl-4 pr-4">
        <h1 className="pt-[6.75rem]  text-[2rem] leading-10 font-extrabold font-changa">
          {props.site.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </h1>
        <p className="pt-4  pb-[7.25rem] text-[1rem] leading-6 font-sans font-normal">
          {props.site.map((item) => (
            <p key={item.id}>{item.description}</p>
          ))}
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
          src={props.site.map((item) => item.image[0]).toString()}
          alt="illustration"
          className="pt-4 pb-4 rounded-3xl overflow-hidden h-[614px] object-cover"
          width={1336}
          height={614}
        />
      </div>
    </div>
  ) : (
    <></>
  )
}
