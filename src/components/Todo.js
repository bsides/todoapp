import React, { Component } from 'react'
import EditTodo from './EditTodo'

export default class Todo extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos.length > 0 &&
          todos.map(todo => {
            return (
              <li
                key={todo.id}
                data-todo={todo.id}
                onClick={this.props.toggleTodo}
              >
                <span
                  style={{
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                    display: todo.isEditing ? 'none' : 'inline'
                  }}
                >
                  {todo.text}
                </span>
                <EditTodo text={todo.text} />
                <button
                  type="button"
                  className="delete-todo"
                  data-todo={todo.id}
                  onClick={this.props.removeTodo}
                >
                  x
                </button>
              </li>
            )
          })}
      </ul>
    )
  }
}
