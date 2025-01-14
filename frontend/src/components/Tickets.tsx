import Link from "next/link";
import { useLanguage } from "@/lib/language";

export function Tickets() {
  const { language } = useLanguage();
  return (
    <div className="flex justify-center">
      <Link
        href="lff2025/tickets"
        className="no-underline bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 ml-2 mr-2"
      >
        {language === "en" ? "Get Tickets" : "Ingressos"}
      </Link>
    </div>
  );
}
