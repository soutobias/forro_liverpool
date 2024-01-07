import { CommunityCard } from './CommunityCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'
import { H1 } from './H1'

interface CommunityProps {
  [key: string]: any
}

export function Community() {
  const [community, setCommunity] = useState<CommunityProps[]>([])
  const url = 'api/v1/communities'

  useEffect(() => {
    fetchApi(url, setCommunity)
  }, [])
  console.log(community)
  return (
    <div
      id="community"
      className={`pb-20 px-4 md:px-[8.5rem] ${styles.communityBg}`}
    >
      <div className="pt-20 text-left md:text-center">
        <H1 color="black" text="Our Community" />
      </div>
      <div>
        {community.length > 0 && (
          <div>
            <div className="flex pt-12 justify-center gap-10">
              <CommunityCard
                image={community[0].profile_image[0]}
                name={community[0].name[0]}
                action="Teacher"
              />
              <CommunityCard
                image={community[0].profile_image[1]}
                name={community[0].name[1]}
                action="Teacher"
              />
            </div>
            <div className=" flex flex-col justify-center">
              <p className="pt-8 pb-12 text-[1rem] md:text-[1.24rem] md:px-[10rem] leading-6 font-changa font-semibold">
                <p>{community[0].profile}</p>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="md:pt-[4rem] md:flex md:justify-center md:gap-20">
        <Image
          src={
            'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="illustration"
          className="overflow-hidden md:w-[60%]"
          width={1336}
          height={360}
        />
        <p className="pt-8 text-[1rem] md:text-[1.25rem] leading-6 font-changa font-semibold md:w-[40%]">
          {community.length > 0 && <p>{community[0].description}</p>}
        </p>
      </div>
    </div>
  )
}
