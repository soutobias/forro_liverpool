import { H1 } from './H1'
import { MainButton } from './MainButton'
import { TeacherCard } from './TeacherCard'
import { useState, useEffect } from 'react'
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

  console.log(teachers, 'teachers')

  return (
    <div
      id="teachers"
      className={`pb-[15rem] md:pb-[25rem] md:px-[8.5rem] font-changa ${styles.blackBg}`}
    >
      {teachers && (
        <>
          <div className="pt-16 pb-10 text-center">
            <H1
              color="white"
              text={
                language === 'en'
                  ? 'Amazing teachers & musicians'
                  : 'Professores e músicos incríveis'
              }
            />
          </div>
          <div>
            <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
              {teachers &&
                teachers
                  .filter(
                    (item: any) => item.function === 'Teacher' || 'Professor',
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
            <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse">
              {teachers.length > 0 &&
                teachers
                  .filter(
                    (item: any) => item.function === 'Teacher' || 'Professor',
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
            <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
              {teachers &&
                teachers
                  .filter(
                    (item: any) => item.function === 'Teacher' || 'Professor',
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
          </div>
          <div className="pl-4 pr-4 pt-8 md:hidden">
            <MainButton
              href="lff2024/tickets"
              content={language === 'en' ? 'GET TICKETS' : 'INGRESSOS'}
              bg="white"
              font="black"
            />
          </div>
          <div className="pl-4 pr-4 pt-8 md:flex md:justify-center hidden">
            <MainButton
              href="lff2024/tickets"
              content={language === 'en' ? 'GET TICKETS' : 'INGRESSOS'}
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
