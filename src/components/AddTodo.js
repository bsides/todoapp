import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  state = { textInput: '' }
  handleInput = e => this.setState({ textInput: e.currentTarget.value })
  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.textInput.trim()) return
    this.props.dispatch(addTodo(this.state.textInput))
    this.setState({ textInput: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.textInput} onChange={this.handleInput} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
