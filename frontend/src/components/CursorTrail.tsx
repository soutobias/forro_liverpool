import { useLanguage } from '@/lib/language'
import styles from '@/components/Bg.module.css'
export function CursorTrail(props: { trail: any }) {
  const { trail } = props
  const { language } = useLanguage()

  return (
    <>
      {trail.map(({ x, y, key }: { x: any; y: any; key: any }) => (
        <div
          key={key}
          className="cursor-trail sm:flex sm:justify-center hidden w-max h-max whitespace-nowrap"
          style={{
            left: x,
            top: y,
            position: 'absolute',
          }}
        >
          <a
            href="/lff2024/tickets"
            className={`flex justify-center ${styles.pinkBg} h-max no-underline font-changa rounded-xl border-solid border-4 border-black`}
          >
            <p className="text-white text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 uppercase font-extrabold w-full p-5">
              {language === 'en' ? 'Get tickets' : 'Ingressos'}
            </p>
          </a>
        </div>
      ))}
    </>
  )
}
