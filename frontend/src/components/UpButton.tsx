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
      className="bg-gray-60 p-3 rounded-full fixed z-19 bottom-4 right-6"
    >
      <ArrowLineUp size={32} />
    </div>
  )
}
