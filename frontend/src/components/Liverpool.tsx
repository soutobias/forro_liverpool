import { FaqQuestion } from './Faq'
import { H1 } from './H1'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'
import { useEffect, useState } from 'react'
import { keyable } from './ClassEvent'
import { useLanguage } from '@/lib/language'

export function Liverpool() {
  const [showLiverpool, setShowLiverpool] = useState<keyable[] | null>(null)

  const { language } = useLanguage()
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    if (language === 'en') {
      setUrl('api/v1/liverpool_questions')
    } else {
      setUrl('api/v1/liverpool_questions_translations')
    }
  }, [language])

  useEffect(() => {
    if (url) {
      fetchApi(url, setShowLiverpool)
    }
  }, [url])

  return (
    <div
      id="liverpool"
      className={`pb-[15rem] md:pb-[25rem] text-white relative ${styles.blackBg}`}
    >
      <div
        className={`absolute -top-[10rem] md:-top-[25rem] w-full h-[20rem] md:h-[45rem] ${styles.circlesBg1}`}
      />
      <div className="px-4 md:px-[23.25rem] ">
        <div className="pt-[13rem] md:pt-[25rem] pb-10 text-center">
          <H1 color="white" text="Come Together" />
          <H1 color="white" text="in Liverpool" />
        </div>
        {/* <PromoCard
        title="Special offer!"
        description="Save 30% on accomodation at Selina Liverpool!"
        code="Use code FORRO30 on Selina.com to take advantage of this special offer for Liverpool Forró Festival 2024 attendees!"
      /> */}
        <div>
          <h2 className="text-center font-changa text-[1.5rem] leading-8 font-extrabold pl-2 pt-1 md:pt-10 pb-8 md:text-left md:pb-20">
            Getting to Liverpool
          </h2>
          {showLiverpool &&
            showLiverpool.map((item: any) => (
              <FaqQuestion
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
