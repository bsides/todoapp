import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import EditTodo from '../components/EditTodo'

export const AddTodo = ({ addTodo }) => {
  return (
    <header className="header">
      <h1>TodoApp</h1>
      <EditTodo
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            addTodo(text)
          }
        }}
        placeholder="Input here what need to be done"
      />
    </header>
  )
}

export default connect(null, { addTodo })(AddTodo)
