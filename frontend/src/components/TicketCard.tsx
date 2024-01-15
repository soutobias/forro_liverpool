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
    maxWidth: '343px',
    maxHeight: '262px',
    width: '100%',
    opacity: props.isDisabled ? 0.5 : 1,
    pointerEvents: props.isDisabled ? 'none' : 'auto',
  }
  const { language } = useLanguage()

  return (
    <div
      style={cardStyle}
      className={`rounded-lg p-4 pb-6 mb-4 mx-auto my-auto ${props.color}`}
    >
      <div className="flex justify-between items-center">
        <div className="text-white flex">
          <div className="text-[1.25rem] font-extrabold leading-6 pe-4">
            {props.passType}
          </div>
          <div className="text-[1rem] font-normal leading-6 font-sans">
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
      <div className="pl-4 pr-4 pt-8">
        <MainButton
          href="#"
          content={language === 'en' ? 'ADD TO CART' : 'Adicione ao carrinho'}
          bg="white"
          font="black"
        />
      </div>
    </div>
  )
}
