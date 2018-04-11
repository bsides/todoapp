import React, { Component } from 'react'
import Todo from './Todo'

export default class Todos extends Component {
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
          <Todo todos={this.state.todos} />
        </form>
      </div>
    )
  }
}
