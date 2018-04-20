import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import EditTodo from '../components/EditTodo'
import Typography from 'material-ui/Typography'

export const AddTodo = ({ addTodo }) => {
  return (
    <div>
      <Typography variant="display3">Todo App</Typography>
      <EditTodo
        newTodo
        onSave={text => {
          if (text.length !== 0) {
            addTodo(text)
          }
        }}
        placeholder="Input here what need to be done"
      />
    </div>
  )
}

export default connect(null, { addTodo })(AddTodo)
