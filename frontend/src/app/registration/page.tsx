'use client'

import TicketTailorWidget from '@/components/TicketTailorWidget'
import Link from 'next/link'

export interface keyable {
  [key: string]: string
}

export default function RegistrationSuccess() {
  return (
    <div className="w-full h-full text-center pl-12 pr-12">
      <h1 className="text-[2rem] pt-[18rem] pb-0 leading-10 font-semibold">
        Congrats!
      </h1>
      <TicketTailorWidget />
      <h1 className="text-[2rem] pt-0 leading-10 font-semibold">
        You made it to Eventbrite!
      </h1>
      <div className="pt-20">
        <Link
          href="/"
          className="text-[1.5rem] flex justify-center font-semibold no-underline pb-12 hover:opacity-60 transition-opacity"
        >
          <div>
            <p className="text-center">&lt; Back to</p>
            <p className="text-center">Forró Liverpool</p>
          </div>
        </Link>
        <Link
          href="/lff2024"
          className="text-[1.5rem] flex justify-center font-semibold no-underline pt-1 hover:opacity-60 transition-opacity"
        >
          <div>
            <p className="text-center">&lt; Back to</p>
            <p className="text-center">Liverpool Forró Festival</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
