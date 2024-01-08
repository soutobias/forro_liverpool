import { CommunityCard } from './CommunityCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'

interface CommunityProps {
  [key: string]: any
}

export function Community() {
  const [community, setCommunity] = useState<CommunityProps[]>([])
  const url = 'api/v1/communities'
  console.log(community, 'community')

  useEffect(() => {
    fetchApi(url, setCommunity)
  }, [])

  return (
    <div id="community" className={`pb-20 pl-4 pr-4 ${styles.communityBg}`}>
      <h1 className="pt-20 text-[2rem] leading-9 font-changa font-semibold">
        Our Community
      </h1>
      <div className="flex pt-12 justify-center">
        {community.map((item) => (
          <CommunityCard
            key={item.id}
            image={item.profile_image[0]}
            name={item.name[0]}
            action="Teacher"
          />
        ))}
        {community.map((item) => (
          <CommunityCard
            key={item.id}
            image={item.profile_image[1]}
            name={item.name[1]}
            action="Teacher"
          />
        ))}
      </div>
      <div>
        <p className="pt-8 pb-12 text-[1rem] leading-6 font-changa font-semibold">
          {community.map((item) => (
            <p key={item.id}>{item.profile}</p>
          ))}
        </p>
      </div>
      <div className="">
        {community.length > 0 && (
          <Image
            src={community[0].profile_image[2]}
            alt="illustration"
            className="overflow-hidden"
            width={1336}
            height={360}
          />
        )}
        <p className="pt-8 text-[1rem] leading-6 font-changa font-semibold">
          {community.map((member) => (
            <p key={member.id}>{member.description}</p>
          ))}
        </p>
      </div>
    </div>
  )
}
