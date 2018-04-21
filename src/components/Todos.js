import React from 'react'
import { connect } from 'react-redux'
import * as TodoActions from '../redux/actions'
import { bindActionCreators } from 'redux'
import Todo from './Todo'
import List, { ListItem, ListSubheader } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const Todos = ({ todos, actions }) => {
  if (!todos.length) return null
  return (
    <List subheader={<ListSubheader>Double click to edit</ListSubheader>}>
      {todos.map(todo => (
        <React.Fragment key={todo.id}>
          <ListItem>
            <Todo key={todo.id} todo={todo} {...actions} />
          </ListItem>
          <li>
            <Divider inset />
          </li>
        </React.Fragment>
      ))}
    </List>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
