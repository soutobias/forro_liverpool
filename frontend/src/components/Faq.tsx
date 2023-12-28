'use client'

import { faChevronDown, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SpeechBubbles } from '../assets/speech_bubbles'
import { useState, useEffect } from 'react'
import styles from './Bg.module.css'
import { fetchApi } from '@/lib/api'

interface QuestionProps {
  question: string
  answer: string
}

export function FaqQuestion(props: QuestionProps) {
  const { question, answer } = props
  const url = 'api/v1/questions'

  useEffect(() => {
    fetchApi(url, setShowQuestion)
  }, [])

  const [showQuestion, setShowQuestion] = useState(false)
  function handleToogleQuestion() {
    setShowQuestion(!showQuestion)
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
            icon={showQuestion ? faChevronDown : faChevronLeft}
            className="text-xl"
          />
        </div>
        {showQuestion && (
          <div className="pt-4">
            <p className="text-[1rem] leading-6 font-semibold font-sans">
              {answer}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <div
      className={`pt-20 pb-20 font-changa pl-4 pr-4 text-white ${styles.blackBg}`}
      id="faq"
    >
      <h1 className="pt-0 pb-12 text-[2rem] leading-10 font-extrabold">FAQ</h1>
      <FaqQuestion
        question="What is forró?"
        answer="Forró is culture from the northeast of Brazil that quickly spread to the rest of the country. It is a style of music, dance, and community events that are now celebrated all over the world. The music traditionally employs just 3 instruments: the accordion, the triangle, and the zabumba (a type of drum). Interested in taking a listen? Check out our Spotify playlist, Forró Liverpool."
      />
      <FaqQuestion
        question="What style of forró do you teach?"
        answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
      />
      <FaqQuestion
        question="Is there any sort of registration process to sign up for classes?"
        answer="This is the answer. Answer goes here. This is the answer. Answer goes here. This is the answer. Answer goes here."
      />
    </div>
  )
}
