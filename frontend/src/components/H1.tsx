export function H1(props: { color: string; text: string }) {
  return (
    <h1
      className={`font-changa text-[2rem] md:text-[2.5rem] leading-12 md:leading-10 font-extrabold text-${props.color}`}
    >
      {props.text}
    </h1>
  )
}
