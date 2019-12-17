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

    // completedTodoList: this.state.currentCategoryTodoList.filter(todo => todo.isComplete === true)

    this.updateTodoList = this.updateTodoList.bind(this);
    this.viewCurrentCategoryTodoList = this.viewCurrentCategoryTodoList.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.toggleTodoComplete = this.toggleTodoComplete.bind(this)
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

    console.log('updateTodoList 호출됨')
    console.log('todoList', this.state.todoList, 'currentCategoryTodoList', this.state.currentCategoryTodoList)
  }

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

  removeTodo(id) {
    const removedArr = this.state.todoList.filter(todo => todo.id !== id)
    
    this.viewCurrentCategoryTodoList(this.state.currentCategory, removedArr)

    console.log('removeTodo 호출됨')
  }

  removeCategory(category) {
    const removedArr = this.state.todoList.filter(todo => todo.id !== category)

    this.viewCurrentCategoryTodoList('미분류', removedArr);

    console.log('removeCategory 호출됨')
  }

  toggleTodoComplete(id) {
    // 뭔가가 오면 해당 id를 찾아서, isComplete값만 반전시킴
    const completedTodo = this.state.todoList.filter(todo => todo.id === id)[0];
    completedTodo.isComplete = !completedTodo.isComplete;
    const changedArr = this.state.todoList.filter(todo => todo.id !== id).concat(completedTodo);

    this.viewCurrentCategoryTodoList(this.state.currentCategory, changedArr);

    console.log('toggleTodoComplete 호출됨')
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
        />
      </main>
    )
  }
}

export default App;
