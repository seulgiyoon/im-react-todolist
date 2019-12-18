import React from 'react';
import Input from './Input'

class TodoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isHover: false,
      isEditable: false,
    }

    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
    this.handleOnClickLabel = this.handleOnClickLabel.bind(this);
    this.handleOnClickText = this.handleOnClickText.bind(this);
    this.changeEditableState = this.changeEditableState.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({
      isHover: true
    });
  }

  handleOnMouseLeave() {
    this.setState({
      isHover: false
    });
  }

  handleOnClickButton() {
    this.props.removeTodo(this.props.todo.id);
  }

  handleOnClickLabel() {
    this.props.toggleTodoComplete(this.props.todo.id);
  }

  handleOnClickText() {
    this.setState((state) => {
      return {
        text: this.props.todo.text,
        isEditable: !state.isEditable
      };
    });
  }

  changeEditableState() {
    this.setState({
      isEditable: false
    });
  }

  render() {
    return (
      <div 
        className="todoList-entry"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <div 
          className="todoList-label-inComplete"
          onClick={this.handleOnClickLabel}
        ></div>
        {this.state.isEditable ?
        <Input 
          text={this.state.text}
          updateTodoText={this.props.updateTodoText}
          todo={this.props.todo}
          changeEditableState={this.changeEditableState}
        />
        : <p 
          className="todoList-text" 
          onClick={this.handleOnClickText}
        >
          {this.props.todo.text}
        </p>
        }
        {this.state.isHover ? <button className="btn delete" onClick={this.handleOnClickButton}>×</button> : ''}
      </div>
    )
  }

}

// 더블클릭 시 editable 값이 true로 변하고, true일 시 input을 로딩함. 아닐 시 일반 div를 로딩?? div를 더블클릭하면 input으로 변하는.
// 더블클릭 전에는 수정 못하다가 더블클릭 시 내용 수정 가능하게.. OnClick?
// 수정 후 엔터 시 수정된 내용 전송

export default TodoListEntry;
