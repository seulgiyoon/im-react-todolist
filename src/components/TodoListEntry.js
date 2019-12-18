import React from 'react';
import Input from './Input';

class TodoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isHover: false,
      isEditable: false,
    };

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
    this.handleOnClickLabel = this.handleOnClickLabel.bind(this);
    this.handleOnClickText = this.handleOnClickText.bind(this);
    this.changeEditableState = this.changeEditableState.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({
      isHover: true,
    });
  }

  handleOnMouseLeave() {
    this.setState({
      isHover: false,
    });
  }

  handleOnClickButton() {
    this.props.removeTodo(this.props.todo.id);
  }

  handleOnClickLabel() {
    this.props.toggleTodoComplete(this.props.todo.id);
  }

  handleOnClickText() {
    this.setState({
      text: this.props.todo.text,
      isEditable: true,
    });
  }

  changeEditableState() {
    this.setState({
      isEditable: false,
    });
  }

  render() {
    return (
      <div
        className="todoList-entry"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div className="todoList-label-inComplete" onClick={this.handleOnClickLabel}></div>
        {this.state.isEditable ? (
          <Input
            text={this.state.text}
            updateTodoText={this.props.updateTodoText}
            todo={this.props.todo}
            changeEditableState={this.changeEditableState}
          />
        ) : (
          <p className="todoList-text" onClick={this.handleOnClickText}>
            {this.props.todo.text}
          </p>
        )}
        {this.state.isHover ? (
          <button className="btn delete" onClick={this.handleOnClickButton}>
            ×
          </button>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default TodoListEntry;
