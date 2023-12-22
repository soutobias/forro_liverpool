import { CommunityCard } from './CommunityCard'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './Community.module.css'
interface Community {
  id: number
  profile_image: string
  name: string
  surname: string
  profile: string
  description: string
}

export function Community() {
  const [community, setCommunity] = useState<Community[]>([])
  const communityUrl = 'http://localhost:3000/api/v1/communities'

  const fetchCommunity = () => {
    fetch(communityUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        setCommunity(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetchCommunity()
  }, [])

  useEffect(() => {
    console.log('')
    // Aqui você pode acessar community[0] e outros dados, garantindo que o estado foi atualizado.
  }, [community])

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
            name={item.name[0].split(' ')[0]}
            surname={item.name[0].split(' ')[1]}
            action="Teacher"
            className="-mr-1"
          />
        ))}
        {community.map((item) => (
          <CommunityCard
            key={item.id}
            image={item.profile_image[1]}
            name={item.name[1].split(' ')[0]}
            surname={item.name[1].split(' ')[1]}
            action="Teacher"
            className="-ml-1"
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
        <Image
          src={
            'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt="illustration"
          className="overflow-hidden"
          width={1336}
          height={360}
        />
        <p className="pt-8 text-[1rem] leading-6 font-changa font-semibold">
          {community.map((member) => (
            <p key={member.id}>{member.description}</p>
          ))}
        </p>
      </div>
    </div>
  )
}
