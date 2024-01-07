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
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export function Navbar(props: {
  language: any
  setLanguage: any
  plusColor?: string
  siteFestival: any
}) {
  const [dropdown, setDropdown] = useState(false)
  const [dropdownFestival, setDropdownFestival] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [zIndex, setZIndex] = useState('z-[61]')

  const handleDropDownFestival = () => {
    setDropdownFestival(!dropdownFestival)
  }

  const handleClick = () => {
    setDropdown(!dropdown)
  }

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
    <nav
      className={`h-23 align-middle text-xl w-full flex-shrink-0 transition-colors duration-500 absolute ${
        dropdown ? 'z-[60] bg-yellow-500' : 'bg-transparent'
      }`}
    >
      <div
        className={`${styles.container} flex justify-between align-middle text-xl w-full flex-shrink-0 z-[60] relative`}
      >
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
              width={100}
              height={100}
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
        <ul className="items-center gap-5 hidden sm:flex text-center justify-end text-[1.25rem] font-semibold">
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
            onClick={() => setDropdownFestival(!dropdownFestival)}
            className="flex align-center h-20 items-center gap-2 w-40 cursor-pointer"
          >
            <div className="no-underline text-left hover:opacity-60 transition-opacity items-center">
              {props.siteFestival && props.siteFestival[0].navbar[0]}
            </div>
            <FontAwesomeIcon
              icon={dropdownFestival ? faChevronDown : faChevronRight}
              className="text-xl items-center w-4"
            />
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
      {dropdownFestival && (
        <div
          id="dropdown"
          className="z-62 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
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
