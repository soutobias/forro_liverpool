export const WhatsappLogo = (props: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke={props.color}
        stroke-width="4"
      />
      <path
        d="M50 30c-2.5 0-4.5 2-4.5 4.5v20c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-20c0-2.5-2-4.5-4.5-4.5zM45.5 60c-1.5 0-2.5 1-2.5 2.5S44 65 45.5 65H54.5c1.5 0 2.5-1 2.5-2.5s-1-2.5-2.5-2.5H45.5z"
        fill={props.color}
      />
      <rect width="100%" height="100%" fill="none" />
    </svg>
  );
};
