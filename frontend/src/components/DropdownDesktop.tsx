'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/language'
import { MainButton } from './MainButton'
import stylesLocal from './DropDownDesktop.module.css'
import { FLLogoForroLinks } from '@/assets/fl_logo_forro_links'
import { LFFLogoForroLinksWhite } from '@/assets/lff_logo_forro_links_white'

export function DropdownDesktop(props: {
  setDropdown: (dropDown: boolean) => void
  siteFestival: any
  slideOutBottom: boolean
  slideOutTop: boolean
}) {
  const [isChecked, setIsChecked] = useState(false)

  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    if (language === 'pt') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [language])

  function scrollToSection(e: any) {
    props.setDropdown && props.setDropdown(false)
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      if (href.split('#')[0] === window.location.pathname) {
        e.preventDefault()
        const element = document.querySelector(`#${href.split('#')[1]}`)
        const offsetTop = element instanceof HTMLElement ? element.offsetTop : 0

        window.scroll({
          top: offsetTop,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div className="absolute w-screen h-screen z-[61] text-center font-extrabold font-changa text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-8 left-0">
      {props.siteFestival && (
        <div className="w-screen flex h-full">
          <div
            className={`${
              props.slideOutTop
                ? stylesLocal.slide_in_top1
                : stylesLocal.slide_in_top
            } w-[50%] bg-yellow-500 h-full  flex flex-col pt-[10%] pl-[10%]`}
          >
            <div className="pt-0 flex md:justify-start">
              <Link
                href="/"
                className="text-2xl no-underline h-full w-full cursor-pointer"
                onClick={scrollToSection}
              >
                <FLLogoForroLinks />
                {/* <Image
                  src={forroLogo}
                  alt="illustration"
                  className="overflow-hidden"
                  width={292}
                  height={153}
                /> */}
              </Link>
            </div>
            <div className="pt-6 flex md:justify-start justify-center">
              <Link
                href="/#classes-events"
                className="no-underline cursor-pointer p-3 md:pl-0  sm:h-full sm:w-full md:h-max md:w-max"
                onClick={scrollToSection}
              >
                {props.siteFestival && props.siteFestival[0].navbar[1]}
              </Link>
            </div>
            <div className="pt-5 flex md:justify-start justify-center">
              <Link
                href="/#community"
                className="no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={scrollToSection}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[2]}
              </Link>
            </div>
          </div>
          <div
            className={`${
              props.slideOutBottom
                ? stylesLocal.slide_in_bottom1
                : stylesLocal.slide_in_bottom
            } w-[50%] bg-black text-white h-full flex flex-col pt-[10%] pl-[10%]`}
          >
            <div className="pt-[3.5rem] md:pt-0">
              <Link
                href="/lff2024"
                className="text-2xl no-underline cursor-pointer text-white"
                onClick={scrollToSection}
              >
                <LFFLogoForroLinksWhite />
              </Link>
            </div>

            <div className="pt-6 z-[61] flex md:justify-start justify-center">
              <div className="flex justify-center md:pl-0 no-underline rounded-lg">
                <MainButton
                  href="/lff2024/tickets"
                  content={language === 'en' ? 'Get Tickets' : 'Ingressos'}
                  bg="white"
                  font="black"
                />
              </div>
            </div>
            <div className="pt-6 flex md:justify-start justify-center">
              <Link
                href="/lff2024#teachers"
                className="no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={scrollToSection}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[5]}
              </Link>
            </div>
            <div className="pt-5 flex md:justify-start justify-center ">
              <Link
                href="/lff2024#program"
                className="no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={scrollToSection}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[6]}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
