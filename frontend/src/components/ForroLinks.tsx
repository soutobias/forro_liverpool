import Link from 'next/link'
import Image from 'next/image'
import forroLogo from '../assets/fl_logo.png'

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
    <ul className="pt-12 pb-32 text-center pl-24 pr-24 font-semibold">
      <li className="pt-4">
        <Link
          href="/"
          className="text-2xl no-underline h-full w-full cursor-pointer flex justify-center"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          <Image
            src={forroLogo}
            alt="illustration"
            className="p-2 overflow-hidden"
            width={100}
            height={100}
          />
        </Link>
      </li>
      <li className="pt-4 pb-2">
        <Link
          href="/#classes-events"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Classes & Events
        </Link>
      </li>
      <li className="pt-2 pb-2">
        <Link
          href="/#community"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Our Community
        </Link>
      </li>
      <li className="pt-2 pb-2 ">
        <Link
          href="/#faq"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          FAQ
        </Link>
      </li>
      <li className="pt-2">
        <Link
          href="/lff2024"
          className="text-2xl no-underline h-full w-full cursor-pointer flex justify-center"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          <Image
            src={forroLogo}
            alt="illustration"
            className="p-2 rounded-2xl overflow-hidden"
            width={100}
            height={100}
          />
        </Link>
      </li>
      <li className="pt-2 pb-2 bg-gray-50">
        <Link
          href="/lff2024"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Tickets
        </Link>
      </li>
      <li className="pt-2 pb-2 ">
        <Link
          href="/lff2024#teachers"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Teachers & Musicians
        </Link>
      </li>
      <li className="pt-2 pb-2 ">
        <Link
          href="/lff2024#program"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Program
        </Link>
      </li>
      <li className="pt-2 pb-2 ">
        <Link
          href="/lff2024#liverpool"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          Liverpool
        </Link>
      </li>
      <li className="pt-2 pb-2 ">
        <Link
          href="/lff2024#faq"
          className="text-1xl no-underline h-full w-full cursor-pointer"
          onClick={() => props.setDropdown && props.setDropdown(false)}
        >
          FAQ
        </Link>
      </li>
    </ul>
  )
}
