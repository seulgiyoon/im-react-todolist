import React from 'react';
// import CompleteTodoList from '';
import TodoListEntry from './TodoListEntry';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.props.updateTodoList(this.state.text);
      this.setState( { text: '' });
    }
  }

  handleBlurEvent(e) {
    if (this.state.text) {
      this.props.updateTodoList(this.state.text);
      this.setState( { text: '' });
    }
  }

  render() {
    return (
      <section>
        <div id="category-title">
          <h2>{this.props.currentCategory}</h2>
        </div>
        {/* <CompleteTodoList /> */}
        {this.props.currentCategoryTodoList.map(todo =>
          <TodoListEntry
            key={todo.id}
            todo={todo}
          />
        )}
        <div className="default-input">
          <label></label>
          <input 
            type="text" 
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterEvent}
            onBlur={this.handleBlurEvent}
            placeholder="오늘의 할일"
          />
        </div>
      </section>
    )
  }
}

// label이든 뭔가 클릭할 수 있는 아이콘이든이, input에 커서가 갔을 때 display 되도록 해야 함. 그 전에는 hidden

export default TodoList;