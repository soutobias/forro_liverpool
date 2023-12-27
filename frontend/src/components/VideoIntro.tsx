import Image from 'next/image'
import styles from './Bg.module.css'

export function VideoIntro() {
  return (
    <div
      className={`pt-24 font-semibold text-center font-changa pr-4 pl-4 text-white ${styles.blackBg}`}
    >
      <h2 className="pb-12 text-[1.5rem] leading-8 font-extrabold">{`Forró in the heart of the UK's music scene`}</h2>
      <Image
        src={
          'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="illustration"
        className="rounded-2xl object-cover"
        width={800}
        height={600}
        style={{ width: '100%', height: '600px' }}
      />
      <p className="pt-12 pb-10 text-[1rem] font-sans text-justify font-normal leading-6">
        {`3 days of dance classes and parties with incredible forró teachers and
        musicians from around the world. Come celebrate Brazilian culture in the
        heart of the UK's music scene.`}
      </p>
    </div>
  )
}
