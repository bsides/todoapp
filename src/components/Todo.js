import React from 'react'

const Todo = ({ onClick, removeTodo, id, text, isDone }, props) => {
  return (
    <li onClick={onClick}>
      <span
        style={{
          textDecoration: isDone ? 'line-through' : 'none'
        }}
      >
        {text}
      </span>
    </li>
  )
}

export default Todo
