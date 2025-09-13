import { useState } from "react";
import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClickDecrease (){
        setCount(prev => prev + 1)
    }

  return (
    <div>
        <p>Current Count:{count} </p>
        <button onClick = {() => setCount(count + 1)}>Increment</button>
        <button onClick={handleClickDecrease}>Decrement</button>
        <button>Reset</button>
    </div>
  )
}
