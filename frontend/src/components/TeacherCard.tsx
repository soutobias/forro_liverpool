'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function TeacherCard(props: {
  image: string
  title: string
  location: string
  action: string
  color: string
}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mdBreakpoint = 768 // Medium devices
  const xlBreakpoint = 1280 // Extra large devices

  // Conditional styles based on screen width
  const dynamicStyles = {
    ...(screenWidth >= xlBreakpoint ? { maxWidth: '20rem' } : {}),
    ...(screenWidth >= mdBreakpoint && screenWidth < xlBreakpoint
      ? { maxWidth: '18.75rem' }
      : {}),
    ...(screenWidth < mdBreakpoint ? { maxWidth: '16rem' } : {}),
  }

  return (
    <div className={`rounded-lg p-4 pb-6  ${props.color}`}>
      <Image
        src={props.image[0]}
        alt="illustration"
        className="mb-0 rounded-2xl h-[8.75rem] md:h-[10.5rem] md:w-[18.75rem] xl:h-[12rem] xl:w-[22rem] object-cover"
        height={140}
        width={1336}
        style={{ ...dynamicStyles }}
      />
      <div className="flex justify-start pt-3 gap-2 pb-2 text-white">
        <div className="text-[1.25rem] md:text-[1.25rem] md:leading-8 font-extrabold max-w-[10rem] leading-6">
          {props.title}
        </div>
        <div className="text-[1rem] md:text-[1.25rem] md:leading-7 font-normal leading-6 font-sans">
          {props.location}
        </div>
      </div>
      <div className="bg-white uppercase text-black w-max pl-4 pr-4 rounded-2xl text-[1rem] md:text-[1.25rem] font-extrabold">
        {props.action}
      </div>
    </div>
  )
}
