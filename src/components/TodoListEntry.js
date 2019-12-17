import React from 'react';

class TodoListEntry extends React.Component {
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
          className="todoList-label-inComplete"
          
          onClick={this.handleOnClickLabel}
        ></div>
        <input
          type="text"
          id="todoList-input"
          value={this.props.todo.text}
          onChange={this.handleChange}
        />
        {this.state.isHover ? <button className="btn delete" onClick={this.handleOnClickButton}>×</button> : ''}
      </div>
    )
  }
}

// 더블클릭 전에는 수정 못하다가 더블클릭 시 내용 수정 가능하게.. onDoubleClick?
// 수정 후 엔터 시 수정된 내용 전송
// 인풋창 크기를 글자가 보이는 거에 따아아악 맞춰야 하지 않나?? 그 외의 부분 클릭했을 때 다른 반응이 나오도록

export default TodoListEntry;