import Image from 'next/image'

export function VideoIntro() {
  return (
    <div className="pt-24 text-[1.5rem] font-semibold text-center">
      <h2>{`Forró in the heart of the UK's music scene`}</h2>
      <Image
        src={
          'https://images.unsplash.com/photo-1699755094450-620e32ec86a6?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        alt="illustration"
        className="p-2 mt-9 rounded-2xl object-cover"
        width={800}
        height={600}
        style={{ width: '100%', height: '600px' }}
      />
      <p className="pt-9 pl-2 pr-2 pb-10 text-[1rem] text-left leading-5 font-sans font-normal">
        {`3 days of dance classes and parties with incredible forró teachers and
        musicians from around the world. Come celebrate Brazilian culture in the
        heart of the UK's music scene.`}
      </p>
    </div>
  )
}
