import { useLanguage } from "@/lib/language";
import { useEffect, useRef, useState } from "react";
import styles from "./Bg.module.css";
import { H1 } from "./H1";
import { TeacherCard } from "./TeacherCard";

export function Teachers2025(props: { teachers: any }) {
  const { teachers } = props;
  const [scrollDirection, setScrollDirection] = useState<
    "left" | "right" | null
  >(null);

  const { language } = useLanguage();

  const scrollContainerRef1 = useRef<HTMLDivElement>(null);
  const scrollContainerRef2 = useRef<HTMLDivElement>(null);
  const scrollContainerRef3 = useRef<HTMLDivElement>(null);
  const scrollContainerRef4 = useRef<HTMLDivElement>(null);
  const scrollContainerRef5 = useRef<HTMLDivElement>(null);
  const scrollRefs = [
    scrollContainerRef1,
    scrollContainerRef2,
    scrollContainerRef3,
    scrollContainerRef4,
    scrollContainerRef5,
  ];

  const handleMouseEnter = (e: any, ref: any) => {
    const speed = 10;
    const element = ref.current;

    const move = (e: any) => {
      const containerWidth = element.offsetWidth;
      const positionX = e.clientX - element.getBoundingClientRect().left;
      const scrollAmount = (positionX / containerWidth - 0.5) * 2;

      element.scrollLeft += scrollAmount * speed;
    };

    element.addEventListener("mousemove", move);

    const handleMouseLeave = () => {
      element.removeEventListener("mousemove", move);
    };

    element.addEventListener("mouseleave", handleMouseLeave);
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      let mul = 1;
      scrollRefs.forEach((ref) => {
        if (!ref.current || !scrollDirection) {
        } else {
          const container = ref.current;
          container.scrollLeft +=
            scrollDirection === "left" ? 1 * mul : -1 * mul;
          mul = mul * -1;
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft = 0;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft =
              container.scrollWidth - container.clientWidth;
          }
        }
      });
    }, 10);
    return () => clearInterval(scrollInterval);
  }, [scrollDirection]);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    setScrollDirection(e.deltaY > 0 ? "left" : "right");
  };

  let teacherTeacher = teachers.filter(
    (item: any) =>
      item.function === "Teacher" ||
      item.function === "Professor" ||
      item.function === "Professora" ||
      item.function === "Professores" ||
      item.function === "Teachers",
  );
  // teacherTeacher = Array.from({ length: 20 }, () => [...teacherTeacher]).flat();

  let teacherBand = teachers.filter(
    (item: any) => item.function === "Banda" || item.function === "Live Band",
  );
  // teacherBand = Array.from({ length: 20 }, () => [...teacherBand]).flat();

  let teacherDJ = teachers.filter((item: any) => item.function === "DJ");
  // teacherDJ = Array.from({ length: 20 }, () => [...teacherDJ]).flat();

  return (
    <div
      id="teachers"
      className={`pb-[15rem] md:pb-[25rem] font-changa ${styles.blackBgFull}`}
    >
      <div className="pt-16 pb-10 text-center md:px-[8.5rem]">
        <H1
          color="white"
          text={
            language === "en"
              ? "Amazing teachers & musicians"
              : "Professores e bandas incríveis"
          }
        />
      </div>
      <div className="">
        <div
          className="w-full p-4 sm:flex gap-4 overflow-x-auto no-scrollbar lg:justify-center hidden"
          ref={scrollContainerRef1}
          onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef1)}
        >
          {teacherTeacher.map((item: any, index: number) => {
            if (index < 3) {
              return (
                <TeacherCard
                  key={index}
                  image={item.image}
                  title={item.name}
                  location={item.location}
                  action={item.function}
                  color={styles.lightPinkBg}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
        <div
          // className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
          className="w-full p-4 sm:flex gap-4 overflow-x-auto no-scrollbar sm:justify-center flex-reverse hidden"
          // className="p-4 sm:flex 2xl:justify-center gap-4 overflow-x-auto no-scrollbar flex-row-reverse sm:flex-row "
          ref={scrollContainerRef2}
          onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef2)}
        >
          {teacherTeacher.map((item: any, index: number) => {
            if (index >= 3) {
              return (
                <TeacherCard
                  key={index}
                  image={item.image}
                  title={item.name}
                  location={item.location}
                  action={item.function}
                  color={styles.pinkBg}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
        <div
          // className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
          className="w-full p-4 sm:flex xl:justify-center gap-4 overflow-x-auto no-scrollbar flex-row-reverse sm:flex-row hidden"
          ref={scrollContainerRef3}
          onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef3)}
        >
          {teacherDJ.map((item: any, index: number) => (
            <TeacherCard
              key={index}
              image={item.image}
              title={item.name}
              location={item.location}
              action={item.function}
              color={styles.purpleBg}
            />
          ))}
          {teacherBand.map((item: any, index: number) => (
            <TeacherCard
              key={index}
              image={item.image}
              title={item.name}
              location={item.location}
              action={item.function}
              color={styles.pinkBg}
            />
          ))}
        </div>
      </div>
      <div className="">
        <div
          // className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
          className="w-full p-4 sm:hidden xl:justify-center gap-4 overflow-x-auto no-scrollbar grid grid-cols-2"
          ref={scrollContainerRef3}
          onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef3)}
        >
          {teachers.map((item: any, index: number) => {
            const numColumns = 2;
            const rowIndex = Math.floor(index / numColumns);
            const colors = [styles.lightPinkBg, styles.pinkBg, styles.purpleBg];
            const color = colors[rowIndex % colors.length];

            return (
              <TeacherCard
                key={index}
                image={item.image}
                title={item.name}
                location={item.location}
                action={item.function}
                color={color}
                small={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
