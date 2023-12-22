import Link from 'next/link'
import Image from 'next/image'
import forroLogo from '../assets/FL_logo_black.png'

// .dropdown_link {
//   display: block;
//   height: 100%;
//   width: 100%;
//   text-decoration: none;
//   color: #fff;
//   padding: 16px;
// }

export function ForroLinks(props: {
  setDropdown?: (dropDown: boolean) => void
}) {
  return (
    <div className="pt-12 text-center font-extrabold font-changa text-[1.25rem]">
      <div className="pt-0">
        <Link
          href="/"
          className="text-2xl no-underline h-full w-full cursor-pointer flex justify-center"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          <Image
            src={forroLogo}
            alt="illustration"
            className="overflow-hidden"
            width={179}
            height={94}
          />
        </Link>
      </div>
      <div className="pt-5">
        <Link
          href="/#classes-events"
          className="text-1xl no-underline cursor-pointer p-3"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Classes & Events
        </Link>
      </div>
      <div className="pt-5">
        <Link
          href="/#community"
          className="text-1xl no-underline h-full w-full cursor-pointer p-3"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Our Community
        </Link>
      </div>
      <div className="pt-5">
        <Link
          href="/#faq"
          className="text-1xl no-underline w-full cursor-pointer p-3"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          FAQ
        </Link>
      </div>
      <div className="pt-9 text-[1.5rem]">
        <Link
          href="/lff2024"
          className="text-1xl no-underline h-full w-full cursor-pointer pt-3 pb-3"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Liverpool Forró Festival
        </Link>
      </div>
      <div className="pt-6">
        <Link
          href="/lff2024"
          className="text-1xl no-underline h-full w-full cursor-pointer bg-white rounded-xl uppercase px-[8.5rem] py-3 text-[1rem]"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Tickets
        </Link>
      </div>
      <div className="pt-6">
        <Link
          href="/lff2024#teachers"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Teachers & Musicians
        </Link>
      </div>
      <div className="pt-5 ">
        <Link
          href="/lff2024#program"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Program
        </Link>
      </div>
      <div className="pt-5">
        <Link
          href="/lff2024#liverpool"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Liverpool
        </Link>
      </div>
      <div className="pt-5">
        <Link
          href="/lff2024#faq"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Festival FAQ
        </Link>
      </div>
    </div>
  )
}
