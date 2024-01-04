import { H1 } from './H1'
import { MainButton } from './MainButton'
import { TeacherCard } from './TeacherCard'
import { useState, useEffect } from 'react'
import { fetchApi } from '@/lib/api'
import styles from './Bg.module.css'
import { keyable } from './ClassEvent'

export function Teachers() {
  const [teachers, setTeachers] = useState<keyable[] | null>(null)
  const url = 'api/v1/festival_teachers'

  useEffect(() => {
    fetchApi(url, setTeachers)
  }, [])

  console.log(teachers, 'teachers ------')

  return (
    <div id="teachers" className={`pb-[15rem] font-changa ${styles.blackBg}`}>
      <div className="pt-16 pb-10">
        <H1 color="white" text="Amazing teachers & musicians" />
      </div>
      <div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          {teachers &&
            teachers
              .filter((item: any) => item.function === 'Teacher')
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
          {teachers &&
            teachers
              .filter((item: any) => item.function === 'Teacher')
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
              .filter((item: any) => item.function === 'Teacher')
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
      <div className="pl-4 pr-4 pt-8">
        <MainButton href="#" content="GET TICKETS" bg="white" font="black" />
      </div>
    </div>
  )
}
