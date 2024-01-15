'use client'

// import { SignUpButton } from './SignUpButton'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Dropdown } from './Dropdown'
import Image from 'next/image'
import forroLogo from '../assets/fl_logo.png'
import { PlusSign } from '../assets/plus_sign'
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from '@/lib/language'

export function Navbar(props: { plusColor?: string; siteFestival: any }) {
  const [dropdown, setDropdown] = useState(false)
  const [dropdownFestival, setDropdownFestival] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [zIndex, setZIndex] = useState('z-[61]')

  const handleClick = () => {
    setDropdown(!dropdown)
  }
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    if (dropdown) {
      setZIndex('z-[61]')
    } else {
      setTimeout(() => {
        setZIndex('z-0')
      }, 500)
    }
  }, [dropdown])

  const closeMobileMenu = () => setDropdown(false)

  useEffect(() => {
    if (language === 'pt') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [language])
  const LanguageToogle = useMemo(() => {
    function handleChangeLanguage() {
      if (language === 'en') {
        setLanguage('pt')
      } else {
        setLanguage('en')
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
          <div className="absolute z-[60] flex gap-8 -mt-[0.75rem] text-[1rem] pl-3 text-gray-200 font-changa">
            <div className={language === 'en' ? 'text-black' : ''}>EN</div>
            <div className={language === 'pt' ? 'text-black' : ''}>PT</div>
          </div>
        </label>
      </div>
    )
  }, [isChecked, props])
  return (
    <nav
      className={`h-23 align-middle text-xl w-full flex-shrink-0 transition-colors duration-500 absolute text-${
        props.plusColor ? 'white' : 'black'
      } ${dropdown ? 'z-[60] bg-yellow-500' : 'bg-transparent'}`}
    >
      <div
        className={`${styles.container} h-[5rem] flex justify-between align-middle text-xl w-full flex-shrink-0 z-[60] relative`}
      >
        <div
          className={`md:block hidden w-full h-[1px] bg-${
            props.plusColor ? 'white' : 'black'
          } bg-opacity-25 px-4 absolute bottom-0`}
        ></div>
        <div
          className={`absolute left-4 top-3 z-[60] ${dropdown ? 'hidden' : ''}`}
        >
          <Link
            href="/"
            className="font-semibold cursor-pointer no-underline pt-2"
            onClick={closeMobileMenu}
          >
            <Image
              src={forroLogo}
              alt="illustration"
              className="overflow-hidden"
              width={200}
              height={200}
              style={{ maxWidth: '7rem' }}
            />
          </Link>
        </div>
        {dropdown ? LanguageToogle : <div></div>}
        <div
          className={`sm:hidden justify-self-end align-middle h-max w-max ${
            dropdown ? styles.turn : styles.original
          }`}
          onClick={handleClick}
        >
          <PlusSign color={props.plusColor || '#201E1E'} />
        </div>
        <ul className="items-center gap-10 hidden sm:flex text-center justify-end text-[1.25rem] font-semibold">
          <li className="flex align-middle h-20">{LanguageToogle}</li>
          <li className="flex align-middle items-center h-20">
            <Link
              href="/#classes-events"
              className="no-underline hover:opacity-60 transition-opacity"
            >
              {props.siteFestival && props.siteFestival[0].navbar[1]}
            </Link>
          </li>
          <li className="flex align-middle h-20 items-center">
            <Link
              href="/#community"
              className="no-underline hover:opacity-60 transition-opacity"
            >
              {props.siteFestival && props.siteFestival[0].navbar[2]}
            </Link>
          </li>
          <li
            onMouseEnter={() => setDropdownFestival(true)}
            onMouseLeave={() => setDropdownFestival(false)}
            className="align-center h-full cursor-pointer items-center"
          >
            <div className="flex gap-2 items-center h-full">
              <Link
                href="/lff2024"
                className={`pt-2 no-underline h-full text-left hover:opacity-60 transition-opacity items-center bg-${
                  props.plusColor ? 'white' : 'black'
                } bg-opacity-25 w-60 px-10`}
              >
                {props.siteFestival && props.siteFestival[0].navbar[0]}
              </Link>
              <FontAwesomeIcon
                icon={dropdownFestival ? faChevronDown : faChevronRight}
                className="text-xl items-center p-4 w-4"
              />
            </div>
            {dropdownFestival && (
              <div
                className={`relative z-[63] bg-${
                  props.plusColor ? 'white' : 'black'
                } bg-opacity-25 w-full text-left pb-4`}
              >
                <div className="pr-4 pt-6 z-[61] pl-10">
                  <div
                    className={`flex justify-center bg-white no-underline rounded-lg mr-16 hover:opacity-60`}
                  >
                    <p
                      className={`text-black text-center text-[1rem] leading-5 uppercase font-extrabold p-2`}
                    >
                      <Link href="/lff2024/tickets">
                        {language === 'en' ? 'TICKETS' : 'INGRESSOS'}
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="pt-6 pl-10">
                  <Link
                    href="/lff2024#teachers"
                    className="text-1xl no-underline h-full w-full cursor-pointer hover:opacity-60"
                  >
                    {props.siteFestival[0] && props.siteFestival[0].navbar[5]}
                  </Link>
                </div>
                <div className="pt-5 pl-10">
                  <Link
                    href="/lff2024#program"
                    className="text-1xl no-underline h-full w-full cursor-pointer hover:opacity-60"
                  >
                    {props.siteFestival[0] && props.siteFestival[0].navbar[6]}
                  </Link>
                </div>
              </div>
            )}
          </li>
          {/* <li className="flex align-middle h-20">
            <Link
              href="/#faq"
              className="no-underline pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              {props.siteFestival && props.siteFestival[0].navbar[3]}
            </Link>
          </li> */}
        </ul>
      </div>
      <div
        className={
          dropdown
            ? 'transition-opacity duration-500 opacity-100 z-[61] relative'
            : `${zIndex} opacity-0 transition-opacity duration-500 relative`
        }
      >
        <Dropdown setDropdown={setDropdown} siteFestival={props.siteFestival} />
      </div>

      {/* <SignUpButton /> */}
    </nav>
  )
}
