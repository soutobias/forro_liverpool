import styles from './Bg.module.css'

export function VideoIntro(props: { siteFestival: any }) {
  return (
    <div
      className={`pt-16 font-semibold text-center font-changa pr-4 pl-4 text-white ${styles.blackBg}`}
    >
      <h2 className="pb-12 text-[1.5rem] leading-8 font-extrabold">
        {props.siteFestival && props.siteFestival[0].titlevideo}
      </h2>
      <video
        width="1336"
        height="614"
        autoPlay
        loop
        muted
        controls
        className="pt-4 pb-4 rounded-3xl overflow-hidden h-[614px] object-cover"
      >
        <source
          src={props.siteFestival && props.siteFestival[0].video}
          type="video/mp4"
        />
      </video>
      <p className="pt-12 pb-10 text-[1rem] font-sans text-justify font-normal leading-6">
        {props.siteFestival && props.siteFestival[0].textvideo}
      </p>
    </div>
  )
}
