import { useEffect, useState } from 'react'
import styles from './index.module.scss'

interface ICountDownProps {
  time: number;
  onEnd: Function;
}

const CountDown = (props: ICountDownProps) => {
  const { time, onEnd } = props
  const [count, setCount] = useState(5 || 60)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(timerId)
          onEnd && onEnd()
          return count
        }
        return count - 1
      })
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [time, onEnd])

  return <h1 className={styles.countDown}>{count}</h1>
}

export default CountDown
