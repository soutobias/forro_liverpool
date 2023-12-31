import { ForroLinks } from './ForroLinks'

// .dropdown_link {
//   display: block;
//   height: 100%;
//   width: 100%;
//   text-decoration: none;
//   color: #fff;
//   padding: 16px;
// }

export function Dropdown(props: {
  setDropdown: (dropDown: boolean) => void
  siteFestival: any
}) {
  return (
    <div className="absolute bg-yellow-500 w-full z-20 pb-20">
      <ForroLinks
        setDropdown={props.setDropdown}
        siteFestival={props.siteFestival}
      />
    </div>
  )
}
