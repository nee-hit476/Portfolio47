import { useState, useEffect } from "react"
import { AnimatedWrapper } from "./utils/AnimatedWrapper"

const LocalTime = ({className} : {className: string}) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatedWrapper className={`flex text-lg font-bold ${className}`}>
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </AnimatedWrapper>
  )
}

export default LocalTime;