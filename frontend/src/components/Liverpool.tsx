import { FaqQuestion } from './Faq'
import { H1 } from './H1'
import styles from './Bg.module.css'

export function Liverpool() {
  return (
    <div
      id="liverpool"
      className={`pb-[15rem] text-white relative ${styles.blackBg}`}
    >
      <div
        className={`absolute -top-[10rem] w-full h-[20rem] ${styles.circlesBg1}`}
      />
      <div className="pl-4 pr-4 ">
        <div className="pt-[13rem] pb-10">
          <H1 color="white" text="Come Together in Liverpool" />
        </div>
        {/* <PromoCard
        title="Special offer!"
        description="Save 30% on accomodation at Selina Liverpool!"
        code="Use code FORRO30 on Selina.com to take advantage of this special offer for Liverpool Forró Festival 2024 attendees!"
      /> */}
        <div>
          <h2 className="text-center font-changa text-[1.5rem] leading-8 font-extrabold pl-2 pt-1 pb-8">
            Getting to Liverpool
          </h2>
          <FaqQuestion
            question="By plane"
            answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
          />
          <FaqQuestion
            question="By train"
            answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
          />
          <FaqQuestion
            question="By bus"
            answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
          />
        </div>
      </div>
    </div>
  )
}
