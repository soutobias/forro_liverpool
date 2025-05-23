import { fetchApi } from "@/lib/api";
import { useLanguage } from "@/lib/language";
import { useEffect, useState } from "react";
import styles from "./Bg.module.css";
import { keyable } from "./ClassEvent";
import { EventCardLFF } from "./EventCardLFF";
import { H1 } from "./H1";

// interface ClassEventsLFFProps {
//   setShowEvent?: Dispatch<SetStateAction<keyable>>
// }

export function ClassEventsLFF2025(props: { year: number }) {
  const { year } = props;
  const [events, setEvents] = useState<keyable[]>([]);
  const { language } = useLanguage();
  const [eventsEmpty, setEventsEmpty] = useState<boolean>(true);

  const url = `api/v1/events?is_festival=${year}`;

  useEffect(() => {
    fetchApi(url, setEvents);
  }, [url]);

  useEffect(() => {
    if (events.length > 0) {
      setEventsEmpty(false);
    }
  }, [events]);

  return (
    <div
      id="program"
      className={`relative pb-[13rem] md:pb-[25rem] font-changa ${styles.pinkBgGrad}`}
    >
      <div
        className={`absolute -top-[10rem] md:-top-[11rem] lg:-top-[12rem] xl:-top-[14rem]  2xl:-top-[15rem] w-full min-h-[20rem] md:min-h-[25rem] lg:min-h-[30rem] xl:min-h-[35rem] 2xl:min-h-[40rem] ${styles.circlesBg2}`}
      />
      <div className="px-4 md:px-[8.25rem]">
        <div className="pt-[10rem] md:pt-[25rem] pb-12 text-center">
          <H1
            color="white"
            text={language === "en" ? "3 Days of Dance!" : "3 Dias de Dança!"}
          />
        </div>
        <div className="flex justify-center">
          {eventsEmpty ? (
            <div className="block lg:flex lg:justify-center lg:gap-3 xl:gap-4">
              <div className="pl-2 pt-12 pb-8 md:pl-0 md:pt-0">
                <div className="block justify-items-center">
                  <div
                    className={`mb-2 pb-2 font-changa w-full h-full rounded-2xl xl:w-[23rem] xl:h-[16rem] lg:w-[20rem] lg:h-[18rem]  aspect-343/223 border-black border-4 lg:relative ${styles.begeBg}`}
                  >
                    <div className="w-full h-full flex justify-center align-middle items-center aspect-2/1">
                      <div className="text-black text-[1.5rem] md:text-[2rem] text-center font-extrabold leading-8 md:leading-10 px-10">
                        {language === "en"
                          ? "Check back soon for the complete festival schedule!"
                          : "Volte em breve para conferir a programação completa do festival"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="block lg:flex lg:justify-center lg:gap-3 xl:gap-4">
              <div className="pl-2 pt-12 pb-8 md:pl-0 md:pt-0">
                <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-0 pb-8">
                  {language === "en"
                    ? "Friday, 16th May"
                    : "Sexta-feira, 16 de Maio"}
                </h2>
                <div className="block justify-items-center">
                  {events
                    .filter((event: any) => event.date[0] === "Friday")
                    .map((event: any) => (
                      <EventCardLFF key={event.id} event={event} year={year} />
                    ))}
                </div>
              </div>
              <div className="pl-2 pt-12 pb-8 md:pl-0 md:pt-0">
                <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-0 pb-8">
                  {language === "en"
                    ? "Saturday, 17th May"
                    : "Sábado, 17 de Maio"}
                </h2>
                <div className="block justify-items-center">
                  {events
                    .filter((event: any) => event.date[0] === "Saturday")
                    .map((event: any) => (
                      <EventCardLFF key={event.id} event={event} year={year} />
                    ))}
                </div>
              </div>
              <div className="pl-2 pt-12 pb-8 md:pl-0 md:pt-0">
                <h2 className="text-center font-changa text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pl-2 pt-0 pb-8">
                  {language === "en"
                    ? "Sunday, 18th May"
                    : "Domingo, 18 de Maio"}
                </h2>
                <div className="block justify-items-center">
                  {events
                    .filter((event: any) => event.date[0] === "Sunday")
                    .map((event: any) => (
                      <EventCardLFF key={event.id} event={event} year={year} />
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
