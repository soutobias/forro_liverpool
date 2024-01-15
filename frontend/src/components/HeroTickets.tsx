import styles from './Bg.module.css'
// import { LFFLogo } from '@/assets/lff_logo'
import Image from 'next/image'
import LFFLogo from '../assets/LFF_Logo.png'
import CrossWalk from '../assets/Images-LFF-Crosswalk.png'
import CrossWalk1 from '../assets/images-lff-crosswalk-1.png'
import { TicketCard } from './TicketCard'
import { useEffect } from 'react'
import { TicketWidget } from './TicketWidget'

export function HeroTickets() {
  useEffect(() => {
    // Carregue dinamicamente o script do TicketTailor
    const script = document.createElement('script')
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Limpe o script ao desmontar o componente
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className={`w-full z-[59] font-changa relative md:px-[8.5rem] ${styles.blackBg}`}
    >
      <div className="pt-[6.75rem]">
        <div>
          <div className="flex justify-center pl-4 pr-4">
            <Image
              src={LFFLogo}
              alt="illustration"
              className="h-[17rem] w-auto md:h-[30rem]"
              width={1336}
              height={614}
            />
          </div>
          <div className="pt-1 flex justify-center">
            <Image
              src={CrossWalk}
              alt="illustration"
              className="overflow-hidden h-[5.25rem] w-full object-cover md:hidden"
              width={1336}
              height={614}
            />
          </div>
          <div className="pt-1 flex justify-center">
            <Image
              src={CrossWalk1}
              alt="illustration"
              className="overflow-hidden h-[4rem] w-auto object-cover md:block hidden"
              width={1336}
              height={614}
            />
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-center">
          <div className="px-4">
            <p className="text-center text-white pt-8 pb-8 pl-4 pr-4 text-[2.0rem] leading-5 font-changa font-extrabold">
              Tickets
            </p>
            <p className="text-center text-white pt-8 pb-8 pl-4 pr-4 text-[1.5rem] leading-5 font-changa font-extrabold">
              Lote 1
            </p>
            <div className="text-center text-white pt-4 pb-8 pl-4 pr-4 text-[1.0rem] leading-6 font-sans">
              <p>Available 17 January at 4pm GMT</p>
              <p>Limited to 50 tickets per ticket type.</p>
            </div>
            <TicketWidget />
          </div>

          <div className="px-4">
            <p className="text-center text-white pt-8 pb-8 pl-4 pr-4 text-[1.5rem] leading-5 font-changa font-extrabold">
              Lote 2
            </p>
            <div className="text-center text-white pt-4 pb-8 pl-4 pr-4 text-[1.0rem] leading-6 font-sans">
              <p>Available soon</p>
              <p>Limited to 50 tickets per ticket type.</p>
            </div>
          </div>

          <TicketCard
            color={styles.lightPinkBg}
            passType="Full Pass"
            lote="Lote 2"
            price="£75"
            classes="All Classes"
            parties="All Parties"
            isDisabled={true}
          />
          <TicketCard
            color={styles.lightPinkBg}
            passType="Party Pass"
            lote="Lote 2"
            price="TBD"
            classes=""
            parties="All Parties"
            isDisabled={true}
          />

          <div className="px-4">
            <p className="text-center text-white pt-8 pb-8 pl-4 pr-4 text-[1.5rem] leading-5 font-changa font-extrabold">
              Lote 3
            </p>
            <div className="text-center text-white pt-4 pb-8 pl-4 pr-4 text-[1.0rem] leading-6 font-sans">
              <p>Available soon</p>
            </div>
          </div>

          <TicketCard
            color={styles.lightPinkBg}
            passType="Full Pass"
            lote="Lote 3"
            price="£90"
            classes="All Classes"
            parties="All Parties"
            isDisabled={true}
          />
          <TicketCard
            color={styles.lightPinkBg}
            passType="Party Pass"
            lote="Lote 3"
            price="TBD"
            classes=""
            parties="All Parties"
            isDisabled={true}
          />
        </div>
      </div>
    </div>
  )
}
