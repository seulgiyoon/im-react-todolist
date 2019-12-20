import React from 'react';
import CompletedList from './CompletedList';
import TodoListEntry from './TodoListEntry';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.textInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  updateTodoList() {
    this.props.updateTodoList(this.state.text);
    this.setState({ text: '' });
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.updateTodoList();
    }
  }

  handleBlurEvent() {
    if (this.state.text) {
      this.updateTodoList();
    }
  }

  render() {
    return (
      <section>
        <div id="todo-list-nav">
          <h2>{this.props.currentCategory.name}</h2>
          <button className="btn" onClick={() => this.textInput.current.focus()}>
            일과 추가
          </button>
        </div>
        {this.props.completedTodoList.length > 0 ? (
          <CompletedList
            completedTodoList={this.props.completedTodoList}
            toggleTodoComplete={this.props.toggleTodoComplete}
            removeTodo={this.props.removeTodo}
          />
        ) : (
          ''
        )}
        {this.props.currentCategoryTodoList.map(todo => (
          <TodoListEntry
            key={todo.id}
            todo={todo}
            removeTodo={this.props.removeTodo}
            toggleTodoComplete={this.props.toggleTodoComplete}
            updateTodoText={this.props.updateTodoText}
          />
        ))}
        <div id="todo-default-form">
          <input
            ref={this.textInput}
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterEvent}
            onBlur={this.handleBlurEvent}
            placeholder="오늘의 일과"
          />
        </div>
      </section>
    );
  }
}

export default TodoList;
