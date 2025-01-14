import styles from "./Bg.module.css";
import { H1 } from "./H1";
import { MainButton } from "./MainButton";

import Image from "next/image";
import triangle from "../assets/triangle.png";
import zabumba from "../assets/zabumba.png";
import sanfona from "../assets/sanfona.png";
import { useLanguage } from "@/lib/language";
import { useEffect, useState } from "react";

export function GetTickets() {
  const { language } = useLanguage();
  const keyForRerender = language;
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Ajuste a posição de rolagem conforme necessário
      if (scrollPosition > 500) {
        setIsAnimationEnabled(true);
      } else {
        setIsAnimationEnabled(false);
      }
    };

    // Adiciona o ouvinte de evento de rolagem quando o componente é montado
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // O segundo argumento [] garante que o useEffect só é executado uma vez (equivalente ao componentDidMount)

  const animationClass = isAnimationEnabled ? styles["swing-animation"] : "";

  return (
    <>
      <div id="get_tickets" className="relative font-changa">
        <div className={`relative ${styles.purpleBg}`}>
          <div
            className={`absolute -top-[10rem] sm:-top-[15rem] md:-top-[19rem] w-full h-[20rem] md:h-[30rem] ${styles.rainbowBg}`}
          />
          <div className="pt-[12rem] md:pt-[20rem]  relative z-[61] text-center">
            <H1
              color="white"
              text={
                language === "en"
                  ? "Are you ready to party?"
                  : "Você está pronto para a festa?"
              }
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={triangle}
              alt="illustration"
              className={`absolute top-[10%] left-[25%] z-[60] w-[8rem] ${animationClass}`}
              width={100}
              height={100}
              style={{ maxWidth: "10rem" }}
            />
          </div>
          <div className={`relative h-[40rem] ${styles.gradientBg}`}>
            <div className="sm:hidden flex justify-center">
              <H1
                color="white"
                text={
                  language === "en" ? "Let’s forrozear!" : "Bora forrozear!"
                }
              />
            </div>

            <div className="sm:hidden">
              <div className="pl-4 pr-4 pt-8 z-[61] sm:hidden">
                <MainButton
                  href="/lff2025/tickets"
                  content={language === "en" ? "Get Tickets" : "Ingressos"}
                  bg="white"
                  font="black"
                  width="100%"
                />
              </div>
            </div>

            <div className="hidden sm:flex sm:justify-center text-center">
              <H1
                color="white"
                text={
                  language === "en" ? "Let’s forrozear!" : "Bora forrozear!"
                }
              />
            </div>
            <div className="pl-4 pr-4 pt-8 z-[61] sm:flex sm:justify-center hidden">
              <MainButton
                key={keyForRerender}
                href="/lff2025/tickets"
                content={language === "en" ? "Get Tickets" : "Ingressos"}
                bg="white"
                font="black"
                width="50%"
              />
            </div>
            <Image
              src={zabumba}
              alt="illustration"
              className={`absolute top-[30%] left-[50%] xl:left-[70%] z-[60] w-[9rem] ${animationClass}`}
              width={100}
              height={100}
              style={{ maxWidth: "10rem" }}
            />
            <Image
              src={sanfona}
              alt="illustration"
              className={`absolute top-[50%] left-[10%] xl:left-[30%] z-[60] w-[11rem] ${animationClass}`}
              width={100}
              height={100}
              style={{ maxWidth: "10rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
