import Image from 'next/image'

export function TeacherCard(props: {
  image: string
  title: string
  location: string
  action: string
}) {
  return (
    <div className="h-[14.75rem] w-[16rem]">
      <Image
        src={props.image}
        alt="illustration"
        className="mb-0 p-2 pb-0 rounded-2xl overflow-hidden h-[8.75rem] object-cover"
        height={140}
        width={1336}
        style={{ maxWidth: '16rem' }}
      />
      <div className="flex justify-start pt-3 gap-4 pl-4 pr-4">
        <div className="text-[1.25rem] font-semibold leading-6 font-sans">
          {props.title}
        </div>
        <div className="text-[1rem] font-normal leading-6 font-sans">
          {props.location}
        </div>
      </div>
      <div className="bg-gray-60 uppercase text-black mt-1 w-max ml-3 pl-3 pr-3 mt-3 font-bold rounded-2xl text-[1rem] font-sans">
        {props.action}
      </div>
    </div>
  )
}
