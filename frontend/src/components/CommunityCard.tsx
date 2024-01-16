import Image from 'next/image'

export function CommunityCard(props: {
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
        className="mb-0 pb-0 rounded-2xl overflow-hidden h-[13] w-[11rem] md:w-[21rem] object-cover z-[60] relative"
        height={1}
        width={600}
      />
      <div className="flex justify-center -mt-[6.5rem] z-[59]">
        <div className="bg-white pt-[7.5rem] w-10/12 pl-4 md:pl-8">
          <div className="md:flex md:gap-2 md:pb-4">
            <p className="text-black text-[1.25rem] md:text-[1.5rem] font-extrabold leading-6 md:leading-8 pt-3 font-changa">
              {nameParts[0]}
            </p>
            <p className="text-black text-[1.25rem]  md:text-[1.5rem]  font-extrabold leading-6 md:leading-8 md:pt-3 font-changa">
              {nameParts[1]}
            </p>
          </div>
          <p className="text-black text-[1rem]  md:text-[1.5rem] font-extrabold leading-6 pt-2 md:pt-0 pb-4 md:leading-8 font-changa uppercase">
            {props.action}
          </p>
        </div>
      </div>
    </div>
  )
}
