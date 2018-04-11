import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos.length > 0 && todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    )
  }
}
