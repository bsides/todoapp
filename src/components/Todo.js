import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { todos } = this.props
    if (todos.length > 0) {
      return <div>{todos.map((todo, i) => <div key={i}>{todo}</div>)}</div>
    }
  }
}
