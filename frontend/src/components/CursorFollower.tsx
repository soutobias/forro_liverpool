import { useState, useEffect, CSSProperties } from 'react'
import { MainButton } from './MainButton'
import { useLanguage } from '@/lib/language'

export function CursorFollower(props: { isVisible: boolean }) {
  const { language } = useLanguage()
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const { isVisible } = props
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPos({ x: e.pageX, y: e.pageY })
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
    left: cursorPos.x - 50,
    top: cursorPos.y - 40,
    // Add more styles as needed, e.g., width, height, etc.
  }
  return (
    <div
      style={followerStyle}
      className="sm:flex sm:justify-center hidden w-max"
    >
      <MainButton
        href="/lff2024/tickets"
        content={language === 'en' ? 'Get Tickets' : 'Ingressos'}
        bg="white"
        font="black"
      />
    </div>
  )
}
