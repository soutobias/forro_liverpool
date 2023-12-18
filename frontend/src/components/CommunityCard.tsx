import Image from 'next/image'

export function CommunityCard(props: {
  image: string
  name: string
  surname: string
  action: string
}) {
  return (
    <div className="">
      <Image
        src={props.image}
        alt="illustration"
        className="mb-0 p-2 pb-0 rounded-2xl overflow-hidden h-[12.5rem] object-cover"
        height={400}
        width={1336}
      />
      <div className="mt-0 flex justify-center">
        <div className="bg-gray-60 mt-0 w-10/12">
          <p className="text-black text-[1.25rem]  font-semibold leading-6 pt-3 pl-4 font-sans">
            {props.name}
          </p>
          <p className="text-black text-[1.25rem]  font-semibold leading-6 pl-4 font-sans">
            {props.surname}
          </p>
          <p className="text-black text-[1rem]  font-bold leading-6 pl-4 pb-4 font-sans uppercase">
            {props.action}
          </p>
        </div>
      </div>
    </div>
  )
}
