import styles from './Bg.module.css'

export function VideoIntro(props: { siteFestival: any }) {
  return (
    <div
      className={`pt-16 md:pt-32 font-semibold text-center font-changa px-4 md:px-[15.75rem] text-white ${styles.blackBg}`}
    >
      <div className="md:flex md:justify-center md:gap-40">
        <div>
          <h2 className="pb-12 text-[1.5rem] md:pt-[4.75rem] leading-8 font-extrabold md:text-left">
            {props.siteFestival && props.siteFestival[0].titlevideo}
          </h2>
          <p className="pt-12 pb-10 text-[1rem] font-sans text-justify md:text-left font-normal leading-6 hidden md:block">
            {props.siteFestival && props.siteFestival[0].textvideo}
          </p>
        </div>
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
        <p className="pt-12 pb-10 text-[1rem] font-sans text-justify font-normal leading-6 md:hidden">
          {props.siteFestival && props.siteFestival[0].textvideo}
        </p>
      </div>
    </div>
  )
}
