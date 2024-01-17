import Link from 'next/link'
import { ForroLinks } from './ForroLinks'
import { InstagramLogo } from '@/assets/instagram_logo'
import { FacebookLogo } from '@/assets/facebook_logo'
import { useLanguage } from '@/lib/language'

export function Footer(props: { siteFestival: any }) {
  const { language } = useLanguage()

  return (
    <div className={`w-full z-20 pb-6 bg-yellow-500`}>
      <ForroLinks siteFestival={props.siteFestival} />
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
        {language === 'en' ? (
          <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-0">
            Website designed and built with love by{' '}
            <a
              href="https://knockout.studio"
              className="underline text-current"
            >
              Knockout! Studio
            </a>
            , and Tobias and Vanessa.
          </p>
        ) : (
          <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-0">
            Site projetado e construído com amor por{' '}
            <a
              href="https://knockout.studio"
              className="underline text-current"
              target="_blank"
              rel="noreferrer"
            >
              Knockout! Studio
            </a>
            , e Tobias e Vanessa.
          </p>
        )}
      </div>
    </div>
  )
}
