import Link from 'next/link'
import { ForroLinks } from './ForroLinks'
import styles from './Bg.module.css'
import { InstagramLogo } from '@/assets/instagram_logo'
import { FacebookLogo } from '@/assets/facebook_logo'

export function Footer(props: {
  siteFestival: any
  language: any
  setLanguage: any
}) {
  return (
    <div className={`w-full z-20 pb-6 ${styles.communityBg}`}>
      <ForroLinks
        siteFestival={props.siteFestival}
        language={props.language}
        setLanguage={props.setLanguage}
      />
      <div className="flex justify-center gap-8 pt-10 pb-8">
        <Link
          href="https://www.instagram.com/forro.liverpool/"
          className="text-1xl no-underline h-full cursor-pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          href="https://www.facebook.com/forroliverpool/"
          className="text-1xl no-underline h-full cursor-pointer"
        >
          <FacebookLogo />
        </Link>
      </div>
      <div className="flex justify-center">
        <p className="font-sans text-[1rem] font-semibold leading-6 pb-8 justify-center">
          hello@forroliverpool.co.uk
        </p>
      </div>

      <div>
        <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-4">
          © 2024 Forró Liverpool
        </p>

        <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-0">
          Website designed and built with love by{' '}
          <a href="https://knockout.studio" className="underline text-current">
            Knockout! Studio
          </a>{' '}
          and Tobias and Vanessa.
        </p>
      </div>
    </div>
  )
}
