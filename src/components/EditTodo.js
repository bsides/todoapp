import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { FormControl, FormHelperText } from 'material-ui/Form'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  textInput: {
    width: 500
  },
  editInput: {
    paddingLeft: '8px',
    paddingRight: '16px',
    fontFamily: `"IBM Plex Mono"`,
    fontWeight: 600
  }
})

class EditTodo extends Component {
  state = {
    text: this.props.text || ''
  }

  handleBlur = e => {
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
    const { isEditing, classes } = this.props
    const label = isEditing ? 'Editing this todo' : 'New Todo'
    if (isEditing) {
      return (
        <TextField
          className={classes.editInput}
          type="text"
          autoFocus={true}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
          margin="none"
          id="full-width"
          InputProps={{
            disableUnderline: true,
            classes: {
              input: classes.editInput
            }
          }}
          fullWidth
        />
      )
    } else {
      return (
        <div className={classes.container}>
          <FormControl
            className={classes.formControl}
            aria-describedby="name-helper-text"
          >
            <TextField
              className={classes.textInput}
              label={label}
              type="text"
              autoFocus={true}
              value={this.state.text}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              onKeyDown={this.handleSubmit}
              margin="normal"
              fullWidth
            />
            <FormHelperText id="name-helper-text">
              {this.props.placeholder}
            </FormHelperText>
          </FormControl>
        </div>
      )
    }
  }
}

export default withStyles(styles)(EditTodo)
