import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';
function TodoList() {
const[todos,setTodos] = useState([
    { id: 1, text: 'Set off to the mosque', completed: false },
    { id: 2, text: 'Prepare the kids to school', completed: true },
    { id: 2, text: 'To my daily routine exercise', completed: true },
    { id: 2, text: 'Take my bath and keep learning', completed: true },
])

const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
     <h2>Todo List</h2>
      <AddTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
              Delete
            </button>
          </li>  
         ))}
      </ul>
    </div>
  )
}

export default TodoList;