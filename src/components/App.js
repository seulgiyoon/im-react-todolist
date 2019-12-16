import React from 'react';
import TodoList from './TodoList';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentCategoryTodoList: [],
      currentCategory: '분류하지 않은 할일',
      completedTodoList: []
    }

    // completedTodoList: this.state.currentCategoryTodoList.filter(todo => todo.isComplete === true)

    this.updateTodoList = this.updateTodoList.bind(this);
    // this.viewCurrentCategoryTodoList = this.viewCurrentCategoryTodoList.bind(this);
  }
  
  id = 0
  
  updateTodoList(text) {
    const { todoList, currentCategory, currentCategoryTodoList } = this.state;
    const newTodo = {
      id: this.id,
      text: text,
      category: currentCategory,
      isComplete: false
    }

    this.setState({
      todoList: todoList.concat(newTodo),
      currentCategoryTodoList: currentCategoryTodoList.concat(newTodo)
    });
    this.id = this.id + 1;
  }

  // viewCurrentCategoryTodoList(category) {
  //   this.setState({
  //     currentCategoryTodoList: this.state.todoList
  //       .filter(todo => todo.category === category)
  //   });
  // }

  render() {
    return (
      <main>
        <Nav />
        <TodoList
          currentCategory={this.state.currentCategory}
          updateTodoList={this.updateTodoList}
          currentCategoryTodoList={this.state.currentCategoryTodoList}
        />
      </main>
    )
  }
}

export default App;