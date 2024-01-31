import { useState, useEffect, CSSProperties } from 'react'
import { MainButton } from './MainButton'
import { useLanguage } from '@/lib/language'
import styles from '@/components/Bg.module.css'

export function CursorFollower(props: { isVisible: boolean }) {
  const { language } = useLanguage()
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const { isVisible } = props
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPos({ x: e.pageX - 130, y: e.pageY - 40 })
    }

    if (isVisible) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isVisible])

  if (!isVisible) {
    return null
  }
  const followerStyle: CSSProperties = {
    position: 'absolute',
    left: cursorPos.x,
    top: cursorPos.y,
    // Add more styles as needed, e.g., width, height, etc.
  }
  return (
    <div
      className="sm:flex sm:justify-center hidden w-max h-max whitespace-nowrap"
      style={followerStyle}
    >
      <a
        href="/lff2024/tickets"
        className={`flex justify-center ${styles.pinkBg} h-max no-underline font-changa rounded-xl border-solid border-4 border-black`}
      >
        <h2 className="text-white text-center text-[1.5rem] md:text-[2rem] leading-8 md:leading-9 uppercase font-extrabold w-full sm:p-5 md:p-6 lg:p-7 xl:p-8 sm:px-8 md:px-9 lg:px-10 xl:px-12">
          {language === 'en' ? 'Get tickets' : 'Ingressos'}
        </h2>
      </a>
    </div>
  )
}
