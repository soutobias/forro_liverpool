export function MainButton(props: {
  href: any
  content: any
  bg: any
  font: any
  width?: any
}) {
  return (
    <a
      href={props.href}
      className={`flex justify-center bg-${props.bg} no-underline w-[${props.width}]`}
    >
      <p
        className={`text-${props.font} text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5`}
      >
        {props.content}
      </p>
    </a>
  )
}
