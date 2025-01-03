import styles from "./Bg.module.css";
// import { LFFLogo } from '@/assets/lff_logo'
import Image from "next/image";
import LFFLogo from "../assets/LFF_Logo.png";
import CrossWalk from "../assets/Images-LFF-Crosswalk.png";
import CrossWalk1 from "../assets/Images-LFF-Crosswalk-2000px.png";
import { MainButton } from "./MainButton";
import { Scroll } from "@/assets/scroll";
import { useLanguage } from "@/lib/language";
// import { CursorFollower } from './CursorFollower'
import { CursorTrail } from "./CursorTrail";
import { useEffect, useState } from "react";
import { CursorFollower } from "./CursorFollower";

export function HeroLFF2025(props: { siteFestival: any; year: string }) {
  const { language } = useLanguage();
  const keyForRerender = language;
  const [trail, setTrail] = useState<any>([]);
  const [isCursorInDiv, setIsCursorInDiv] = useState(false);

  const handleMouseMove = (e: any) => {
    setTrail((currentTrail: any) => [
      ...currentTrail,
      { x: e.pageX, y: e.pageY - 40, key: Date.now() * Math.random() },
    ]);
  };

  const handleMouseLeave = () => {
    setTrail([]);
    setIsCursorInDiv(false);
  };

  const handleMouseEnter = () => {
    setTrail([]);
    setIsCursorInDiv(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrail((currentTrail: any) => {
        if (currentTrail.length > 0) {
          return currentTrail.slice(1);
        }
        return currentTrail;
      });
    }, 20); // Adjust for trail duration

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={`w-full z-[59] font-changa relative ${styles.blackBgFull}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <CursorTrail trail={trail} />
      <CursorFollower isVisible={isCursorInDiv} />
      <div className="pt-[6.75rem]">
        <div>
          <div className="flex justify-center">
            <div className="hidden md:flex md:justify-around md:items-center uppercase w-full 2xl:w-[80%]">
              {props.siteFestival && (
                <div className="block">
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].data.split(",")[0].trim()}
                  </p>
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].data.split(",")[1].trim()}
                  </p>
                </div>
              )}
              <Image
                src={
                  props.year === "2025"
                    ? props.siteFestival
                      ? props.siteFestival[0].image[0]
                      : ""
                    : LFFLogo
                }
                alt="illustration"
                // className="w-full !h-auto"
                className="w-auto sm:h-[20rem] md:h-[25rem]  lg:h-[30rem] xl:h-[35rem] 2xl:h-[38rem]"
                width={1336}
                height={1000}
              />
              {props.siteFestival && (
                <div className="block">
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].local.split(",")[0].trim()}
                  </p>
                  <p className="text-center text-white text-[2rem] leading-10 xl:text-[2.5rem] xl:leading-[3rem] font-extrabold">
                    {props.siteFestival[0].local.split(",")[1].trim()}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center pl-4 pr-4">
            <Image
              src={
                props.year === "2025"
                  ? props.siteFestival
                    ? props.siteFestival[0].image[0]
                    : ""
                  : LFFLogo
              }
              alt="illustration"
              // className="h-[17rem] w-auto md:hidden"
              width={1336}
              height={614}
            />
          </div>
          {props.year === "2024" && (
            <div className="pt-3 flex justify-center">
              <Image
                src={CrossWalk}
                alt="illustration"
                className="overflow-hidden h-[5.25rem] w-full object-cover md:hidden"
                width={1336}
                height={614}
              />
            </div>
          )}
          {props.year === "2024" && (
            <div className="pt-1 flex justify-center w-full overflow-hidden">
              <Image
                src={CrossWalk1}
                alt="illustration"
                className="xl:h-[9rem] md:h-[7rem] w-[130vw] max-w-[130vw] md:block hidden"
                width={1336}
                height={614}
              />
            </div>
          )}
          <div className="-mt-[5rem] md:flex md:justify-center hidden">
            {/* <Scroll /> */}
            <div className="justify-center">
              <div className="p-0 mt-0 animate-fadeInOut-100">
                <Scroll />
              </div>
              <div className="p-0 -mt-5 animate-fadeInOut-200">
                <Scroll />
              </div>
              <div className="p-0 -mt-5 animate-fadeInOut-300">
                <Scroll />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-4">
            <p className="text-center uppercase text-white pt-8 pb-0 pl-4 pr-4 text-[1.5rem] leading-5  font-extrabold">
              {props.siteFestival && props.siteFestival[0].data}
            </p>
            <p className="text-center text-white uppercase font-changa pt-2 pb-8 pl-3 pr-3 text-[1rem] leading-5 font-extrabold">
              {props.siteFestival && props.siteFestival[0].local}
            </p>
            <div className="md:flex md:justify-center hidden">
              <MainButton
                key={keyForRerender}
                href="/lff2025/tickets"
                content={language === "en" ? "Tickets" : "Ingressos"}
                bg="white"
                font="black"
                width="457px"
              />
            </div>
            <div className="md:hidden">
              <MainButton
                key={keyForRerender}
                href="/lff2025/tickets"
                content={language === "en" ? "Tickets" : "Ingressos"}
                bg="white"
                font="black"
              />
            </div>
            <div className="pt-8 flex justify-center">
              <div className="justify-center">
                <div className="p-0 mt-0 animate-fadeInOut-100">
                  <Scroll />
                </div>
                <div className="p-0 -mt-5 animate-fadeInOut-200">
                  <Scroll />
                </div>
                <div className="p-0 -mt-5 animate-fadeInOut-300">
                  <Scroll />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center leading-5">
          <div className="pt-16">
            <div className="p-0 mt-0 animate-fadeInOut-100">
              <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
            </div>
            <div className="p-0 -mt-2 animate-fadeInOut-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-2xl" />
            </div>
            <div className="p-0 -mt-2 animate-fadeInOut-300">
              <FontAwesomeIcon icon={faChevronDown} className="text-2xl p-0" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
