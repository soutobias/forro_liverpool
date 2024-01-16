export function PromoCard(props: {
  title: string
  description: string
  code: string
  observation?: string
}) {
  return (
    <div className="m-2 h-[15rem] rounded-2xl border-blue-200 border-2 text-center">
      <div className="p-3 uppercase text-[1rem] font-bold leading-6 font-sans">
        {props.title}
      </div>
      <div className="text-[1.25rem] p-3 font-semibold leading-6 font-sans">
        {props.description}
      </div>
      <div className="text-black p-3 font-normal text-[1rem] font-sans">
        {props.code}
      </div>
    </div>
  )
}
