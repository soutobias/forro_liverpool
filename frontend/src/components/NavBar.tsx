'use client'

// import { SignUpButton } from './SignUpButton'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dropdown } from './Dropdown'
import Image from 'next/image'
import forroLogo from '../assets/fl_logo.png'
import { PlusSign } from '../assets/plus_sign'
import styles from './NavBar.module.css'

export function Navbar(props: {
  language: any
  setLanguage: any
  plusColor?: string
  siteFestival: any
}) {
  const [dropdown, setDropdown] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [zIndex, setZIndex] = useState('z-[61]')

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
  function handleChangeLanguage() {
    if (props.language === 'en') {
      props.setLanguage('pt')
    } else {
      props.setLanguage('en')
    }
  }

  useEffect(() => {
    if (props.language === 'pt') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [props.language])
  function LanguageToogle() {
    return (
      <div className="text-[1rem] font-extrabold leading-6 uppercase pt-3">
        <label className={`${styles.switch} relative`}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChangeLanguage}
          />
          <span className={styles.slider}></span>
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
  }
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
        {dropdown ? <LanguageToogle /> : <div></div>}
        <div
          className={`sm:hidden justify-self-end align-middle h-max w-max ${
            dropdown ? styles.turn : styles.original
          }`}
          onClick={handleClick}
        >
          <PlusSign color={props.plusColor || '#201E1E'} />
        </div>
        <ul className=" gap-5 hidden sm:flex text-center justify-end">
          <li className="flex align-middle h-20">
            <Link
              href="/lff2024"
              className="no-underline pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              {props.siteFestival && props.siteFestival[0].navbar[0]}
            </Link>
          </li>
          <li className="flex align-middle h-20">
            <Link
              href="/#classes-events"
              className="no-underline pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              {props.siteFestival && props.siteFestival[0].navbar[1]}
            </Link>
          </li>
          <li className="flex align-middle h-20">
            <Link
              href="/#community"
              className="no-underline pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              {props.siteFestival && props.siteFestival[0].navbar[2]}
            </Link>
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
