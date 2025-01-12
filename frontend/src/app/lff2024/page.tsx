"use client";

import styles from "../../components/Bg.module.css";
import { HeroLFF } from "@/components/HeroLFF";
// import { VideoIntro } from '@/components/VideoIntro'
import { Navbar } from "@/components/NavBar";
// import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { UpButton } from "@/components/UpButton";
import { VideoIntro } from "@/components/VideoIntro";
import { Teachers } from "@/components/Teachers";
import { ClassEventsLFF } from "@/components/ClassEventsLFF";
// import { LiverpoolEvents } from '@/components/LiverpoolEvents'
import { fetchApi } from "@/lib/api";
import { useLanguage } from "@/lib/language";
import Head from "next/head";
import { FestivalPhotos } from "@/components/FestivalPhotos";

export interface keyable {
  [key: string]: any;
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null);
  const { language } = useLanguage();

  const [urlTeachers, setUrlTeachers] = useState<string>("");
  const [teachers, setTeachers] = useState<keyable[] | null>(null);
  useEffect(() => {
    if (language === "en") {
      setUrlTeachers("api/v1/festival2025_teachers");
    } else {
      setUrlTeachers("api/v1/festival2025_teacher_translations");
    }
  }, [language]);

  useEffect(() => {
    if (urlTeachers) {
      fetchApi(urlTeachers, setTeachers);
    }
  }, [urlTeachers]);

  useEffect(() => {
    if (siteFestival) {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 500);
    }
  }, [siteFestival]);

  const [urlFestival, setUrlFestival] = useState<string>("");

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
      setUrlFestival("api/v1/sitefestivals");
    } else {
      setUrlFestival("api/v1/site_festival_translations");
    }
  }, [language]);

  useEffect(() => {
    if (urlFestival) {
      fetchApi(urlFestival, setSiteFestival);
    }
  }, [urlFestival]);

  useEffect(() => {
    setShowGDPR(false);
    // setShowGDPR(getCookieAuth())
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Liverpool Forro Festival 2024</title>
        <meta name="description" content="Forro Liverpool" />
        {/* Other metadata tags */}
      </Head>
      <div className={showGDPR ? "overflow-hidden pointer-events-none" : ""}>
        {/* <FrameImportant text="early bird tickets now available!" /> */}
        {siteFestival && (
          <>
            <div ref={targetRef}>
              <Navbar plusColor="#EAEAEA" siteFestival={siteFestival} />
            </div>
            <HeroLFF year={"2024"} siteFestival={siteFestival}></HeroLFF>
            <div className={`md:pt-20 ${styles.blackBg}`}>
              <FestivalPhotos />
            </div>

            <VideoIntro siteFestival={siteFestival}></VideoIntro>
          </>
        )}
        {teachers && <Teachers teachers={teachers} />}
        <ClassEventsLFF year={2024}></ClassEventsLFF>
        {/* <Liverpool />
        <GetTickets /> */}
        {/* <LiverpoolEvents /> */}
        {/* <Faq isFestival={true} /> */}
        <Footer siteFestival={siteFestival} />
        {/* {showGDPR && <GDPR setShowGDPR={setShowGDPR} />} */}
        {/* {Object.keys(showEvent).length > 0 && (
        <ClassEvent showEvent={showEvent} setShowEvent={setShowEvent} />
      )} */}
        {!isVisible && <UpButton />}
      </div>
    </>
  );
}
