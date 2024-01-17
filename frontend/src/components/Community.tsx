import { CommunityCard } from './CommunityCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'
import { H1 } from './H1'
import { useLanguage } from '@/lib/language'

interface CommunityProps {
  [key: string]: any
}

export function Community() {
  const [community, setCommunity] = useState<CommunityProps[]>([])

  const { language } = useLanguage()

  const [url, setUrl] = useState<string>('')

  useEffect(() => {
    if (language === 'en') {
      setUrl('api/v1/communities')
    } else {
      setUrl('api/v1/community_translations')
    }
  }, [language])

  useEffect(() => {
    if (url) {
      fetchApi(url, setCommunity)
    }
  }, [url])

  return (
    <div
      id="community"
      className={`pb-20 px-4 md:px-[8.5rem] ${styles.communityBg}`}
    >
      <div className="pt-20 text-left md:text-center">
        <H1
          color="black"
          text={language === 'en' ? 'Our Community' : 'Nossa Comunidade'}
        />
      </div>
      <div>
        {community.length > 0 && (
          <div>
            <div className="flex pt-12 justify-center mr-2">
              <div className="ml-2">
                <CommunityCard
                  key={0}
                  image={community[0].profile_image[0]}
                  name={community[0].name[0]}
                  action={language === 'en' ? 'Teacher' : 'Professor'}
                />
              </div>
              <div className="-ml-2">
                <CommunityCard
                  key={1}
                  image={community[0].profile_image[1]}
                  name={community[0].name[1]}
                  action={language === 'en' ? 'Teacher' : 'Professora'}
                />
              </div>
            </div>
            <div className=" flex flex-col justify-center">
              <p className="pt-8 sm:pt-16 pb-12 text-[1rem] md:text-[1.25rem] sm:px-[2rem] md:px-[3rem] xl:px-[10rem] leading-6 font-sans font-semibold md:leading-7">
                {community[0].profile}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="lg:pt-[4rem] lg:flex lg:justify-center sm:gap-5 lg:gap-8 xl:gap-12 sm:px-[2rem] md:px-[3rem] xl:px-[10rem]">
        <div className="flex justify-center h-max w-full sm:px-[2rem]">
          {community.length > 0 && (
            <Image
              src={community[0].profile_image[2]}
              alt="illustration"
              className="overflow-hidden h-[20rem] object-cover rounded-xl"
              width={450}
              height={1}
            />
          )}
        </div>
        <p className="pt-8 text-[1rem] sm:px-[2rem] md:text-[1.25rem] leading-6 font-sans font-semibold lg:w-[80%]">
          {community.length > 0 && community[0].description}
        </p>
      </div>
    </div>
  )
}
