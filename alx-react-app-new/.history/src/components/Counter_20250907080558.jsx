import { useState } from "react";
import React from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button>Increment</button>
        <button>Increment</button>
        <button>Increment</button>

    </div>
  )
}
