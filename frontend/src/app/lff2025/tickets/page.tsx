"use client";

import { HeroTickets } from "@/components/HeroTickets";
import { Navbar } from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";
import { GDPR } from "@/components/GDPR";
import { Footer } from "@/components/Footer";
import { UpButton } from "@/components/UpButton";
import { fetchApi } from "@/lib/api";
import { useLanguage } from "@/lib/language";
import Head from "next/head";

export interface keyable {
  [key: string]: any;
}

export default function Home() {
  const [showGDPR, setShowGDPR] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [siteFestival, setSiteFestival] = useState<keyable[] | null>(null);

  const [ticketsFestival, setTicketsFestival] = useState<keyable[] | null>(
    null,
  );
  const [lotesFestival, setLotesFestival] = useState<keyable[] | null>(null);

  const [position, setPosition] = useState<number>(0);

  const { language } = useLanguage();

  const [urlFestival, setUrlFestival] = useState<string>("");

  useEffect(() => {
    if (language === "en") {
      setPosition(0);
      setUrlFestival("api/v1/site2025_festivals");
    } else {
      setPosition(1);
      setUrlFestival("api/v1/site2025_festival_translations");
    }
  }, [language]);

  useEffect(() => {
    if (!ticketsFestival) {
      fetchApi("api/v1/tickets", setTicketsFestival);
    }
  }, [ticketsFestival]);

  useEffect(() => {
    if (!lotesFestival) {
      fetchApi("api/v1/lotes", setLotesFestival);
    }
  }, [lotesFestival]);

  useEffect(() => {
    if (urlFestival) {
      fetchApi(urlFestival, setSiteFestival);
    }
  }, [urlFestival]);

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
      </Head>
      <div className={showGDPR ? "overflow-hidden pointer-events-none" : ""}>
        {siteFestival && (
          <>
            <div ref={targetRef}>
              <Navbar plusColor="#EAEAEA" siteFestival={siteFestival}></Navbar>
            </div>
            {ticketsFestival && lotesFestival && (
              <HeroTickets
                ticketsFestival={ticketsFestival}
                lotesFestival={lotesFestival}
                position={position}
              ></HeroTickets>
            )}
          </>
        )}
        <Footer siteFestival={siteFestival} />
        {showGDPR && <GDPR setShowGDPR={setShowGDPR} />}
        {!isVisible && <UpButton />}
      </div>
    </>
  );
}
