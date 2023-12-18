'use client'

// import { SignUpButton } from './SignUpButton'
import { useState } from 'react'
import Link from 'next/link'
import { Dropdown } from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import forroLogo from '../assets/fl_logo.png'

export function Navbar() {
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setDropdown(!dropdown)
  const closeMobileMenu = () => setDropdown(false)

  return (
    <>
      <nav className="bg-white h-12 flex justify-between align-middle text-xl w-full flex-shrink-0">
        {!dropdown ? (
          <>
            <Link
              href="/"
              className="font-semibold text-3xl justify-self-start cursor-pointer no-underline p-3 pt-2"
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
            <div
              className="sm:hidden justify-self-end align-middle h-8 p-3 pr-8"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </div>
          </>
        ) : (
          <div
            className="sm:hidden flex justify-between align-middle h-full w-full p-3 pr-8 bg-gray-100"
            onClick={handleClick}
          >
            <div className="text-[1rem] font-bold leading-6 uppercase">
              PT | EN
            </div>
            <FontAwesomeIcon icon={faXmark} className="text-2xl" />
          </div>
        )}
        {dropdown && <Dropdown setDropdown={setDropdown} />}
        <ul className=" gap-5 hidden sm:flex text-center justify-end mr-8">
          <li className="flex align-middle h-20">
            <Link
              href="/lff2024"
              className="no-underline pl-2 pr-2 pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              Liverpool Forró Festival 2024
            </Link>
          </li>
          <li className="flex align-middle h-20">
            <Link
              href="/#classes-events"
              className="no-underline pl-2 pr-2 pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              Classes & Events
            </Link>
          </li>
          <li className="flex align-middle h-20">
            <Link
              href="/#community"
              className="no-underline pl-2 pr-2 pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              Our Community
            </Link>
          </li>
          <li className="flex align-middle h-20">
            <Link
              href="/#faq"
              className="no-underline pl-2 pr-2 pt-4 pb-4 hover:opacity-60 transition-opacity"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
        </ul>
        {/* <SignUpButton /> */}
      </nav>
    </>
  )
}
