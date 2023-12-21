import { CommunityCard } from './CommunityCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { fetchApi } from '@/lib/api'

interface CommunityProps {
  [key: string]: any
}

export function Community() {
  const [community, setCommunity] = useState<CommunityProps[]>([])
  const url = 'api/v1/communities'

  useEffect(() => {
    fetchApi(url, setCommunity)
  }, [])

  return (
    <div id="community" className="pb-12">
      <h1 className="pt-16 pl-2 text-[2rem] leading-9 font-sans font-semibold">
        Our Community
      </h1>
      <div className="flex pt-10 gap-1 justify-center">
        <>
          {community.map((item) => (
            <CommunityCard
              key={item.id}
              image={item.profile_image[0]}
              name={item.name[0]}
              surname="Silva"
              action="Teacher"
            />
          ))}
          {community.map((item) => (
            <CommunityCard
              key={item.id}
              image={item.profile_image[1]}
              name={item.name[1]}
              surname="Silva"
              action="Teacher"
            />
          ))}
        </>
      </div>
      <div>
        <p className="pt-7 pl-2 pr-2 pb-4 text-[1rem] leading-5 font-sans font-normal">
          {community.map((item) => (
            <p key={item.id}>{item.profile}</p>
          ))}
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
          {community.map((member) => (
            <p key={member.id}>{member.description}</p>
          ))}
        </p>
      </div>
    </div>
  )
}
