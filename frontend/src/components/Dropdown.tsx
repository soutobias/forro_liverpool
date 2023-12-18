import { ForroLinks } from './ForroLinks'

// .dropdown_link {
//   display: block;
//   height: 100%;
//   width: 100%;
//   text-decoration: none;
//   color: #fff;
//   padding: 16px;
// }

export function Dropdown(props: { setDropdown: (dropDown: boolean) => void }) {
  return (
    <div className="absolute top-[7rem] bg-gray-100 w-full z-20">
      <ForroLinks setDropdown={props.setDropdown} />
    </div>
  )
}
