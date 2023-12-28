'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './FrameImportant.module.css'
import { keyable } from './ClassEvent'

interface FrameProps {
  site: keyable[]
}

export function FrameImportant(props: FrameProps) {
  const InfiniteLooper = function InfiniteLooper({
    speed,
    direction,
    children,
  }: {
    speed: number
    direction: 'right' | 'left'
    children: React.ReactNode
  }) {
    const [looperInstances, setLooperInstances] = useState(1)
    const outerRef = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    function resetAnimation() {
      if (innerRef?.current) {
        innerRef.current.setAttribute('data-animate', 'false')

        setTimeout(() => {
          if (innerRef?.current) {
            innerRef.current.setAttribute('data-animate', 'true')
          }
        }, 10)
      }
    }

    const setupInstances = useCallback(() => {
      if (!innerRef?.current || !outerRef?.current) return

      const { width } = innerRef.current.getBoundingClientRect()

      const { width: parentWidth } = outerRef.current.getBoundingClientRect()

      const widthDeficit = parentWidth - width

      const instanceWidth = width / innerRef.current.children.length

      if (instanceWidth) {
        setLooperInstances(
          looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
        )
      }

      resetAnimation()
    }, [looperInstances])

    useEffect(() => setupInstances(), [setupInstances])

    useEffect(() => {
      window.addEventListener('resize', setupInstances)

      return () => {
        window.removeEventListener('resize', setupInstances)
      }
    }, [looperInstances, setupInstances])
    return (
      <div className={styles.looper} ref={outerRef}>
        <div
          className={styles.looper__innerList}
          ref={innerRef}
          data-animate="true"
        >
          {[...Array(looperInstances)].map((_, ind) => (
            <div
              key={ind}
              className={styles.looper__listInstance}
              style={{
                animationDuration: `${speed}s`,
                animationDirection:
                  direction === 'right' ? 'reverse' : 'normal',
              }}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`w-full h-12 bg-pink-400 items-center ${styles.frameShadow}`}
    >
      <Link
        href="/lff2024"
        className="no-underline hover:opacity-60 transition-opacity items-center"
      >
        {props.site && (
          <InfiniteLooper speed={10} direction="left">
            <div
              className={`uppercase pt-3 text-base tracking-[0.053rem] font-changa font-bold items-center ${styles.textShadow}`}
            >
              {`${props.site[0].frame}`}
            </div>
          </InfiniteLooper>
        )}
      </Link>
    </div>
  )
}
