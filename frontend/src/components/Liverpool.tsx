import { FaqQuestion } from './Faq'
import { MMTBus } from './MMTBus'
import { PromoCard } from './PromoCard'
import { Tickets } from './Tickets'

export function Liverpool() {
  return (
    <div id="liverpool" className="pb-20">
      <h1 className="text-center pt-16 pl-2 text-[2rem] leading-9 font-sans font-semibold">
        Come Together in Liverpool
      </h1>
      <PromoCard
        title="Special offer!"
        description="Save 30% on accomodation at Selina Liverpool!"
        code="Use code FORRO30 on Selina.com to take advantage of this special offer for Liverpool Forró Festival 2024 attendees!"
      />
      <div>
        <h2 className="text-center font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
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
      <div>
        <h2 className="text-center font-sans text-[1.5rem] leading-5 font-semibold pl-2 pt-16">
          Hop on the Magical Mystery Tour Bus!
        </h2>
        <p className="text-center pt-4 pb-4 pl-2 pr-2 text-[1rem] leading-5 font-sans font-normal">
          Join us for a special forró edition of the classic Liverpool Magical
          Mystery Beatles tour! See famous Beatles sites with your new forró
          friends while enjoying forró Beatles covers.
        </p>
        <p className="text-center pt-4 pb-4 pl-2 pr-2 text-[1rem] leading-5 font-sans font-normal">
          Spots are limited, so reserve yours today!
        </p>
        <MMTBus />
        <Tickets />
      </div>
    </div>
  )
}
