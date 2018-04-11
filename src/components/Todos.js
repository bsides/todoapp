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
  removeTodo = e => {
    const todoToBeRemoved = e.target.dataset.todo
    const todoRemoved = this.state.todos.filter(
      item => item !== todoToBeRemoved
    )
    this.setState({ todos: todoRemoved })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            value={this.state.inputTodo}
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Todo" onClick={this.handleSubmit} />
          <Todo todos={this.state.todos} removeTodo={this.removeTodo} />
        </form>
      </div>
    )
  }
}
