import { useState, useEffect, CSSProperties } from 'react'
import { MainButton } from './MainButton'
import { useLanguage } from '@/lib/language'

export function CursorTrail(props: { isVisible: boolean }) {
  const [trail, setTrail] = useState<any[]>([])
  const { language } = useLanguage()
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const { isVisible } = props

  useEffect(() => {
    if (isVisible) {
      const handleMouseMove = (e: any) => {
        setTrail((currentTrail) => [
          ...currentTrail,
          { x: e.pageX - 50, y: e.pageY - 40, key: Date.now() },
        ])
      }

      window.addEventListener('mousemove', handleMouseMove)

      const intervalId = setInterval(() => {
        setTrail((currentTrail) => {
          if (currentTrail.length > 0) {
            return currentTrail.slice(1)
          }
          return currentTrail
        })
      }, 100) // Adjust the time here for trail length

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        clearInterval(intervalId)
      }
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
    <>
      {trail.map(({ x, y, key }) => (
        <div
          key={key}
          className="cursor-trail sm:flex sm:justify-center hidden w-max"
          style={{
            left: x,
            top: y,
            position: 'absolute',
          }}
        >
          <MainButton
            href="/lff2024/tickets"
            content={language === 'en' ? 'Get tickets' : 'Ingressos'}
            bg="white"
            font="black"
          />
        </div>
      ))}
    </>
  )
}
