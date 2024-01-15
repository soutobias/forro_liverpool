import Image from 'next/image'

export function TeacherCard(props: {
  image: string
  title: string
  location: string
  action: string
  color: string
}) {
  return (
    <div className={`rounded-lg p-4 pb-6  ${props.color}`}>
      <Image
        src={props.image[0]}
        alt="illustration"
        className="mb-0 rounded-2xl h-[8.75rem] md:h-[10.5rem] md:w-[18.75rem] object-cover"
        height={140}
        width={1336}
        style={{ maxWidth: '16rem' }}
      />
      <div className="flex justify-start pt-3 gap-2 pb-2 text-white">
        <div className="text-[1.25rem] font-extrabold leading-6">
          {props.title}
        </div>
        <div className="text-[1rem] font-normal leading-6 font-sans">
          {props.location}
        </div>
      </div>
      <div className="bg-white uppercase text-black w-max pl-4 pr-4 rounded-2xl text-[1rem] font-extrabold">
        {props.action}
      </div>
    </div>
  )
}
