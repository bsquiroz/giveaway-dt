import { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

type ContadorProps = {
  start: number
  end: number
  duration: number
  symbol?: string
  style?: string
}

export const Counter = ({ start, end, duration, style }: ContadorProps) => {
  const [active, setActive] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => setActive(true)}
      onExit={() => setActive(false)}
    >
      {active && <CountUp start={start} end={end} duration={duration} className={style} />}
    </ScrollTrigger>
  )
}