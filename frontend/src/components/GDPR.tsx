import { addCookieAuth } from '@/lib/handleCookie'
import styles from './Bg.module.css'
import { useLanguage } from '@/lib/language'

export function GDPR(props: { setShowGDPR: (show: boolean) => void }) {
  const { language } = useLanguage()

  return (
    <div
      className={`w-full shadow-custom md:w-[50%] md:p-10 md:flex md:justify-center z-[64] md:bottom-[25%] md:left-[25%] bottom-0 fixed pointer-events-auto opacity-100 ${styles.begeBg}`}
    >
      <div className="pb-12">
        {/* <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl p-2"
            onClick={() => props.setShowGDPR(addCookieAuth())}
          />
        </div> */}
        <div className="pl-8 pt-12 pr-8">
          {language === 'en' ? (
            <p className="pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal">
              We use cookies to provide necessary site functionality and improve
              your experience. By browsing our website, you consent to our use
              of cookies.
            </p>
          ) : (
            <p className="pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal">
              Usamos cookies para fornecer as funcionalidades necessárias do
              site e melhorar sua experiência. Ao navegar no nosso site, você
              concorda com o uso de cookies.
            </p>
          )}
        </div>
        <div className="mx-4 h-max">
          <div
            onClick={() => props.setShowGDPR(addCookieAuth())}
            className={`flex justify-center bg-black no-underline cursor-pointer text-changa`}
          >
            <p
              className={`text-white text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5`}
            >
              {language === 'en' ? 'Accept' : 'Aceitar'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
