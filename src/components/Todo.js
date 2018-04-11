import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos.length > 0 &&
          todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo}{' '}
                <button
                  type="button"
                  className="delete-todo"
                  data-todo={todo}
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
