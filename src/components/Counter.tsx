import React, { useState } from 'react'
import './Counter.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      { count }
      <div>
        <button onClick={() => setCount(x => x + 1)}>inc++</button>
        <button onClick={() => setCount(x => x - 1)}>dec--</button>
      </div>
    </div>
  )
}

export default Counter
