'use client'

import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SpeechBubbles } from '../assets/speech_bubbles'
import { useState } from 'react'

export function FaqQuestion(props: { question: string; answer: string }) {
  const [showQuestion, setShowQuestion] = useState(false)
  function handleToogleQuestion() {
    setShowQuestion(!showQuestion)
  }

  return (
    <div className="pl-2 pr-2 pt-4">
      <div className="border-b-2 pb-6 border-b-gray-100">
        <div className="flex justify-between" onClick={handleToogleQuestion}>
          <div className="flex justify-left">
            <SpeechBubbles />
            <p className="pl-4 text-[1.25rem] leading-5 font-sans font-semibold">
              {props.question}
            </p>
          </div>
          <FontAwesomeIcon
            icon={showQuestion ? faChevronDown : faChevronRight}
            className="text-xl"
          />
        </div>
        {showQuestion && (
          <div className="pt-6">
            <p className="text-[1rem] leading-5 font-sans font-normal">
              {props.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <div className="pt-20 pb-20" id="faq">
      <h1 className="pl-2 pb-8 text-[2rem] leading-9 font-sans font-semibold">
        FAQ
      </h1>
      <FaqQuestion
        question="Is this a question?"
        answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
      />
      <FaqQuestion
        question="Is this a question?"
        answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
      />
      <FaqQuestion
        question="Is this a question?"
        answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
      />
    </div>
  )
}
