"use client";

import { keyable } from "@/components/ClassEvent";
import { fetchApi } from "@/lib/api";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { ArrowUpRight } from 'phosphor-react'
import { ArrowUpRight } from "@/assets/arrow_up_right";
import { LocationMarker } from "@/assets/location_marker";
import styles from "@/components/Bg.module.css";
import { Footer } from "@/components/Footer";
import { GDPR } from "@/components/GDPR";
import { H1 } from "@/components/H1";
import { MainButton } from "@/components/MainButton";
import { Navbar } from "@/components/NavBar";
import { UpButton } from "@/components/UpButton";
import { useLanguage } from "@/lib/language";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function EventDetails() {
  const [selectedEvent, setSelectedEvent] = useState<keyable | null>(null);
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null);
  const [showGDPR, setShowGDPR] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const { language } = useLanguage();

  const [urlFestival, setUrlFestival] = useState<string>("");
  const [position, setPosition] = useState<number>(1);
  const urlEvents = "api/v1/events";

  const searchParams = useSearchParams();

  const paramsId = searchParams.get("id");

  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (siteFestival) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsVisible(entry.isIntersecting);
          });
        },
        { threshold: 0.1 },
      );
      const targetEl = targetRef.current;
      if (targetEl) {
        observer.observe(targetEl);
      }

      // Clean up function
      return () => {
        if (targetEl) {
          observer.unobserve(targetEl);
        }
      };
    }
  }, [siteFestival]);

  useEffect(() => {
    if (language === "en") {
      setUrlFestival("api/v1/site2025_festivals");
      setPosition(0);
    } else {
      setUrlFestival("api/v1/site2025_festival_translations");
      setPosition(1);
    }
  }, [language]);

  useEffect(() => {
    if (urlFestival) {
      fetchApi(urlFestival, setSiteFestival);
    }
  }, [urlFestival]);
  useEffect(() => {
    fetchApi(`${urlEvents}/${paramsId}`, setSelectedEvent);
  }, [selectedEvent, paramsId]);

  useEffect(() => {
    setShowGDPR(false);
    // setShowGDPR(getCookieAuth())
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div
      className={
        showGDPR
          ? `overflow-hidden pointer-events-none ${styles.blackBg}`
          : styles.blackBg
      }
    >
      {siteFestival && (
        <div ref={targetRef}>
          <Navbar plusColor="#EAEAEA" siteFestival={siteFestival} />
        </div>
      )}
      <div className={`w-full z-[59] relative pb-4`}>
        {selectedEvent && (
          <div className="px-4 md:px-[8.75rem] pt-[6.25rem] md:pt-[8rem]">
            <div className="md:flex md:justify-between md:gap-20 w-full">
              <div className="pt-7 pb-0 w-full">
                <div className="pt-0 w-full">
                  {selectedEvent.is_class ? (
                    <H1
                      color="white"
                      text={`${selectedEvent.date[position]} ${selectedEvent.name[position]}`}
                    />
                  ) : (
                    <H1 color="white" text={selectedEvent.name[position]} />
                  )}
                  <div className="lg:flex lg:justify-between lg:gap-20 block">
                    <div className="flex gap-12 justify-between pb-0 pt-7 w-full">
                      <div className="">
                        {!selectedEvent.is_class && (
                          <div className="bg-pink-400 uppercase text-white mb-4 w-max pl-3 pr-3 rounded-2xl text-[1rem] font-changa font-extrabold">
                            {selectedEvent.date[position]}
                          </div>
                        )}
                        <div className="bg-pink-400 uppercase text-white w-max pl-3 pr-3 rounded-2xl text-[1rem] font-changa font-extrabold">
                          {selectedEvent.time[position]}
                        </div>
                      </div>
                      <div>
                        {selectedEvent.location && (
                          <div>
                            {selectedEvent.location.map(
                              (location: any, index: number) => (
                                <div key={index} className="pr-4 pb-4">
                                  <div className="flex text-white">
                                    <div>
                                      <LocationMarker color="white" />
                                    </div>
                                    <div className="pl-1">
                                      <div className="text-white uppercase leading-6 pl-0 font-extrabold text-[1rem] md:text-[1.25rem] font-sans">
                                        <Link
                                          href={location.split(";")[2]}
                                          target="_blank"
                                          className="flex gap-0 justify-start"
                                          title={
                                            language === "en"
                                              ? "Go to location"
                                              : "Ir para localização"
                                          }
                                        >
                                          <p className="p-0 m-o">
                                            {location.split(";")[0]}
                                          </p>
                                          <div className="pt-2">
                                            <ArrowUpRight color="white" />
                                          </div>
                                        </Link>
                                      </div>
                                      <div className="text-white leading-6 pl-0 pt-1 md:pt-7 font-semibold text-[1rem]  md:text-[1.25rem] font-sans">
                                        {location.split(";")[1]}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="lg:flex-grow-0 w-full">
                      {!selectedEvent.is_class && (
                        <>
                          <div className="pt-8">
                            <p className="text-white text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold whitespace-pre-line">
                              {selectedEvent.description[position]}
                            </p>
                            {selectedEvent[
                              position === 0
                                ? "schedule"
                                : "schedule_translation"
                            ].map((schedule: any, index: number) => (
                              <div
                                key={index}
                                className="pt-4 flex justify-between"
                              >
                                <p className="text-white text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold whitespace-pre-line">
                                  {schedule.split(";")[0]}
                                </p>
                                <p className="text-white text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold whitespace-pre-line">
                                  {schedule.split(";")[1]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      {selectedEvent.is_class && (
                        <div className="pt-8 z-[61]">
                          <MainButton
                            href={selectedEvent.schedule[0]}
                            content={
                              language === "en"
                                ? "Download Class Schedule"
                                : "Download da Programação"
                            }
                            bg="white"
                            font="black"
                            rounded="none"
                            newTab="true"
                          />
                        </div>
                      )}
                      <div className="pt-6 z-[61]">
                        {/* <MainButton
                          href="/lff2024/tickets"
                          content={
                            language === "en" ? "Get Tickets" : "Ingressos"
                          }
                          bg="white"
                          font="black"
                          rounded="none"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                {selectedEvent.cover_image[0] && (
                  <div className="pt-8 flex justify-center items-center">
                    <Image
                      src={selectedEvent.cover_image[0]}
                      alt="illustration"
                      className="rounded-xl h-max w-full md:w-[50%] object-cover border-4 border-pink-400"
                      width={1336}
                      height={192}
                    />
                  </div>
                )}
                <Link
                  href="/lff2024#program"
                  className="font-semibold cursor-pointer no-underline mt-12 block lg:-pl-[2rem] md:pt-4 text-[1rem] md:text-[1.5rem] text-white"
                >
                  {language === "en" ? <p>&#60; Back</p> : <p>&#60; Voltar</p>}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer siteFestival={siteFestival} />
      {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
      {!isVisible && <UpButton />}
    </div>
  );
}
