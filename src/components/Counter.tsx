import React, { useState } from 'react'
import s from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      { count }
      <div>
        <button className={s.btn} onClick={() => setCount(x => x + 1)}>inc++</button>
        <button className={s.btn} onClick={() => setCount(x => x - 1)}>dec--</button>
      </div>
    </div>
  )
}

export default Counter
