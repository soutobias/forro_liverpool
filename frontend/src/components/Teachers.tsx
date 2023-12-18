import { TeacherCard } from './TeacherCard'

export function Teachers() {
  return (
    <div id="teachers" className="pb-20">
      <h1 className="pt-16 pl-2 pb-10 text-[2rem] leading-9 font-sans font-semibold text-center">
        Amazing teachers & musicians
      </h1>
      <div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Camila Alves'}
            location={'Lisbon'}
            action={'Teacher'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Felipe & Marina'}
            location={'Liverpool'}
            action={'Teacher'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
          />
        </div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar flex-row-reverse">
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Band Name'}
            location={'Recife'}
            action={'band'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'DJ Name'}
            location={'London'}
            action={'dj'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Band Name'}
            location={'Liverpool'}
            action={'band'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1521547418549-6a31aad7c177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Band Name'}
            location={'Recife'}
            action={'band'}
          />
        </div>
        <div className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Camila Alves'}
            location={'Lisbon'}
            action={'Teacher'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Felipe & Marina'}
            location={'Liverpool'}
            action={'Teacher'}
          />
          <TeacherCard
            image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title={'Yse Goes'}
            location={'Porto'}
            action={'Teacher'}
          />
        </div>
      </div>
    </div>
  )
}
