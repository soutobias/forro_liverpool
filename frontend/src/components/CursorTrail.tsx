import { useLanguage } from "@/lib/language";
import styles from "@/components/Bg.module.css";
export function CursorTrail(props: { trail: any }) {
  const { trail } = props;
  const { language } = useLanguage();

  return (
    <>
      {trail.map(({ x, y, key }: { x: any; y: any; key: any }) => (
        <div
          key={key}
          className="cursor-trail sm:flex sm:justify-center hidden w-max h-max whitespace-nowrap"
          style={{
            left: x,
            top: y,
            position: "absolute",
          }}
        >
          <a
            href="/lff2025/tickets"
            className={`flex justify-center ${styles.pinkBg} h-max no-underline font-changa rounded-xl border-solid border-4 border-black`}
          >
            <h2 className="text-white text-center text-[1.5rem] md:text-[2rem] leading-8 md:leading-9 uppercase font-extrabold w-full sm:p-5 md:p-6 lg:p-7 xl:p-8 sm:px-8 md:px-9 lg:px-10 xl:px-12">
              {language === "en" ? "Get tickets" : "Ingressos"}
            </h2>
          </a>
        </div>
      ))}
    </>
  );
}
