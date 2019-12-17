import React from 'react';

class CompletedListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isHover: false,
    }

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
    this.handleOnClickLabel = this.handleOnClickLabel.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  handleOnMouseEnter(e) {
    this.setState({
      isHover: true
    })
  }

  handleOnMouseLeave(e) {
    this.setState({
      isHover: false
    })
  }

  handleOnClickButton(e) {
    this.props.removeTodo(this.props.todo.id)
  }

  handleOnClickLabel(e) {
    this.props.toggleTodoComplete(this.props.todo.id)
  }

  render() {
    return (
      <div 
        className="todoList-entry"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div 
          className="todoList-label-complete"
          
          onClick={this.handleOnClickLabel}
        ></div>
        <input
          type="text"
          id="todoList-input"
          value={this.props.todo.text}
          onChange={this.handleChange}
        />
        {this.state.isHover? <button id="delete-btn" onClick={this.handleOnClickButton}>x</button> : ''}
      </div>
    )
  }
}

export default CompletedListEntry;

