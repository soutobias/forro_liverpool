import { FaqQuestion } from "./Faq";
import { H1 } from "./H1";
import styles from "./Bg.module.css";
import { fetchApi } from "@/lib/api";
import { useEffect, useState } from "react";
import { keyable } from "./ClassEvent";
import { useLanguage } from "@/lib/language";
// import { PromoCard } from './PromoCard'

export function Liverpool2025() {
  const [showLiverpool, setShowLiverpool] = useState<keyable[] | null>(null);

  const { language } = useLanguage();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (language === "en") {
      setUrl("api/v1/liverpool_questions");
    } else {
      setUrl("api/v1/liverpool_question_translations");
    }
  }, [language]);

  useEffect(() => {
    if (url) {
      fetchApi(url, setShowLiverpool);
    }
  }, [url]);

  return (
    <div
      id="liverpool"
      className={`pb-[15rem] md:pb-[25rem] text-white relative ${styles.blackBgFull}`}
    >
      <div
        className={`absolute -top-[10rem] md:-top-[14rem] lg:-top-[16rem] xl:-top-[19rem]  2xl:-top-[20rem] w-full min-h-[20rem] md:min-h-[25rem] lg:min-h-[30rem] xl:min-h-[35rem] 2xl:min-h-[40rem] ${styles.circlesBg1}`}
      />
      <div className="px-4 md:px-[8rem] xl:px-[23rem] ">
        <div className="pt-[13rem] md:pt-[25rem] pb-10 text-center">
          <H1 color="white" text="Come Together" />
          <H1
            color="white"
            text={language === "en" ? "in Liverpool" : "em Liverpool"}
          />
        </div>
        {/* <PromoCard
          title={language === 'en' ? 'Special Offer!' : 'Promoção'}
          description={
            language === 'en'
              ? 'Save 30% on accomodation at Selina Liverpool!'
              : 'Desconto de 30% na sua estadia com Selina!'
          }
          code={
            language === 'en'
              ? 'Use code FORRO30 on Selina.com to take advantage of this special offer for Liverpool Forró Festival 2024 attendees!'
              : 'Use o código FORRO30 em Selina.com pra aproveitar essa oferta especial para participantes do Festival.'
          }
          observation={
            language === 'en'
              ? 'Limited to first 50 guests.'
              : 'Apenas para os 50 primeiros inscritos'
          }
        /> */}
        <div>
          <h2 className="text-center font-changa text-[1.5rem] leading-6 md:leading-8 md:text-[2rem] font-extrabold pl-2 pt-1 md:pt-10 pb-8 md:text-left md:pb-20">
            {language === "en"
              ? "Getting to Liverpool"
              : "Como chegar em Liverpool"}
          </h2>
          {showLiverpool &&
            showLiverpool.map((item: any, index: number) => (
              <FaqQuestion
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
