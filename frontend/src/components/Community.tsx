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
            <div className="flex pt-12 justify-center mr-2">
              <div className="ml-2">
                <CommunityCard
                  image={community[0].profile_image[0]}
                  name={community[0].name[0]}
                  action="Teacher"
                />
              </div>
              <div className="-ml-2">
                <CommunityCard
                  image={community[0].profile_image[1]}
                  name={community[0].name[1]}
                  action="Teacher"
                />
              </div>
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
        {community.length > 0 && (
          <Image
            src={community[0].profile_image[2]}
            alt="illustration"
            className="overflow-hidden"
            width={1336}
            height={360}
          />
        )}
        <p className="pt-8 text-[1rem] md:text-[1.25rem] leading-6 font-changa font-semibold md:w-[40%]">
          {community.length > 0 && <p>{community[0].description}</p>}
        </p>
      </div>
    </div>
  )
}
