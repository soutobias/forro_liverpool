import Image from 'next/image'

export function CommunityCard(props: {
  key: number
  image: string
  name: string
  action: string
  className?: string
}) {
  const nameParts = props.name.split(' ')

  return (
    <div className={props.className}>
      <Image
        src={props.image}
        alt="illustration"
        className="mb-0 pb-0 rounded-2xl overflow-hidden h-[13] w-[11rem] object-cover z-[60] relative"
        height={400}
        width={1336}
      />
      <div className="flex justify-center -mt-[6.5rem] z-[59]">
        <div className="bg-gray-60 pt-[7.5rem] w-10/12 pl-4">
          <p className="text-black text-[1.25rem]  font-semibold leading-6 pt-3 pl-4 font-changa">
            {nameParts[0]}
          </p>
          <p className="text-black text-[1.25rem]  font-semibold leading-6 pl-4 font-changa">
            {nameParts[1]}
          </p>
          <p className="text-black text-[1rem]  font-bold leading-6 pt-2 pl-4 pb-4 font-changa uppercase">
            {props.action}
          </p>
        </div>
      </div>
    </div>
  )
}
