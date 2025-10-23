import React, { useState } from 'react'

function TodoList() {
const[todos,setTodos] = useState([
    { id: 1, text: 'Set off to the mosque', completed: false },
    { id: 2, text: 'Prepare the kids to school', completed: true },
    { id: 2, text: 'To my daily routine exercise', completed: true },
    { id: 2, text: 'Take my bath and keep learning', completed: true },
])

  return (
    <h1>To do list</h1>
  )
}

export default TodoList;