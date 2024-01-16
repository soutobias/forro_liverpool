import { MainButton } from './MainButton'
import styles from './Bg.module.css'
import { keyable } from './ClassEvent'
import { useLanguage } from '@/lib/language'
import { useEffect, useRef, useState } from 'react'

interface HeroProps {
  site: keyable[] | null
}

export function Hero(props: HeroProps) {
  const { language } = useLanguage()

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const video = videoRef.current
        if (entries[0].isIntersecting) {
          if (video) {
            video.play()
          }
        } else {
          if (video) {
            video.pause()
          }
        }
      },
      { threshold: 0.25 },
    )
    const video = videoRef.current
    if (video) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (video) {
        observer.unobserve(video)
      }
    }
  }, [])

  return (
    props.site && (
      <div className={`w-full z-[59] relative ${styles.heroBg} sm:pb-20`}>
        <div className="px-4 sm:flex sm:justify around pt-[6.75rem] sm:gap-[1rem] sm:px-[2rem] md:gap-[3rem] md:px-[3rem] lg:gap-[4rem] lg:px-[6rem] xl:gap-[6rem] xl:px-[8.5rem]">
          <div className="flex flex-col sm:justify-center sm:w-[50%]">
            <div className="text-[2rem] sm:text-[2.25rem] leading-10 sm:leading-[3rem] font-extrabold font-changa">
              <h1>{props.site[0].title}</h1>
            </div>
            <div className="pt-4 pb-[7.25rem] sm:pb-[5rem] text-[1rem] sm:text-[1.25rem] leading-6 sm:leading-7 font-sans font-semibold">
              <p>{props.site[0].description}</p>
            </div>
            <div className="bg-black">
              <MainButton
                href="/#classes-events"
                content={
                  language === 'en'
                    ? 'Come dance with us'
                    : 'Bora dançar com a gente'
                }
                bg="black"
                font="white"
              />
            </div>
          </div>
          <div className="pt-4 pb-4 h-max flex justify-center items-center">
            <video
              ref={videoRef}
              width="1091"
              height="1"
              autoPlay
              loop
              muted
              controls
              className="rounded-2xl overflow-hidden"
              style={{ borderRadius: '16px', overflow: 'hidden' }}
              // poster={path-to-poster.jpg}
            >
              <source
                src={props.site && props.site[0].cover_video}
                type="video/webm"
              />
              {/* <source
                src={props.site && props.site[0].cover_video}
                type="video/mp4"
              /> */}
            </video>
          </div>
        </div>
      </div>
    )
  )
}
