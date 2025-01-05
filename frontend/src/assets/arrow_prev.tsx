export const ArrowPrev = (props: { onClick?: any }) => {
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
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
    </svg>
  );
};
