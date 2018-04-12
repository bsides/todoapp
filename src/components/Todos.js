import React, { Component } from 'react'
import Todo from './Todo'

export default class Todos extends Component {
  initialTodoId = 0
  state = {
    inputTodo: '',
    todos: []
  }
  handleChange = e => {
    this.setState({ inputTodo: e.currentTarget.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const text = this.state.inputTodo
    const todo = {
      id: ++this.initialTodoId,
      text,
      isDone: false
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
      inputTodo: ''
    }))
  }
  removeTodo = e => {
    const todoToBeRemoved = parseInt(e.currentTarget.dataset.todo, 10)
    const todosFiltered = this.state.todos.filter(
      item => item.id !== todoToBeRemoved
    )
    this.setState({ todos: todosFiltered })
  }
  editTodo = e => {
    e.preventDefault()
    const todoToBeEdited = parseInt(e.currentTarget.dataset.todo, 10)
    const todosFiltered = this.state.todos.map(item => {
      if (item.id === todoToBeEdited) {
        item.isEditing = !item.isEditing
      }
      return item
    })
    this.setState({ todos: todosFiltered })
  }
  toggleTodo = e => {
    const todoToBeToggled = parseInt(e.currentTarget.dataset.todo, 10)
    const todosFiltered = this.state.todos.map(item => {
      if (item.id === todoToBeToggled) {
        item.isDone = !item.isDone
      }
      return item
    })
    this.setState({ todos: todosFiltered })
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
          <Todo
            removeTodo={this.removeTodo}
            editTodo={this.editTodo}
            toggleTodo={this.toggleTodo}
            {...this.state}
          />
        </form>
      </div>
    )
  }
}
