"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./NavBar.module.css";
import { useLanguage } from "@/lib/language";
import { MainButton } from "./MainButton";
import { FLLogoForroLinks } from "@/assets/fl_logo_forro_links";
import { LFFLogoForroLinks } from "@/assets/lff_logo_forro_links";
export function ForroLinks(props: {
  setDropdown?: (dropDown: boolean) => void;
  siteFestival: any;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (language === "pt") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [language]);

  function scrollToSection(e: any) {
    props.setDropdown && props.setDropdown(false);
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      if (href.split("#")[0] === window.location.pathname) {
        e.preventDefault();
        const element = document.querySelector(`#${href.split("#")[1]}`);
        const offsetTop =
          element instanceof HTMLElement ? element.offsetTop : 0;

        window.scroll({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  }
  const LanguageToogle = useMemo(() => {
    function handleChangeLanguage() {
      if (language === "en") {
        setLanguage("pt");
      } else {
        setLanguage("en");
      }
    }
    return (
      <div className="text-[1rem] font-extrabold leading-6 uppercase pt-3">
        <label className={`${styles.switch} relative`}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChangeLanguage}
          />
          <span
            className={`${styles.slider} ${styles.slider_animation}`}
          ></span>
          <div className="absolute z-[60] flex gap-8 -mt-[0.75rem] text-[1rem] pl-3 text-gray-200 font-changa">
            <div className={language === "en" ? "text-black" : "text-white"}>
              EN
            </div>
            <div className={language === "pt" ? "text-black" : "text-white"}>
              PT
            </div>
          </div>
        </label>
      </div>
    );
  }, [language, isChecked, setLanguage]);

  return (
    <div className="pt-12 text-center font-extrabold font-changa text-[1.25rem] text-black md:text-[1.5rem] leading-6 md:leading-8 px-4 md:px-[6rem] xl:px-[8.5rem]">
      {props.siteFestival && props.siteFestival.length > 0 && (
        <div className="md:flex md:justify-between">
          <div>
            <div className="pt-0 flex md:justify-start">
              <Link
                href="/"
                className="text-2xl no-underline h-full w-full cursor-pointer"
                onClick={scrollToSection}
              >
                <FLLogoForroLinks width="179" height="94" />
              </Link>
            </div>
            <div className="pt-6 flex md:justify-start justify-center">
              <Link
                href="/#classes-events"
                className="no-underline cursor-pointer p-3 md:pl-0  sm:h-full sm:w-full md:h-max md:w-max"
                onClick={scrollToSection}
              >
                {props.siteFestival && props.siteFestival[0].navbar[1]}
              </Link>
            </div>
            <div className="pt-5 flex md:justify-start justify-center">
              <Link
                href="/#community"
                className="no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-3 md:pl-0"
                onClick={scrollToSection}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[2]}
              </Link>
            </div>
          </div>
          <div>
            <div className="pt-[3.5rem] md:pt-0">
              <Link
                href="/lff2025"
                className="text-2xl no-underline cursor-pointer"
                onClick={scrollToSection}
              >
                <LFFLogoForroLinks width="179" height="94" color="#201E1E" />
              </Link>
            </div>

            <div className="pt-6 z-[61] flex md:justify-start justify-center">
              <div className="md:pl-0 no-underline w-full">
                <MainButton
                  href="/lff2025/tickets"
                  content={language === "en" ? "Get Tickets" : "Ingressos"}
                  bg="white"
                  font="black"
                  width="100%"
                />
              </div>
            </div>
            <div className="pt-6 flex md:justify-start justify-center">
              <Link
                href="/lff2025#teachers"
                className="no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-2 md:pl-0"
                onClick={scrollToSection}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[5]}
              </Link>
            </div>
            <div className="pt-5 flex md:justify-start justify-center ">
              <Link
                href="/lff2025#program"
                className="no-underline sm:h-full sm:w-full md:h-max md:w-max cursor-pointer p-2 md:pl-0"
                onClick={scrollToSection}
              >
                {props.siteFestival[0] && props.siteFestival[0].navbar[6]}
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/lff2024"
                className="font-sans text-[1rem] font-semibold leading-6 p-3 pb-0 justify-center"
              >
                2024 Festival Archive
              </Link>
            </div>
          </div>
          <div className="hidden md:block">{LanguageToogle}</div>
        </div>
      )}
    </div>
  );
}
