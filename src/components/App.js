import React from 'react';
import TodoList from './TodoList';
import Nav from './Nav';
import SearchList from './SearchList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      currentCategoryTodoList: [],
      currentCategory: { id: 1, name: '미분류' },
      completedTodoList: [],
      searchResult: [],
      isSearching: false,
    };

    this.viewCurrentCategoryTodoList = this.viewCurrentCategoryTodoList.bind(this);
    this.updateTodoList = this.updateTodoList.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.toggleTodoComplete = this.toggleTodoComplete.bind(this);
    this.updateTodoText = this.updateTodoText.bind(this);
    this.updateCategoryName = this.updateCategoryName.bind(this);
    this.searchTodo = this.searchTodo.bind(this);
    this.setSearchingToFalse = this.setSearchingToFalse.bind(this);
  }

  id = 0;

  viewCurrentCategoryTodoList(category, todoArr = this.state.todoList, searchResult = []) {
    this.setState({
      todoList: todoArr,
      currentCategory: category,
      currentCategoryTodoList: todoArr.filter(
        todo => todo.category.name === category.name && todo.isComplete === false,
      ),
      completedTodoList: todoArr.filter(
        todo => todo.category.name === category.name && todo.isComplete === true,
      ),
      searchResult: searchResult,
    });
  }

  updateTodoList(text) {
    const newTodo = {
      id: this.id,
      text: text,
      category: this.state.currentCategory,
      isComplete: false,
    };
    const updatedArr = this.state.todoList.concat(newTodo);
    this.id = this.id + 1;
    this.viewCurrentCategoryTodoList(this.state.currentCategory, updatedArr);
  }

  removeTodo(id) {
    const removedArr = this.state.todoList.filter(todo => todo.id !== id);
    this.viewCurrentCategoryTodoList(this.state.currentCategory, removedArr);
  }

  removeCategory(category) {
    const removedArr = this.state.todoList.filter(todo => todo.category.name !== category.name);
    this.viewCurrentCategoryTodoList({ id: 0, name: '미분류' }, removedArr);
  }

  toggleTodoComplete(id) {
    const completedTodo = this.state.todoList.filter(todo => todo.id === id)[0];
    completedTodo.isComplete = !completedTodo.isComplete;
    const changedArr = this.state.todoList.filter(todo => todo.id !== id).concat(completedTodo);
    changedArr.sort((a, b) => a.id - b.id);

    this.viewCurrentCategoryTodoList(this.state.currentCategory, changedArr);
  }

  updateTodoText(id, text) {
    const updatedTodo = this.state.todoList.filter(todo => todo.id === id)[0];
    updatedTodo.text = text;
    const changedArr = this.state.todoList.filter(todo => todo.id !== id).concat(updatedTodo);
    changedArr.sort((a, b) => a.id - b.id);

    this.viewCurrentCategoryTodoList(this.state.currentCategory, changedArr);
  }

  updateCategoryName(targetCategory) {
    const updatedTodo = this.state.todoList.filter(todo => todo.category.id === targetCategory.id);
    updatedTodo.forEach(todo => (todo.category.name = targetCategory.name));
    const changedArr = this.state.todoList
      .filter(todo => todo.category.id !== targetCategory.id)
      .concat(updatedTodo);

    changedArr.sort((a, b) => a.id - b.id);

    this.viewCurrentCategoryTodoList(targetCategory, changedArr);
  }

  searchTodo(word) {
    if (word.length > 0) {
      this.setState({
        isSearching: true,
      });
      const searchTitle = {
        id: 0,
        name: `'${word}'에 대한 검색결과`,
      };
      const regex = new RegExp(word, 'gi');
      const targetTodosArr = this.state.todoList.filter(todo => todo.text.match(regex));
      this.viewCurrentCategoryTodoList(searchTitle, undefined, targetTodosArr);
    } else {
      this.setState({
        isSearching: false,
      });
      this.viewCurrentCategoryTodoList({ id: 1, name: '미분류' });
    }
  }

  setSearchingToFalse() {
    this.setState({
      isSearching: false,
    });
  }

  render() {
    return (
      <main>
        <Nav
          viewCurrentCategoryTodoList={this.viewCurrentCategoryTodoList}
          removeCategory={this.removeCategory}
          updateCategoryName={this.updateCategoryName}
          searchTodo={this.searchTodo}
          setSearchingToFalse={this.setSearchingToFalse}
        />
        {this.state.isSearching ? (
          <SearchList
            currentCategory={this.state.currentCategory}
            searchResult={this.state.searchResult}
            viewCurrentCategoryTodoList={this.viewCurrentCategoryTodoList}
            setSearchingToFalse={this.setSearchingToFalse}
          />
        ) : (
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
        )}
      </main>
    );
  }
}

export default App;
