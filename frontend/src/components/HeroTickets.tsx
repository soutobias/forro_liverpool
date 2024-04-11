import styles from './Bg.module.css'
// import { LFFLogo } from '@/assets/lff_logo'
import Image from 'next/image'
import TicketImage from '../assets/LFF-Tickets-Hero-800px.png'

import { TicketCard } from './TicketCard'
import { useEffect } from 'react'
import { TicketWidget } from './TicketWidget'
import { useLanguage } from '@/lib/language'
import { H1 } from './H1'
import Link from 'next/link'

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
  const { language } = useLanguage()

  return (
    <div
      className={`w-full z-[59] font-changa relative md:px-[8.5rem] pb-20 ${styles.blackBg}`}
    >
      <div className="pt-[6.75rem]">
        <div>
          <Link
            href="/lff2024"
            className="font-semibold cursor-pointer no-underline pt-2 block lg:-pl-[2rem] md:pt-4 text-[1rem] md:text-[1.5rem] text-white"
          >
            <p>&#60; Liverpool Forró Festival</p>
          </Link>
          <div className="relative h-[20rem] sm:h-[30rem] flex justify-center pl-4 pr-4 items-center">
            <div className="z-[62] pt-[4.5rem] sm:pt-20">
              <H1
                color="black"
                text={language === 'en' ? 'Tickets' : 'Ingressos'}
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
          <div className="">
            <h2 className="font-changa text-center text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pt-8 sm:pt-16">
              Lote 1
            </h2>
            <div className="pt-5 pb-10 font-sans text-white text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 font-semibold w-full p-5">
              <p>
                {language === 'en'
                  ? 'Available 17 January at 4pm GMT'
                  : 'Disponível em 17 de janeiro, às 16h'}
              </p>
            </div>
          </div>
          <div className="block md:flex md:justify-center md:gap-4">
            <TicketCard
              color={styles.lightPinkBg}
              passType={language === 'en' ? 'Full Pass' : 'Passe completo'}
              lote="Lote 1"
              price="£60"
              classes={language === 'en' ? 'All Classes' : 'Todas as aulas'}
              parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
              isDisabled={true}
              isSoldOut={language === 'en' ? 'SOLD OUT' : 'ESGOTADO'}
            />
            <TicketCard
              color={styles.lightPinkBg}
              passType={language === 'en' ? 'Party Pass' : 'Passe para festas'}
              lote="Lote 1"
              price="£40"
              classes=""
              parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
              isDisabled={true}
              isSoldOut={language === 'en' ? 'SOLD OUT' : 'ESGOTADO'}
            />
          </div>
          <div className="pt-16">
            <h2 className="font-changa text-center text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pt-8 sm:pt-0">
              Lote 2
            </h2>
            <div className="pt-5 pb-10 font-sans text-white text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 font-semibold w-full p-5">
              <p>
                {language === 'en'
                  ? 'Available March 6th at 4pm GMT'
                  : 'Disponível em 6 de março, às 16h'}
              </p>
            </div>
            {/* <div className="block md:flex md:justify-center md:gap-4">
              <TicketCard
                color={styles.lightPinkBg}
                passType={language === 'en' ? 'Full Pass' : 'Passe completo'}
                lote="Lote 1"
                price="£60"
                classes={language === 'en' ? 'All Classes' : 'Todas as aulas'}
                parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
                isDisabled={true}
                isSoldOut={language === 'en' ? 'SOLD OUT' : 'ESGOTADO'}
              />
              <TicketCard
                color={styles.lightPinkBg}
                passType={
                  language === 'en' ? 'Party Pass' : 'Passe para festas'
                }
                lote="Lote 1"
                price="£40"
                classes=""
                parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
                isDisabled={true}
                isSoldOut={language === 'en' ? 'SOLD OUT' : 'ESGOTADO'}
              />
            </div>  */}
          </div>
          <div className="block md:flex md:justify-center md:gap-4">
            <TicketCard
              color={styles.lightPinkBg}
              passType={language === 'en' ? 'Full Pass' : 'Passe completo'}
              lote="Lote 2"
              price="£75"
              classes={language === 'en' ? 'All Classes' : 'Todas as aulas'}
              parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
              isDisabled={true}
              isSoldOut={language === 'en' ? 'SOLD OUT' : 'ESGOTADO'}
            />
            <TicketCard
              color={styles.lightPinkBg}
              passType={language === 'en' ? 'Party Pass' : 'Passe para festas'}
              lote="Lote 2"
              price="£50"
              classes=""
              parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
              isDisabled={true}
              isSoldOut={language === 'en' ? 'SOLD OUT' : 'ESGOTADO'}
            />
          </div>
          <div className="pt-16">
            <h2 className="font-changa text-center text-white text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pt-8 sm:pt-0">
              {language === 'en' ? 'Lote 3' : 'Lote 3'}
            </h2>
            <div className="pt-5 pb-10 font-sans text-white text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 font-semibold w-full p-5">
              <p>
                {language === 'en'
                  ? 'Available April 11th at 4pm GMT'
                  : 'Disponível em 11 de Abril, às 16h'}
              </p>
              <p>
                {language === 'en'
                  ? 'Limited quantities available.'
                  : 'Quantidades limitadas'}
              </p>
            </div>
            {/* <div className="pt-12 pb-10 text-center text-white font-extrabold font-changa text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-8">
              <p>
                {language === 'en'
                  ? 'Available 15 March at 3pm GMT'
                  : 'Disponível a partir de 15 de março, às 15h'}
              </p>
            </div> */}
          </div>
          <TicketWidget />
          {/* 
          <div className="block md:flex md:justify-center md:gap-4">
            <TicketCard
              color={styles.lightPinkBg}
              passType={language === 'en' ? 'Full Pass' : 'Passe completo'}
              lote={language === 'en' ? 'Lote 3' : 'Lote 3'}
              price="£90"
              classes={language === 'en' ? 'All Classes' : 'Todas as aulas'}
              parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
              isDisabled={false}
            />
            <TicketCard
              color={styles.lightPinkBg}
              passType={language === 'en' ? 'Party Pass' : 'Passe para festas'}
              lote={language === 'en' ? 'Lote 3' : 'Lote 3'}
              price="TBD"
              classes=""
              parties={language === 'en' ? 'All Parties' : 'Todas as festas'}
              isDisabled={false}
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
