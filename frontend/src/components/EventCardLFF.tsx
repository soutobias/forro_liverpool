import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { keyable } from "./ClassEvent";
import Link from "next/link";
import styles from "./Bg.module.css";
import { LocationMarker } from "@/assets/location_marker";
import { useLanguage } from "@/lib/language";
import { MainButton } from "./MainButton";
import { H1 } from "./H1";

export function EventCardLFF(props: {
  size?: string;
  event: keyable;
  year: number;
  setShowEvent?: Dispatch<SetStateAction<keyable>>;
  eventType?: string;
}) {
  const { event, year } = props;

  const { language } = useLanguage();
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    if (language === "en") {
      setPosition(0);
    } else {
      setPosition(1);
    }
  }, [language]);

  const generateEventUrl = () => {
    return `/lff${year}/events?id=${event.id}`;
  };
  console.log("event", event);
  return (
    <div
      className={`mb-2 pb-2 font-changa w-full h-full rounded-2xl xl:w-[23rem] xl:h-[16rem] lg:w-[20rem] lg:h-[18rem]  aspect-343/223 border-black border-4 lg:relative ${styles.begeBg}`}
    >
      <div className="pl-5 pt-4 pr-5 font-changa w-full">
        <h2 className="font-changa text-black text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold">
          {event.name[position]}
        </h2>
        {/* <div className="text-black text-[1.5rem] md:text-[2rem] font-extrabold leading-8 md:leading-9 ont-changa">
          {event.name[position]}
        </div> */}
        <div className="grid grid-cols-2 pt-6 gap-2 justify-start font-changa">
          <div>
            <div className="bg-pink-600 uppercase text-white align-middle items-center text-[1rem] md:text-[1.25rem] font-extrabold pl-3 pr-3 py-0 rounded-2xl leading-6 md:leading-7 w-max">
              {event.time[position]}
            </div>
          </div>
          <div>
            <div className="flex text-black">
              <div>
                <LocationMarker />
              </div>
              <div className="text-black uppercase pl-0 ml-1 font-extrabold pr-2 md:pr-0 text-[1rem] font-changa leading-4 md:leading-5 md:text-[1.25rem]">
                {event.location.length === 1
                  ? `${event.location[0].split(";")[0]}`
                  : `${event.location[0].split(";")[0]} & ${
                      event.location[1].split(";")[0]
                    }`}
              </div>
            </div>
          </div>
        </div>
        {event.is_class === true ? (
          <div
            className="flex lg:absolute bottom-2 justify-center lg:pr-10 w-full pt-4 lg:pt-0"
            id="last-button"
          >
            <MainButton
              href={generateEventUrl()}
              content={
                language === "en"
                  ? "Download Class Schedule"
                  : "Download programação"
              }
              bg="pink-600"
              font="white"
              width="100%"
            />
          </div>
        ) : (
          <div
            className="flex lg:absolute bottom-2 justify-center lg:pr-10 w-full  pt-4 lg:pt-0"
            id="last-button"
          >
            <MainButton
              href={generateEventUrl()}
              content={
                language === "en" ? "See event details" : "Detalhes do evento"
              }
              bg="pink-600"
              font="white"
              width="100%"
            />
          </div>
        )}
      </div>
    </div>
  );
}
