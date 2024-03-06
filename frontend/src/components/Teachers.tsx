import { H1 } from './H1'
import { MainButton } from './MainButton'
import { TeacherCard } from './TeacherCard'
import { useState, useEffect, useRef } from 'react'
import { fetchApi } from '@/lib/api'
import styles from './Bg.module.css'
import { keyable } from './ClassEvent'
import { useLanguage } from '@/lib/language'

export function Teachers() {
  const [teachers, setTeachers] = useState<keyable[] | null>(null)

  const { language } = useLanguage()
  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    if (language === 'en') {
      setUrl('api/v1/festival_teachers')
    } else {
      setUrl('api/v1/festival_teacher_translations')
    }
  }, [language])

  useEffect(() => {
    if (url) {
      fetchApi(url, setTeachers)
    }
  }, [url])

  const scrollContainerRef1 = useRef(null)
  const scrollContainerRef2 = useRef(null)
  const scrollContainerRef3 = useRef(null)

  const handleMouseEnter = (e: any, ref: any) => {
    const speed = 10 // Adjust this value for different scrolling speeds
    const element = ref.current

    const move = (e: any) => {
      const containerWidth = element.offsetWidth
      const positionX = e.clientX - element.getBoundingClientRect().left
      const scrollAmount = (positionX / containerWidth - 0.5) * 2 // Adjust scroll direction and speed

      element.scrollLeft += scrollAmount * speed
    }

    element.addEventListener('mousemove', move)

    const handleMouseLeave = () => {
      element.removeEventListener('mousemove', move)
    }

    element.addEventListener('mouseleave', handleMouseLeave)
  }

  return (
    <div
      id="teachers"
      className={`pb-[15rem] md:pb-[25rem] font-changa ${styles.blackBg}`}
    >
      {teachers && (
        <>
          <div className="pt-16 pb-10 text-center md:px-[8.5rem]">
            <H1
              color="white"
              text={
                language === 'en'
                  ? 'Amazing teachers & musicians'
                  : 'Professores e bandas incríveis'
              }
            />
          </div>
          <div className="">
            <div
              className="p-4 flex gap-4 overflow-x-auto no-scrollbar sm:justify-center"
              ref={scrollContainerRef1}
              onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef1)}
            >
              {teachers &&
                teachers
                  .filter(
                    (item: any) =>
                      item.function === 'Teacher' ||
                      item.function === 'Professor' ||
                      item.function === 'Professora' ||
                      item.function === 'Professores' ||
                      item.function === 'Teachers',
                  )
                  .map((item) => (
                    <TeacherCard
                      key={item.id}
                      image={item.image}
                      title={item.name}
                      location={item.location}
                      action={item.function}
                      color={styles.lightPinkBg}
                    />
                  ))}
            </div>
            <div
              // className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
              className="p-4 sm:flex sm:justify-center gap-4 overflow-x-auto no-scrollbar flex-row-reverse sm:flex-row hidden"
              ref={scrollContainerRef2}
              onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef2)}
            >
              {teachers.length > 0 &&
                teachers
                  .filter(
                    (item: any) =>
                      item.function === 'Banda' ||
                      item.function === 'Live Band',
                  )
                  .map((item) => (
                    <TeacherCard
                      key={item.id}
                      image={item.image}
                      title={item.name}
                      location={item.location}
                      action={item.function}
                      color={styles.pinkBg}
                    />
                  ))}
            </div>
            <div
              // className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
              className="p-4 sm:flex sm:justify-center gap-4 overflow-x-auto no-scrollbar flex-row-reverse sm:flex-row hidden"
              ref={scrollContainerRef2}
              onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef2)}
            >
              {teachers &&
                teachers
                  .filter((item: any) => item.function === 'DJ')
                  .map((item) => (
                    <TeacherCard
                      key={item.id}
                      image={item.image}
                      title={item.name}
                      location={item.location}
                      action={item.function}
                      color={styles.purpleBg}
                    />
                  ))}
            </div>
            <div className="">
              <div
                // className="p-4 flex gap-4 overflow-x-auto no-scrollbar"
                className="p-4 flex sm:hidden justify-left md:pl-[10rem] gap-4 overflow-x-auto no-scrollbar flex-row-reverse"
                ref={scrollContainerRef3}
                onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef3)}
              >
                {teachers.length > 0 &&
                  teachers
                    .filter(
                      (item: any) =>
                        item.function === 'Banda' ||
                        item.function === 'Live Band',
                    )
                    .map((item) => (
                      <TeacherCard
                        key={item.id}
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
                // className="p-4 flex gap-4 overflow-x-auto no-scrollbar"
                className="p-4 flex sm:hidden justify-right md:pl-[10rem] gap-4 overflow-x-auto no-scrollbar"
                ref={scrollContainerRef3}
                onMouseEnter={(e) => handleMouseEnter(e, scrollContainerRef3)}
              >
                {teachers &&
                  teachers
                    .filter((item: any) => item.function === 'DJ')
                    .map((item) => (
                      <TeacherCard
                        key={item.id}
                        image={item.image}
                        title={item.name}
                        location={item.location}
                        action={item.function}
                        color={styles.purpleBg}
                      />
                    ))}
              </div>
            </div>
          </div>
          <h2 className=" text-center text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-8 font-extrabold text-white py-5">
            {language === 'en'
              ? 'Check back soon for more talent announcements!'
              : 'Volte em breve para mais anúncios de talentos!'}
          </h2>
          <div className="pl-4 pr-4 pt-8 md:hidden">
            <MainButton
              href="/lff2024/tickets"
              content={language === 'en' ? 'Get Tickets' : 'Ingressos'}
              bg="white"
              font="black"
            />
          </div>
          <div className="pl-4 pr-4 pt-8 md:flex w-full md:justify-center hidden">
            <MainButton
              href="/lff2024/tickets"
              content={language === 'en' ? 'Get Tickets' : 'Ingressos'}
              bg="white"
              font="black"
              width="50%"
            />
          </div>
        </>
      )}
    </div>
  )
}
