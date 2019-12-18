import React from 'react';
import TodoList from './TodoList';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentCategoryTodoList: [],
      currentCategory: '미분류',
      completedTodoList: []
    }

    this.updateTodoList = this.updateTodoList.bind(this);
    this.viewCurrentCategoryTodoList = this.viewCurrentCategoryTodoList.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.toggleTodoComplete = this.toggleTodoComplete.bind(this);
    this.updateTodoText = this.updateTodoText.bind(this);
  }
  
  id = 0

  viewCurrentCategoryTodoList(category, todoArr = this.state.todoList) {
    this.setState({
      todoList: todoArr,
      currentCategory: category,
      currentCategoryTodoList: todoArr
        .filter(todo => todo.category === category && todo.isComplete === false),
      completedTodoList: todoArr
        .filter(todo => todo.category === category && todo.isComplete === true)
    });
  }

  updateTodoList(text) {
    const newTodo = {
      id: this.id,
      text: text,
      category: this.state.currentCategory,
      isComplete: false,
    }

    const updatedArr = this.state.todoList.concat(newTodo);
    this.id = this.id + 1;

    this.viewCurrentCategoryTodoList(this.state.currentCategory, updatedArr);

    // console.log('updateTodoList 호출됨');
  }

  removeTodo(id) {
    const removedArr = this.state.todoList.filter(todo => todo.id !== id);
    
    this.viewCurrentCategoryTodoList(this.state.currentCategory, removedArr);

    // console.log('removeTodo 호출됨');
  }

  removeCategory(category) {
    const removedArr = this.state.todoList.filter(todo => todo.id !== category);

    this.viewCurrentCategoryTodoList('미분류', removedArr);

    // console.log('removeCategory 호출됨');
  }

  toggleTodoComplete(id) {
    const completedTodo = this.state.todoList.filter(todo => todo.id === id)[0];
    completedTodo.isComplete = !completedTodo.isComplete;
    const changedArr = this.state.todoList
      .filter(todo => todo.id !== id).concat(completedTodo);

    this.viewCurrentCategoryTodoList(this.state.currentCategory, changedArr);

    // console.log('toggleTodoComplete 호출됨')
  }

  updateTodoText(id, text) {
    const updatedTodo = this.state.todoList.filter(todo => todo.id === id)[0];
    updatedTodo.text = text;
    const changedArr = this.state.todoList
      .filter(todo => todo.id !== id).concat(updatedTodo);

    this.viewCurrentCategoryTodoList(this.state.currentCategory, changedArr);

    console.log('updateTodoText 호출됨')
  }

  render() {
    return (
      <main>
        <Nav 
          viewCurrentCategoryTodoList={this.viewCurrentCategoryTodoList}
          removeCategory={this.removeCategory}
        />
        <TodoList
          currentCategory={this.state.currentCategory}
          updateTodoList={this.updateTodoList}
          currentCategoryTodoList={this.state.currentCategoryTodoList}
          removeTodo={this.removeTodo}
          removeCategory={this.removeCategory}
          completedTodoList={this.state.completedTodoList}
          toggleTodoComplete={this.toggleTodoComplete}
          updateTodoText={this.updateTodoText}
        />
      </main>
    )
  }
}

export default App;
