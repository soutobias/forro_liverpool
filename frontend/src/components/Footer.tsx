import Link from 'next/link'
import { ForroLinks } from './ForroLinks'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

export function Footer() {
  return (
    <div className="bg-gray-100 w-full z-20">
      <ForroLinks />
      <div className="flex justify-center gap-3 pb-5">
        <Link
          href="https://www.instagram.com/forro.liverpool/"
          className="text-1xl no-underline h-full cursor-pointer"
        >
          <InstagramLogo size={40} />
        </Link>
        <Link
          href="https://www.facebook.com/forroliverpool/"
          className="text-1xl no-underline h-full cursor-pointer"
        >
          <FacebookLogo size={40} />
        </Link>
      </div>
      <div>
        <p className="justify-center text-center text-black text-[0.875rem] leading-4 font-sans font-normal pb-0">
          Site design by{' '}
          <a href="https://knockout.studio" className="underline text-current">
            Knockout! Studio
          </a>
          .
        </p>
        <p className="justify-center text-center text-black text-[0.875rem] leading-4 font-sans font-normal pb-3">
          Coding by soutobias
        </p>
      </div>
    </div>
  )
}
