import React, { Component } from 'react'

export default class Todo extends Component {
  state = {
    inputTodo: '',
    todos: []
  }
  handleChange = e => {
    this.setState({ inputTodo: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const todo = this.state.inputTodo
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
      inputTodo: ''
    }))
  }
  render() {
    const { todos } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            onChange={this.handleChange}
            value={this.state.inputTodo}
          />
          <input type="submit" onClick={this.handleSubmit} value="Add Todo" />
          {todos.length > 0 &&
            todos.map((todo, i) => <div key={i}>{todo}</div>)}
        </form>
      </div>
    )
  }
}
