import { addToken } from '@/lib/handleCookie'
import { MainButton } from './MainButton'
import styles from './Bg.module.css'

export function GDPR(props: { setShowGDPR: (show: boolean) => void }) {
  return (
    <div
      className={`w-full z-[64] bottom-0 fixed pointer-events-auto opacity-100 ${styles.begeBg}`}
    >
      <div className="pb-12">
        {/* <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-2xl p-2"
            onClick={() => props.setShowGDPR(addToken())}
          />
        </div> */}
        <div className="pl-8 pt-12 pr-8">
          <p className="pt-0 pb-7 text-black text-[1rem] leading-5 font-sans font-normal">
            We use cookies to provide necessary site functionality and improve
            your experience. By browsing our website, you consent to our use of
            cookies.
          </p>
        </div>
        <div className="mx-4 h-max">
          <div
            onClick={() => props.setShowGDPR(addToken())}
            className={`flex justify-center bg-black no-underline`}
          >
            <p
              className={`text-white text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5`}
            >
              Accept
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
