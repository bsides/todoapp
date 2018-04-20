import React from 'react'
import EditTodo from './EditTodo'

class Todo extends React.Component {
  state = {
    isEditing: false
  }

  handleDoubleClick = () => {
    this.setState({ isEditing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ isEditing: false })
  }

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props
    const todoStyleClass = [
      todo.isDone && 'completed',
      this.state.isEditing && 'editing'
    ].join(' ')
    let element
    if (this.state.isEditing) {
      element = (
        <EditTodo
          text={todo.text}
          isEditing={this.state.isEditing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.isDone}
            onChange={() => toggleTodo(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          <button className="destroy" onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }
    return <li className={todoStyleClass}>{element}</li>
  }
}

export default Todo
