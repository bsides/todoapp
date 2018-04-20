import React, { Component } from 'react'

class EditTodo extends Component {
  state = {
    text: this.props.text || ''
  }

  handleFocus = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  render() {
    const inputStyleClass = [
      this.props.isEditing && 'edit',
      this.props.newTodo && 'new-todo'
    ].join(' ')
    return (
      <input
        className={inputStyleClass}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

export default EditTodo
