import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import Todo from './Todo'

const Todos = ({ todos, toggleTodo }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
