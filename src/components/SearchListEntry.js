import React from 'react';

const SearchListEntry = props => {
  return (
    <div onDoubleClick={() => props.viewCurrentCategoryTodoList(props.todo.category)}>
      <div className="search-result-category-name">{props.todo.category.name}</div>
      <div className="todoList-entry">
        <div
          className={
            props.todo.isComplete ? 'todoList-label-complete' : 'todoList-label-inComplete'
          }
        ></div>
        <p className="todoList-text">{props.todo.text}</p>
      </div>
    </div>
  );
};

export default SearchListEntry;
