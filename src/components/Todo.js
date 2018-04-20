import React from 'react'
import EditTodo from './EditTodo'
import { withStyles } from 'material-ui/styles'
import Checkbox from 'material-ui/Checkbox'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import Delete from '@material-ui/icons/Delete'

const styles = theme => ({
  done: {
    textDecoration: 'line-through'
  }
})

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
    const { todo, toggleTodo, deleteTodo, classes } = this.props
    const todoStyleClass = [
      todo.isDone && 'completed',
      this.state.isEditing && 'editing'
    ].join(' ')
    let element
    if (this.state.isEditing) {
      element = (
        <ListItem>
          <Checkbox
            type="checkbox"
            checked={todo.isDone}
            onChange={() => toggleTodo(todo.id)}
          />
          <EditTodo
            text={todo.text}
            isEditing={this.state.isEditing}
            onSave={text => this.handleSave(todo.id, text)}
          />
          <ListItemSecondaryAction onClick={() => deleteTodo(todo.id)}>
            <IconButton aria-label="Delete Todo">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    } else {
      element = (
        <ListItem>
          <Checkbox
            type="checkbox"
            checked={todo.isDone}
            onChange={() => toggleTodo(todo.id)}
          />
          <ListItemText
            onDoubleClick={this.handleDoubleClick}
            className={todo.isDone ? classes.done : ''}
          >
            {todo.text}
          </ListItemText>
          <ListItemSecondaryAction onClick={() => deleteTodo(todo.id)}>
            <IconButton aria-label="Delete Todo">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    }
    return (
      <List className={todoStyleClass}>
        {element}
        <li>
          <Divider inset />
        </li>
      </List>
    )
  }
}

export default withStyles(styles)(Todo)
