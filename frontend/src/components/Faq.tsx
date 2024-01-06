'use client'

import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SpeechBubbles } from '../assets/speech_bubbles'
import styles from './Bg.module.css'
import { useState } from 'react'

interface FaqProps {
  showQuestion?: any
  setShowQuestion?: any
  answer?: any
  question?: any
}

export function Faq(props: FaqProps) {
  const { showQuestion, setShowQuestion } = props
  return (
    <div
      className={`pt-20 pb-20 font-changa pl-4 pr-4 text-white ${styles.blackBg}`}
      id="faq"
    >
      <h1 className="pt-0 pb-12 text-[2rem] leading-10 font-extrabold">FAQ</h1>
      {showQuestion &&
        showQuestion.map((item: any) => (
          <FaqQuestion
            key={item.id}
            question={item.question}
            answer={item.answer}
            setShowQuestion={setShowQuestion}
          />
        ))}
    </div>
  )
}

export function FaqQuestion({ question, answer, setShowQuestion }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleToogleQuestion() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="pt-4">
      <div className="border-b-2 pb-4 border-b-gray-100">
        <div
          className="flex justify-between items-center"
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
        <div className="pt-4">
          <p className="text-[1rem] leading-6 font-semibold font-sans">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
