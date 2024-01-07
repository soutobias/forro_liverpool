'use client'

import Link from 'next/link'
import Image from 'next/image'
import forroLogo from '../assets/FL_logo_black.png'
import LFFforroLogo from '../assets/LFF_Black.png'
import { useEffect, useMemo, useState } from 'react'
import styles from './NavBar.module.css'

export function ForroLinks(props: {
  setDropdown?: (dropDown: boolean) => void
  siteFestival: any
  language?: any
  setLanguage?: any
}) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (props.language === 'pt') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [props.language])

  const LanguageToogle = useMemo(() => {
    function handleChangeLanguage() {
      if (props.language === 'en') {
        props.setLanguage('pt')
      } else {
        props.setLanguage('en')
      }
    }
    return (
      <div className="text-[1rem] font-extrabold leading-6 uppercase pt-3">
        <label className={`${styles.switch} relative`}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChangeLanguage}
          />
          <span
            className={`${styles.slider} ${styles.slider_animation}`}
          ></span>
          <div className="absolute z-[60] flex gap-6 -mt-[0.75rem] pl-3 text-gray-200">
            <div className={props.language === 'en' ? 'text-black' : ''}>
              EN
            </div>
            <div className={props.language === 'pt' ? 'text-black' : ''}>
              PT
            </div>
          </div>
        </label>
      </div>
    )
  }, [isChecked, props])

  return (
    <div className="pt-12 text-center font-extrabold font-changa text-[1.25rem] px-4 md:px-[8.5rem]">
      {props.siteFestival && (
        <div className="md:flex md:justify-between">
          <div>
            <div className="pt-0 flex md:justify-start">
              <Link
                href="/"
                className="text-2xl no-underline h-full w-full cursor-pointer"
                onClick={() => props.setDropdown && props.setDropdown(false)}
              >
                <Image
                  src={forroLogo}
                  alt="illustration"
                  className="overflow-hidden"
                  width={179}
                  height={94}
                />
              </Link>
            </div>
            <div className="pt-6 flex md:justify-start justify-center">
              <Link
                href="/#classes-events"
                className="text-1xl no-underline cursor-pointer p-3 md:pl-0  sm:h-full sm:w-full md:h-max md:w-max"
                onClick={() => props.setDropdown && props.setDropdown(false)}
              >
                {props.siteFestival && props.siteFestival[0].navbar[1]}
              </Link>
            </div>
            <div className="pt-5 flex md:justify-start justify-center">
              <Link
                href="/#community"
                className="text-1xl no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={() => props.setDropdown && props.setDropdown(false)}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[2]}
              </Link>
            </div>
          </div>
          <div>
            <div className="pt-[3.5rem] md:pt-0">
              <Link
                href="/lff2024"
                className="text-2xl no-underline cursor-pointer"
                onClick={() => props.setDropdown && props.setDropdown(false)}
              >
                <Image
                  src={LFFforroLogo}
                  alt="illustration"
                  className="overflow-hidden"
                  width={179}
                  height={94}
                />
              </Link>
            </div>

            <div className="pt-6 z-[61] flex md:justify-start justify-center">
              <div className="flex justify-center text-1xl cursor-pointer md:pl-0 bg-white no-underline rounded-lg">
                <p
                  className={`text-black text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-4`}
                >
                  TICKETS
                </p>
              </div>
            </div>
            <div className="pt-6 flex md:justify-start justify-center">
              <Link
                href="/lff2024#teachers"
                className="text-1xl no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={() => props.setDropdown && props.setDropdown(false)}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[5]}
              </Link>
            </div>
            <div className="pt-5 flex md:justify-start justify-center ">
              <Link
                href="/lff2024#program"
                className="text-1xl no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={() => props.setDropdown && props.setDropdown(false)}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[6]}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">{LanguageToogle}</div>
        </div>
      )}
    </div>
  )
}
