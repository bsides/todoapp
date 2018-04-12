import React from 'react'
import Todo from './Todo'

const Todos = props => {
  return (
    <div>
      <ul>
        {props.todos.length > 0 &&
          props.todos.map(todo => (
            <Todo
              key={todo.id}
              toggleTodo={props.toggleTodo}
              removeTodo={props.removeTodo}
              editTodo={props.editTodo}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  )
}

export default Todos
