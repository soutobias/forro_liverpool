import { MainButton } from './MainButton'
import styles from './Bg.module.css'
import { keyable } from './ClassEvent'
import { useLanguage } from '@/lib/language'

interface HeroProps {
  site: keyable[] | null
}

export function Hero(props: HeroProps) {
  const { language } = useLanguage()

  return (
    props.site && (
      <div className={`w-full z-[59] relative ${styles.heroBg}`}>
        <div className="px-4 md:grid md:grid-cols-2 pt-[6.75rem] md:gap-10 md:px-[8.5rem]">
          <div className="flex flex-col md:justify-center">
            <div className=" text-[2rem] leading-10 font-extrabold font-changa">
              <p>{props.site[0].title}</p>
            </div>
            <div className="pt-4  pb-[7.25rem] md:pb-[5rem] text-[1rem] leading-6 font-sans font-normal">
              <p>{props.site[0].description}</p>
            </div>
            <div className="bg-black">
              <MainButton
                href="/#classes-events"
                content={
                  language === 'en'
                    ? 'Come dance with us'
                    : 'Vem dançar com a gente'
                }
                bg="black"
                font="white"
              />
            </div>
          </div>
          <div className="flex justify-center md:px-10">
            <video
              width="1336"
              height="614"
              autoPlay
              loop
              muted
              controls
              className="pt-4 pb-4 rounded-3xl overflow-hidden h-[614px] object-cover"
            >
              <source
                src={props.site && props.site[0].cover_video}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    )
  )
}
