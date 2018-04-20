import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import * as TodoActions from './redux/actions'

const App = ({ todos, actions }) => (
  <div>
    <AddTodo addTodo={actions.addTodo} />
    <Todos todos={todos} actions={actions} />
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
