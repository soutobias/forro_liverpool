export const ArrowNext = (props: { onClick?: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
      className="yarl__icon"
      onClick={props.onClick ? props.onClick : () => {}}
    >
      <g fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
    </svg>
  );
};
