import forroLogo from '../assets/logo.png'
import Image from 'next/image'

// interface SidebarProps {
//   title: string
// }

export function Sidebar() {
  function SidebarItem(props: { title: string }) {
    return (
      <div className="pt-5">
        <a className="cursor-pointer font-alt text-7xl text-white hover:opacity-40">
          {props.title}
        </a>
      </div>
    )
  }

  return (
    <div className="ml-10">
      <div className="mb-10 mt-10">
        <Image
          className=""
          src={forroLogo}
          alt="Forro Logo"
          width={80}
          height={80}
        />
      </div>
      <div>
        <SidebarItem title={'About'} />
        <SidebarItem title="Events" />
        <SidebarItem title="News" />
      </div>
    </div>
  )
}
