import { useEffect, useRef, useState } from "react";
import { ForroLinks } from "./ForroLinks";

// .dropdown_link {
//   display: block;
//   height: 100%;
//   width: 100%;
//   text-decoration: none;
//   color: #fff;
//   padding: 16px;
// }

export function Dropdown(props: {
  setDropdown: (dropDown: boolean) => void;
  siteFestival: any;
}) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState<string>("max-content");

  useEffect(() => {
    if (dropdownRef.current) {
      const contentHeight = dropdownRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Compare heights and set the appropriate value
      setDropdownHeight(
        contentHeight > viewportHeight ? "100vh" : "max-content",
      );
    }
  }, []);
  return (
    <div
      ref={dropdownRef}
      className={`absolute bg-yellow-500 w-full z-20 pb-20 border-0 border-opacity-0`}
      style={{
        height: dropdownHeight,
      }}
    >
      <ForroLinks
        setDropdown={props.setDropdown}
        siteFestival={props.siteFestival}
      />
    </div>
  );
}
