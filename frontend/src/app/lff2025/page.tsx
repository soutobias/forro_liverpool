"use client";

import { HeroLFF } from "@/components/HeroLFF";
// import { VideoIntro } from '@/components/VideoIntro'
import { Faq } from "@/components/Faq";
import { Navbar } from "@/components/NavBar";
// import { FrameImportant } from '@/components/FrameImportant'
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { UpButton } from "@/components/UpButton";
import { VideoIntro } from "@/components/VideoIntro";
import { Teachers } from "@/components/Teachers";
import { ClassEventsLFF } from "@/components/ClassEventsLFF";
import { Liverpool } from "@/components/Liverpool";
// import { LiverpoolEvents } from '@/components/LiverpoolEvents'
import { GetTickets } from "@/components/GetTickets";
import { fetchApi } from "@/lib/api";
import { useLanguage } from "@/lib/language";
import Head from "next/head";
import { HeroLFF2025 } from "@/components/HeroLFF2025";
import { VideoIntro2025 } from "@/components/VideoIntro2025";
import { Teachers2025 } from "@/components/Teachers2025";
import { ClassEventsLFF2025 } from "@/components/ClassEventsLFF2025";
import { Liverpool2025 } from "@/components/Liverpool2025";
import { GetTickets2025 } from "@/components/GetTickets2025";

export interface keyable {
  [key: string]: any;
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null);

  const { language } = useLanguage();
  const year = "2025";

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
      setUrlFestival("api/v1/site2025_festivals");
    } else {
      setUrlFestival("api/v1/site2025_festival_translations");
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
        <title>Liverpool Forro Festival 2025</title>
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
            <HeroLFF2025
              year={"2025"}
              siteFestival={siteFestival}
            ></HeroLFF2025>
            <VideoIntro2025 siteFestival={siteFestival}></VideoIntro2025>
          </>
        )}
        <Teachers2025></Teachers2025>
        <ClassEventsLFF2025 year={2025}></ClassEventsLFF2025>
        <Liverpool2025 />
        <GetTickets2025 />
        {/* <LiverpoolEvents /> */}
        <Faq isFestival={true} />
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
