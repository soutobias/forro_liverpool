import Link from "next/link";
import { ForroLinks } from "./ForroLinks";
import { InstagramLogo } from "@/assets/instagram_logo";
import { FacebookLogo } from "@/assets/facebook_logo";
import { useLanguage } from "@/lib/language";

export function Footer(props: { siteFestival: any }) {
  const { language } = useLanguage();
  const url = window.location.href;

  const pagePath = url.split("/").pop();

  return (
    <div
      className={`w-full z-20 pb-6 bg-yellow-500 ${
        pagePath === "lff2024"
          ? "pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-60 2xl:pt-72"
          : ""
      }`}
    >
      <ForroLinks siteFestival={props.siteFestival} />
      <div className="flex justify-center gap-8 pt-6 pb-8">
        <Link
          href="https://www.instagram.com/forro.liverpool/"
          target="_blank"
          className="text-1xl no-underline h-full cursor-pointer"
        >
          <InstagramLogo />
        </Link>
        <Link
          href="https://www.facebook.com/forroliverpool/"
          target="_blank"
          className="text-1xl no-underline h-full cursor-pointer"
        >
          <FacebookLogo />
        </Link>
      </div>
      <div className="flex justify-center">
        <p className="font-sans text-[1rem] font-semibold leading-6 pb-8 justify-center">
          hello@forroliverpool.co.uk
        </p>
      </div>

      <div className="px-4">
        <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-4">
          © 2024 Forró Liverpool
        </p>
        {language === "en" ? (
          <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-0">
            Website designed and built with love by{" "}
            <a
              href="https://knockout.studio"
              className="underline text-current"
            >
              Knockout! Studio
            </a>
            , and Tobias and Vanessa.
          </p>
        ) : (
          <p className="justify-center text-center text-black text-[0.75rem] leading-4 font-sans font-normal pb-0">
            Site projetado e construído com amor por{" "}
            <a
              href="https://knockout.studio"
              className="underline text-current"
              target="_blank"
              rel="noreferrer"
            >
              Knockout! Studio
            </a>
            , e Tobias e Vanessa.
          </p>
        )}
      </div>
    </div>
  );
}
