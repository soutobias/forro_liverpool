import { H1 } from './H1'
import { MainButton } from './MainButton'
import { TeacherCard } from './TeacherCard'
import styles from './Bg.module.css'
export function Teachers() {
  return (
    <div id="teachers" className={`pb-[15rem] font-changa ${styles.blackBg}`}>
      <div className="pt-16 pb-10">
        <H1 color="white" text="Amazing teachers & musicians" />
      </div>
      <div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
            color={styles.lightPinkBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Camila Alves'}
            location={'Lisbon'}
            action={'Teacher'}
            color={styles.lightPinkBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Felipe & Marina'}
            location={'Liverpool'}
            action={'Teacher'}
            color={styles.lightPinkBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
            color={styles.lightPinkBg}
          />
        </div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse">
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Band Name'}
            location={'Recife'}
            action={'band'}
            color={styles.pinkBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'DJ Name'}
            location={'London'}
            action={'dj'}
            color={styles.pinkBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Band Name'}
            location={'Liverpool'}
            action={'band'}
            color={styles.pinkBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Band Name'}
            location={'Recife'}
            action={'band'}
            color={styles.pinkBg}
          />
        </div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
            color={styles.purpleBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Camila Alves'}
            location={'Lisbon'}
            action={'Teacher'}
            color={styles.purpleBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Felipe & Marina'}
            location={'Liverpool'}
            action={'Teacher'}
            color={styles.purpleBg}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
            color={styles.purpleBg}
          />
        </div>
      </div>
      <div className="pl-4 pr-4 pt-8">
        <MainButton href="#" content="GET TICKETS" bg="white" font="black" />
      </div>
    </div>
  )
}
