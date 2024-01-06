import Link from 'next/link'
import Image from 'next/image'
import forroLogo from '../assets/FL_logo_black.png'
import LFFforroLogo from '../assets/LFF_Black.png'

export function ForroLinks(props: {
  setDropdown?: (dropDown: boolean) => void
  siteFestival: any
}) {
  return (
    <div className="pt-12 text-center font-extrabold font-changa text-[1.25rem]">
      <div className="pt-0">
        <Link
          href="/"
          className="text-2xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          <Image
            src={forroLogo}
            alt="illustration"
            className="overflow-hidden  pl-4"
            width={179}
            height={94}
          />
        </Link>
      </div>
      {props.siteFestival && (
        <>
          <div className="pt-6">
            <Link
              href="/#classes-events"
              className="text-1xl no-underline cursor-pointer p-3"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival && props.siteFestival[0].navbar[1]}
            </Link>
          </div>
          <div className="pt-5">
            <Link
              href="/#community"
              className="text-1xl no-underline h-full w-full cursor-pointer p-3"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival[0] && props.siteFestival[0].navbar[2]}
            </Link>
          </div>
          {/* <div className="pt-5">
            <Link
              href="/#faq"
              className="text-1xl no-underline w-full cursor-pointer p-3"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival[0] && props.siteFestival[0].navbar[3]}
            </Link>
          </div> */}
          <div className="pt-[3.5rem]">
            <Link
              href="/lff2024"
              className="text-2xl no-underline cursor-pointer"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              <Image
                src={LFFforroLogo}
                alt="illustration"
                className="overflow-hidden pl-4"
                width={179}
                height={94}
              />
            </Link>
          </div>
          <div className="pl-4 pr-4 pt-6 z-[61]">
            <div
              className={`flex justify-center bg-white no-underline rounded-lg`}
            >
              <p
                className={`text-black text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-4`}
              >
                TICKETS
              </p>
            </div>
          </div>
          {/* <div className="pt-6">
            <Link
              href="/lff2024"
              className="text-1xl no-underline h-full w-full cursor-pointer bg-white rounded-xl uppercase px-[8.5rem] py-3 text-[1rem]"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival[0] && props.siteFestival[0].navbar[4]}
            </Link>
          </div> */}
          <div className="pt-6">
            <Link
              href="/lff2024#teachers"
              className="text-1xl no-underline h-full w-full cursor-pointer"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival[0] && props.siteFestival[0].navbar[5]}
            </Link>
          </div>
          <div className="pt-5 ">
            <Link
              href="/lff2024#program"
              className="text-1xl no-underline h-full w-full cursor-pointer"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival[0] && props.siteFestival[0].navbar[6]}
            </Link>
          </div>
          {/* <div className="pt-5">
            <Link
              href="/lff2024#liverpool"
              className="text-1xl no-underline h-full w-full cursor-pointer"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              {props.siteFestival[0] && props.siteFestival[0].navbar[2]}
            </Link>
          </div> */}
          {/* <div className="pt-5">
            <Link
              href="/lff2024#faq"
              className="text-1xl no-underline h-full w-full cursor-pointer"
              onClick={() => props.setDropdown && props.setDropdown(false)}
            >
              Festival FAQ
            </Link>
          </div> */}
        </>
      )}
    </div>
  )
}
