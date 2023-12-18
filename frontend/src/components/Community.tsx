import { CommunityCard } from './CommunityCard'
import Image from 'next/image'

export function Community() {
  return (
    <div id="community" className="pb-12">
      <h1 className="pt-16 pl-2 text-[2rem] leading-9 font-sans font-semibold">
        Our Community
      </h1>
      <div className="flex pt-10 gap-1 justify-center">
        <CommunityCard
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Felipe"
          surname="Braga"
          action="teacher"
        />
        <CommunityCard
          image="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Marina"
          surname="Cerqueira"
          action="teacher"
        />
      </div>
      <div>
        <p className="pt-7 pl-2 pr-2 pb-4 text-[1rem] leading-5 font-sans font-normal">
          Profiles on Filipe & Marina, including how long they have been
          dancing, where they trained, maybe why they dance forró, etc.
        </p>
      </div>
      <div className="pt-6">
        <Image
          src={
            'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="illustration"
          className="p-2 rounded-2xl overflow-hidden"
          width={1336}
          height={360}
        />
        <p className="pt-9 pl-2 pr-2 pb-0 text-[1rem] leading-5 font-sans font-normal">
          Something about the community of forrozeiros, that they come from all
          over, many speak/don’t speak Portuguese, etc. Emphasize grassroots,
          collaborative approach.
        </p>
      </div>
    </div>
  )
}
