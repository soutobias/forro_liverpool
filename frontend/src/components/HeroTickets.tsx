import styles from "./Bg.module.css";
// import { LFFLogo } from '@/assets/lff_logo'
import Image from "next/image";
import TicketImage from "../assets/LFF-Tickets-Hero-800px.png";

import { TicketCard } from "./TicketCard";
import { useEffect } from "react";
import { TicketWidget } from "./TicketWidget";
import { useLanguage } from "@/lib/language";
import { H1 } from "./H1";
import Link from "next/link";
import { LoteSection } from "./LoteSection";

export function HeroTickets(props: {
  ticketsFestival: any;
  lotesFestival: any;
  position: number;
}) {
  const { ticketsFestival, lotesFestival, position } = props;
  const { language } = useLanguage();

  return (
    <div
      className={`w-full z-[59] font-changa relative md:px-[8.5rem] pb-20 ${styles.blackBgFull}`}
    >
      <div className="pt-[6.75rem]">
        <div>
          <Link
            href="/lff2025"
            className="font-semibold cursor-pointer no-underline pt-2 block lg:-pl-[2rem] md:pt-4 text-[1rem] md:text-[1.5rem] text-white"
          >
            <p>&#60; Liverpool Forró Festival</p>
          </Link>
          <div className="relative h-[20rem] sm:h-[30rem] flex justify-center pl-4 pr-4 items-center">
            <div className="z-[62] pt-[4.5rem] sm:pt-20">
              <H1
                color="black"
                text={language === "en" ? "Tickets" : "Ingressos"}
              />
            </div>
            <div className="absolute top-2 flex justify-center z-[40]">
              <Image
                src={TicketImage}
                alt="illustration"
                className="h-[20rem] w-auto sm:h-[30rem]"
                width={1336}
                height={614}
              />
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-center pt-4 px-4">
          {lotesFestival.map((lote: any, index: number) => (
            <LoteSection
              key={index}
              lote={lote}
              ticketsFestival={ticketsFestival.filter(
                (ticket: any) => ticket.lote === lote.lote_number,
              )}
              position={position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
