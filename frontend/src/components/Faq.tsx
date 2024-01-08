'use client'

import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SpeechBubbles } from '../assets/speech_bubbles'
import styles from './Bg.module.css'
import { useEffect, useState } from 'react'
import { fetchApi } from '@/lib/api'
import { keyable } from './ClassEvent'
import { ArrowUpRight } from 'phosphor-react'

interface FaqProps {
  answer?: any
  question?: any
}

export function Faq(props: { isFestival: boolean }) {
  const { isFestival } = props

  const urlQuestions = 'api/v1/questions'

  const [questions, setQuestions] = useState<keyable[] | null>(null)

  useEffect(() => {
    fetchApi(urlQuestions, setQuestions)
  }, [])

  const filteredQuestions = questions?.filter(
    (item) => item.is_festival === isFestival,
  )

  return (
    <div
      className={`pt-20 pb-20 font-changa px-4 md:px-[23rem] md:pb-40 text-white ${styles.blackBg}`}
      id="faq"
    >
      <h1 className="pt-0 pb-12 text-[2rem] leading-10 font-extrabold">FAQ</h1>
      {filteredQuestions &&
        filteredQuestions.map((item: any) => (
          <FaqQuestion
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
    </div>
  )
}

export function FaqQuestion({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false)
  const formatAnswer = (answer: string) => {
    if (answer.includes('Spotify playlist')) {
      return answer.replace(
        'Spotify playlist, Forró Liverpool.',
        '<a class="flex gap-1" href="https://open.spotify.com/playlist/6Luuh8cKFXtEY8t2MIL2P4?si=EEAc2-uQQaarFD1_m5MsjA&pi=e-qxmnaQS7QNSJ&nd=1&dlsi=6f2d3024fc934803" target="_blank">Spotify playlist, Forró Liverpool<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg><span></a>',
      )
    } else {
      return answer
    }
  }

  function handleToogleQuestion() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="pt-4">
      <div className="border-b-2 pb-4 border-b-gray-100">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleToogleQuestion}
        >
          <div className="flex justify-left w-10/12 items-center">
            <div>
              <SpeechBubbles />
            </div>
            <div>
              <p className="pl-4 text-[1.25rem] leading-6 font-extrabold">
                {question}
              </p>
            </div>
          </div>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronLeft}
            className="text-xl"
          />
        </div>
        {isOpen && (
          <div className="pt-4 flex">
            <div>
              <div
                className="text-[1rem] leading-6 font-semibold font-sans"
                dangerouslySetInnerHTML={{ __html: formatAnswer(answer) }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
