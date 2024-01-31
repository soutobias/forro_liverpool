import { MainButton } from './MainButton'
import { useLanguage } from '@/lib/language'

export function TicketCard(props: {
  isDisabled?: boolean
  color: string
  passType: string
  lote: string
  price: string
  classes: string
  parties: string
}) {
  const cardStyle: React.CSSProperties = {
    opacity: props.isDisabled ? 0.8 : 1,
    pointerEvents: props.isDisabled ? 'none' : 'auto',
  }
  const { language } = useLanguage()

  return (
    <div
      style={cardStyle}
      className={`rounded-lg p-4 pb-6 w-full md:w-auto md:aspect-3/2 h-auto md:h-[15rem] lg:h-[16rem] xl:h-[17rem] ${props.color} md:mt-0 mt-4`}
    >
      <div className="flex justify-between items-center pb-10">
        <div className="text-white flex">
          <div className="text-[1.25rem] md:text-[1.5rem] font-extrabold leading-6 md:leading-8 pe-4">
            {props.passType}
          </div>
          <div className=" text-white text-[1rem] font-normal leading-6 font-sans">
            {props.lote}
          </div>
        </div>
        <div className="bg-white uppercase text-black w-max pl-4 pr-4 rounded-2xl text-[1rem] font-extrabold">
          {props.price}
        </div>
      </div>
      <div className=" text-white text-[1rem] font-normal leading-6 font-sans">
        {props.classes}
      </div>
      <div className=" text-white text-[1rem] font-normal leading-6 font-sans">
        {props.parties}
      </div>
    </div>
  )
}
