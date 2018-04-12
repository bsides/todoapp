import React from 'react'
import EditTodo from './EditTodo'

const Todo = props => {
  const { id, text, isDone, isEditing } = props.todo
  const { removeTodo, toggleTodo } = props
  return (
    <li data-todo={id} onClick={toggleTodo}>
      <pre>{JSON.stringify(props)}</pre>
      <span
        style={{
          textDecoration: isDone ? 'line-through' : 'none',
          display: isEditing ? 'none' : 'inline'
        }}
      >
        {text}
      </span>
      <EditTodo text={text} />
      <button
        type="button"
        className="delete-todo"
        data-todo={id}
        onClick={removeTodo}
      >
        x
      </button>
    </li>
  )
}

export default Todo
