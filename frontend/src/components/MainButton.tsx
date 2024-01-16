export function MainButton(props: {
  href: any
  content: any
  bg: any
  font: any
  width?: any
}) {
  const buttonStyle = {
    width: props.width || 'auto', // Use a largura fornecida ou 'auto' se não for especificada
    // Outros estilos aqui
  }

  return (
    <a
      href={props.href}
      style={buttonStyle}
      className={`flex justify-center bg-${props.bg} no-underline w-[${props.width}] font-changa`}
    >
      <p
        className={`text-${props.font} text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 uppercase font-extrabold w-full p-5`}
      >
        {props.content}
      </p>
    </a>
  )
}
