import { useEffect, useRef } from "react";
import styles from "./Bg.module.css";

export function VideoIntro(props: { siteFestival: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const video = videoRef.current;
        if (entries[0].isIntersecting) {
          if (video) {
            video.play();
          }
        } else {
          if (video) {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    const video = videoRef.current;
    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);
  return (
    <div
      className={`pt-16 md:pt-32 font-semibold text-center font-changa px-4 md:px-[8rem] lg:px-[13rem]  2xl:px-[20rem] text-white ${styles.blackBg}`}
    >
      <div className="md:flex md:justify-center md:gap-10 lg:gap-10 xl:gap-40">
        <div className="sm:pt-[0] xl:pt-[7rem]">
          <h2 className="pb-12 sm:pb-0 text-[1.5rem] md:text-[2rem] sm:pt-0 lg:pt-16 leading-8 md:leading-10 font-extrabold md:text-left">
            {props.siteFestival && props.siteFestival[0].titlevideo}
          </h2>
          <p className="pt-12 pb-10 text-[1rem] md:text-[1.25rem] md:leading-6 font-sans text-justify md:text-left font-semibold leading-8 hidden md:block">
            {props.siteFestival && props.siteFestival[0].textvideo}
          </p>
        </div>
        <div className="h-max flex justify-center items-center">
          <video
            ref={videoRef}
            width="1080"
            height="1"
            autoPlay
            loop
            muted
            controls
            className="rounded-2xl overflow-hidden"
            style={{ borderRadius: "8px", overflow: "hidden" }}
            // poster={path-to-poster.jpg}
          >
            <source
              src={props.siteFestival && props.siteFestival[0].video}
              type="video/mp4"
            />
            {/* <source
                src={props.site && props.site[0].cover_video}
                type="video/mp4"
              /> */}
          </video>
        </div>
        <p className="pt-12 pb-10 text-[1rem] font-sans text-justify md:text-left font-semibolf leading-6 md:hidden">
          {props.siteFestival && props.siteFestival[0].textvideo}
        </p>
      </div>
    </div>
  );
}
