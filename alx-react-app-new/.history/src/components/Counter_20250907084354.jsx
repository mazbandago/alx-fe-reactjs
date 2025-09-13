import { useState } from "react";
import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClickDecrease (){
        setCount(prev => prev - 1)
    }

    const para={
        fontSize: '1.2rem'
    }

  return (
    <div style={{border:"2px solid black", borderRadius:"10px", backgroundColor:"gray", padding:"10px", height:"120px"  }}>
        <p style={para}>Current Count:{count} </p>
        <button onClick = {() => setCount(count + 1)}>Increment</button>
        <button onClick={handleClickDecrease}>Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}
