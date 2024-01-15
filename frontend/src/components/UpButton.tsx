import { UpButtonIcon } from '@/assets/upButton'
import { ArrowLineUp } from 'phosphor-react'

export function UpButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // if you want a smooth scrolling effect
    })
  }
  return (
    <div
      className="fixed z-[62] bottom-4 right-6 md:hidden"
      onClick={scrollToTop}
    >
      <UpButtonIcon />
    </div>
  )
}
