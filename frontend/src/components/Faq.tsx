"use client";

import {
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpeechBubbles } from "../assets/speech_bubbles";
import styles from "./Bg.module.css";
import { useEffect, useState } from "react";
import { fetchApi } from "@/lib/api";
import { keyable } from "./ClassEvent";
import { useLanguage } from "@/lib/language";
import { H1 } from "./H1";

interface FaqProps {
  answer?: any;
  question?: any;
}

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    style={{
      textDecoration: "underline",
      display: "inline-flex",
      alignItems: "center",
    }}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 256 256"
      style={{ verticalAlign: "middle" }}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="64"
        y1="192"
        x2="192"
        y2="64"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <polyline
        points="88 64 192 64 192 168"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></polyline>
    </svg>
  </a>
);

export const FaqQuestion = ({ question, answer }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  // Função para substituir o texto por links
  const replaceTextWithLinks = (text: string) => {
    const parts = text.split(
      /(Forró Liverpool\.|thetrainline\.com|nationalexpress\.co\.uk|hello@forroliverpool\.co\.uk|@forro\.liverpool)/g,
    );

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const links: Record<string, string> = {
          "Forró Liverpool.":
            "https://open.spotify.com/playlist/2kvMQYobMtnhGnkggHc5QE",
          "thetrainline.com": "https://thetrainline.com/",
          "nationalexpress.co.uk": "https://www.nationalexpress.com/en",
          "hello@forroliverpool.co.uk": "mailto:hello@forroliverpool.co.uk",
          "@forro.liverpool":
            "https://www.instagram.com/forro.liverpool/?igsh=MW5sMmlhaXp4Zms2aA%3D%3D",
        };

        return (
          <ExternalLink key={index} href={links[part]}>
            {part}
          </ExternalLink>
        );
      } else {
        return part;
      }
    });
  };

  return (
    <div className="pt-4">
      <div className="border-b-2 pb-4 border-b-gray-100">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleToggleQuestion}
        >
          <div className="flex justify-left w-10/12 items-center">
            <div>
              {/* Você pode precisar importar SpeechBubbles */}
              <SpeechBubbles />
            </div>
            <div>
              <p className="pl-4 text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-8 font-extrabold">
                {question}
              </p>
            </div>
          </div>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronLeft}
            className="text-xl"
          />
        </div>
        {isOpen && (
          <div className="pt-4 flex">
            <div>
              <div className="text-[1rem] leading-6 md:text-[1.25rem] md:leading-7 font-semibold font-sans">
                {replaceTextWithLinks(answer)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Faq = (props: { isFestival: boolean }) => {
  const { isFestival } = props;
  const [questions, setQuestions] = useState<keyable[] | null>(null);
  const { language } = useLanguage();
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (language === "en") {
      setUrl("api/v1/questions");
    } else {
      setUrl("api/v1/question_translations");
    }
  }, [language]);

  useEffect(() => {
    if (url) {
      fetchApi(url, setQuestions);
    }
  }, [url]);

  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  useEffect(() => {
    if (questions) {
      setFilteredQuestions(
        questions?.filter((item) => item.is_festival === isFestival),
      );
    }
  }, [questions, isFestival]);

  return (
    <div
      className={`${
        isFestival ? "pt-20" : "pt-50"
      } pb-20 font-changa px-4 md:px-[8rem] xl:px-[23rem] md:pb-40 text-white ${
        isFestival ? styles.blackBgFull : styles.blackBg
      }`}
      id="faq"
    >
      <div className="pb-12 font-extrabold pt-20 text-left">
        <H1 color="white" text="FAQ" />
      </div>
      {filteredQuestions &&
        filteredQuestions.map((item: any, index: number) => (
          <FaqQuestion
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      {/* {isFestival && (
        <div className="text-white pt-10 text-[1.5rem] md:text-[2rem] text-center font-extrabold leading-8 md:leading-10 px-10">
          {language === "en"
            ? "Liverpool Forró Festival 2024 was organized by Felipe Ortega, Filipe Braga, and Molly Cichy. Simbora!"
            : "Liverpool Forró Festival 2024 é organizado por Felipe Ortega, Filipe Braga, e Molly Cichy. Simbora!"}
        </div>
      )} */}
    </div>
  );
};
