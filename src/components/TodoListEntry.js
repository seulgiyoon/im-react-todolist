import React from 'react';

class TodoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="todoList-entry">
        <label></label>
        <input
          type="text"
          value={this.props.todo.text}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

// label에 온클릭 이벤트로, 완료유무에 따라서 나눠야 한다.
// 더블클릭 전에는 수정 못하다가 더블클릭 시 내용 수정 가능하게.. onDoubleClick?
// 수정 후 엔터 시 수정된 내용 전송
// 인풋창 크기를 글자가 보이는 거에 따아아악 맞춰야 하지 않나?? 그 외의 부분 클릭했을 때 다른 반응이 나오도록

export default TodoListEntry;