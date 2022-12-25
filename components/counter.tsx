'use client'

import React, { useState } from 'react'

const Counter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0)
  return (

    <div>
      {count}
      <button 
        onClick={() => setCount(count + 1)}
      >
        add to counter
      </button>
      counter
    </div>
  )
}

export default Counter