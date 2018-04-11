import React, { Component } from 'react'

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
                onContextMenu={this.props.editTodo}
              >
                <span
                  style={{
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                    display: todo.isEditing ? 'none' : 'inline'
                  }}
                >
                  {todo.text}
                </span>
                <input
                  type={todo.isEditing ? 'text' : 'hidden'}
                  value={todo.text}
                  onChange={this.props.handleChange}
                />
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
