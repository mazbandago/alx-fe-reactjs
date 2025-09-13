import { useState } from "react";
import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClickDecrease (){
        setCount(prev => prev - 1)
    }

    const para={
        fontSize: '1.2rem',
        color: "black"
    }
    const btn ={
        padding: "10px",
        margin: "5px",
        borderRadius:"20px",
    }

  return (
    <div style={{border:"2px solid black", borderRadius:"10px", backgroundColor:"gray", padding:"10px", height:"120px"  }}>
        <p style={para}>Current Count:{count} </p>
        <button style={btn} onClick = {() => setCount(count + 1)}>Increment</button>
        <button  style={btn} onClick={handleClickDecrease}>Decrement</button>
        <button  style={btn} onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}
