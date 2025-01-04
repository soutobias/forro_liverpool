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

export function LoteSection(props: {
  lote: any;
  ticketsFestival: any;
  position: number;
}) {
  const { lote, ticketsFestival, position } = props;
  const { language } = useLanguage();

  useEffect(() => {
    // Carregue dinamicamente o script do TicketTailor
    const script = document.createElement("script");
    script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpe o script ao desmontar o componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function calculateLotStatus(lote: any) {
    const datetimeNow = new Date();
    const start_datetime = new Date(lote.start_datetime);
    const end_datetime = new Date(lote.end_datetime);

    if (start_datetime > datetimeNow) {
      return 0;
    } else if (end_datetime < datetimeNow) {
      return 2;
    } else {
      return 1;
    }
  }

  const loteStatus = calculateLotStatus(lote);

  return (
    <div className="">
      <div className="">
        <h2 className="font-changa text-center text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pt-8 sm:pt-16">
          {language === "en"
            ? `Lote ${lote.lote_number}`
            : `Lote ${lote.lote_number}`}
        </h2>
        <div className="pt-5 pb-8 font-sans text-white text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 font-semibold w-full p-5">
          <p>{lote.status[position]}</p>
          <p className="pt-2">{lote.status2[position]}</p>
        </div>
      </div>
      <div className="block md:flex md:justify-center md:gap-4">
        {loteStatus === 0 &&
          ticketsFestival.map((ticket: any, index: number) => (
            <TicketCard
              key={index}
              color={styles.lightPinkBg}
              passType={ticket.ticket_type[position]}
              lote={`Lote ${ticket.lote}`}
              price={`£${ticket.price}`}
              classes={
                ticket.forro_class.length > 0
                  ? ticket.forro_class[position]
                  : ""
              }
              parties={
                ticket.forro_party.length > 0
                  ? ticket.forro_party[position]
                  : ""
              }
              isDisabled={false}
              // isSoldOut={language === "en" ? "SOON" : "EM BREVE"}
            />
          ))}
        {loteStatus === 1 && <TicketWidget />}
        {loteStatus === 2 &&
          ticketsFestival.map((ticket: any, index: number) => (
            <TicketCard
              key={index}
              color={styles.lightPinkBg}
              passType={ticket.ticket_type[position]}
              lote={`Lote ${ticket.lote}`}
              price={`£${ticket.price}`}
              classes={
                ticket.forro_class.length > 0
                  ? ticket.forro_class[position]
                  : ""
              }
              parties={
                ticket.forro_party.length > 0
                  ? ticket.forro_party[position]
                  : ""
              }
              isDisabled={true}
              isSoldOut={language === "en" ? "SOLD OUT" : "ESGOTADO"}
            />
          ))}
      </div>
    </div>
  );
}
