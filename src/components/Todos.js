import React from 'react'
import { connect } from 'react-redux'
import * as TodoActions from '../redux/actions'
import { bindActionCreators } from 'redux'
import Todo from './Todo'

const Todos = ({ todos, actions }) => {
  return (
    <section style={{ width: 500 }}>
      {todos.map(todo => <Todo key={todo.id} todo={todo} {...actions} />)}
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
