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
      onClick={scrollToTop}
      className="bg-yellow-500 p-3 rounded-full fixed z-[62] bottom-4 right-6 md:hidden"
    >
      <ArrowLineUp size={44} />
    </div>
  )
}
