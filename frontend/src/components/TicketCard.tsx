import { MainButton } from "./MainButton";

export function TicketCard(props: {
  isDisabled?: boolean;
  isSoldOut?: string;
  color: string;
  passType: string;
  lote: string;
  price: string;
  classes: string;
  parties: string;
}) {
  const cardStyle: React.CSSProperties = {
    opacity: props.isDisabled ? 0.6 : 1,
    pointerEvents: props.isDisabled ? "none" : "auto",
  };

  // .sold-out {
  //   position: absolute;
  //   width: 100%;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%) rotate(-45deg);
  //   transform-origin: center;
  //   background-color: red; /* Background of the "Sold Out" text */
  //   color: white; /* Color of the "Sold Out" text */
  //   text-align: center;
  //   font-size: 20px; /* Example font size */

  return (
    <div
      style={cardStyle}
      className={`relative rounded-lg p-4 pb-6 w-full md:w-auto md:aspect-3/2 h-auto md:h-[15rem] lg:h-[16rem] xl:h-[17rem] ${props.color} md:mt-0 mt-4`}
    >
      {/* {props.isSoldOut && (
        <div className="absolute rounded-lg w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rotate-[-30deg] bg-red-500 text-white text-center text-lg">
          {props.isSoldOut}
        </div>
      )} */}
      <div className="flex justify-between items-center pb-10">
        <div className="text-white flex">
          <div className="text-[1.25rem] md:text-[1.5rem] font-extrabold leading-6 md:leading-8 pe-4">
            {props.passType}
          </div>
          <div className=" text-white text-[1rem] font-normal leading-6 font-sans">
            {props.lote}
          </div>
        </div>
        <div className="bg-white uppercase text-black w-max pl-4 pr-4 rounded-2xl text-[1rem] font-extrabold">
          {props.price}
        </div>
      </div>
      <div className="text-white text-[1rem] font-normal leading-6 font-sans">
        {props.classes}
      </div>
      <div className="pb-10 text-white text-[1rem] font-normal leading-6 font-sans">
        {props.parties}
      </div>
      {!props.classes && (
        <div className="pb-6 text-white text-[1rem] font-normal leading-6 font-sans"></div>
      )}
      <div>
        {props.isSoldOut && (
          <MainButton
            href="/lff2025/tickets"
            content={props.isSoldOut}
            bg="white"
            font="black"
          />
        )}
      </div>
    </div>
  );
}
