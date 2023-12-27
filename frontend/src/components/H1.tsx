export function H1(props: { color: string; text: string }) {
  return (
    <h1
      className={`font-changa pl-4 pr-4 text-[2rem] leading-10 font-extrabold text-center text-${props.color}`}
    >
      {props.text}
    </h1>
  )
}
