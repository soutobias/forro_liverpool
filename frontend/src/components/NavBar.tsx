'use client'

// import { SignUpButton } from './SignUpButton'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Dropdown } from './Dropdown'
import Image from 'next/image'
import forroLogo from '../assets/fl_logo.png'
import { PlusSign } from '../assets/plus_sign'
import styles from './NavBar.module.css'
import { useLanguage } from '@/lib/language'
import { DropdownDesktop } from './DropdownDesktop'

export function Navbar(props: { plusColor?: string; siteFestival: any }) {
  const [dropdown, setDropdown] = useState(false)
  // const [dropdownFestival, setDropdownFestival] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [zIndex, setZIndex] = useState('z-[61]')
  const [dropdownDesktop, setDropdownDesktop] = useState(false)
  const [slideOutBottom, setSlideOutBottom] = useState(false)
  const [slideOutTop, setSlideOutTop] = useState(false)

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    const scrollbarWidth = getScrollbarWidth()
    if (dropdown) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // if you want a smooth scrolling effect
      })
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = '0px'
    }
    return () => {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = '0px'
    }
  }, [dropdown])

  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth

  const [scrollbarWidth, setScrollbarWidth] = useState(getScrollbarWidth())
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (dropdownDesktop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // if you want a smooth scrolling effect
      })
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = '0px'
    }
    return () => {
      document.body.style.overflow = originalStyle
      document.body.style.paddingRight = '0px'
    }
  }, [dropdownDesktop, scrollbarWidth])

  const handleClickMobile = () => {
    setDropdown(!dropdown)
  }
  const handleClickDesktop = () => {
    if (dropdownDesktop) {
      setSlideOutBottom(true)
      setSlideOutTop(true)
    } else {
      setSlideOutBottom(false)
      setSlideOutTop(false)
      setTimeout(() => {
        setDropdownDesktop(true)
      }, 300)
    }
  }
  useEffect(() => {
    if (slideOutBottom) {
      setTimeout(() => {
        setDropdownDesktop(false)
      }, 500)
    }
  }, [slideOutBottom])

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
            <div className={language === 'en' ? 'text-black' : 'text-white'}>
              EN
            </div>
            <div className={language === 'pt' ? 'text-black' : 'text-white'}>
              PT
            </div>
          </div>
        </label>
      </div>
    )
  }, [isChecked, language, setLanguage])
  return (
    <nav
      className={`h-23 align-middle text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-8 leading w-full transition-colors duration-500 absolute text-${
        props.plusColor ? 'white' : 'black'
      } ${dropdown ? 'z-[60] bg-yellow-500' : 'bg-transparent'}`}
    >
      <div
        className={`${styles.container} h-[5rem] flex justify-between align-middle w-full z-[60] relative`}
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
              width={200}
              height={200}
              style={{ maxWidth: '7rem' }}
            />
          </Link>
        </div>
        {dropdown ? LanguageToogle : <div></div>}
        <div className="flex">
          <div
            className={`sm:hidden justify-self-end align-middle h-max w-max ${
              dropdown ? styles.turn : styles.original
            }`}
            onClick={handleClickMobile}
          >
            <PlusSign
              color={dropdown ? '#201E1E' : props.plusColor || '#201E1E'}
            />
          </div>
        </div>
        <div className="sm:flex hidden gap-4">
          <div className="align-middle h-20 hidden sm:block">
            {LanguageToogle}
          </div>
          <div
            className={`hidden sm:block justify-self-end align-middle h-max w-max z-[62] ${
              dropdownDesktop ? styles.turn : styles.original
            }`}
            style={{
              paddingRight: dropdownDesktop ? `${scrollbarWidth}px` : '0px',
            }}
            onClick={handleClickDesktop}
          >
            <PlusSign
              color={dropdownDesktop ? '#EAEAEA' : props.plusColor || '#201E1E'}
            />
          </div>
        </div>
        {dropdownDesktop && (
          <DropdownDesktop
            setDropdown={setDropdownDesktop}
            siteFestival={props.siteFestival}
            slideOutBottom={slideOutBottom}
            slideOutTop={slideOutTop}
          />
        )}
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
