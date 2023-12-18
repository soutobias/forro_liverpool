import { addToken } from '@/lib/handleCookie'

export function GDPR(props: { setShowGDPR: (show: boolean) => void }) {
  return (
    <div className="bg-gray-100 w-full z-20 bottom-0 fixed pointer-events-auto">
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
        <div
          className="no-underline bg-white text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4"
          onClick={() => props.setShowGDPR(addToken())}
        >
          Accept
        </div>
        {/* <div
          className="no-underline bg-white text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4"
          onClick={() => props.setShowGDPR(addToken())}
        >
          Reject
        </div> */}
      </div>
    </div>
  )
}
