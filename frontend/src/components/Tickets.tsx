import Link from 'next/link'

export function Tickets() {
  return (
    <div className="flex justify-center">
      <Link
        href="#"
        className="no-underline bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 ml-2 mr-2"
      >
        Tickets
      </Link>
    </div>
  )
}
