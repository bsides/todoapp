import React, { Component } from 'react'

class EditTodo extends Component {
  state = {
    isEditing: this.props.isEditing || false,
    text: this.props.text
  }

  handleFocus = () => {
    if (this.state.isEditing) {
      if (typeof this.props.onFocusOut === 'function') {
        this.props.onFocusOut(this.state.text)
      }
    } else {
      if (typeof this.props.onFocus === 'function') {
        this.props.onFocus(this.state.text)
      }
    }

    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  handleChange = () => {
    this.setState({
      text: this.textInput.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            className={this.props.inputClassName}
            ref={input => {
              this.textInput = input
            }}
            value={this.state.text}
            onChange={this.handleChange}
            onBlur={this.handleFocus}
            style={{
              width: this.props.inputWidth,
              height: this.props.inputHeight,
              fontSize: this.props.inputFontSize,
              fontWeight: this.props.inputFontWeight,
              borderWidth: this.props.inputBorderWidth
            }}
            maxLength={this.props.inputMaxLength}
            placeholder={this.props.inputPlaceHolder}
            tabIndex={this.props.inputTabIndex}
            key={this.props.key}
            onSubmit={this.handleSubmit}
            autoFocus
          />
        </div>
      )
    }

    return (
      <label
        className={this.props.labelClassName}
        onClick={this.handleFocus}
        style={{
          fontSize: this.props.labelFontSize,
          fontWeight: this.props.labelFontWeight
        }}
      >
        {this.state.text}
      </label>
    )
  }
}

export default EditTodo
