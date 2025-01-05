export function MainButton(props: {
  href: any;
  content: any;
  bg: any;
  font: any;
  width?: any;
  rounded?: any;
  newTab?: any;
  onClick?: any;
}) {
  return (
    <a
      href={props.href}
      onClick={props.onClick ? props.onClick : () => {}}
      className={`flex justify-center bg-${props.bg} no-underline w-[${
        props.width
      }] font-changa rounded-${props.rounded || "xl"}`}
      target={props.newTab ? "_blank" : ""}
      rel="noreferrer"
    >
      <p
        className={`text-${props.font} text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 uppercase font-extrabold w-full p-5`}
      >
        {props.content}
      </p>
    </a>
  );
}
