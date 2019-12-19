import React from 'react';

const SearchListEntry = props => {
  const handleClick = () => {
    props.viewCurrentCategoryTodoList(props.todo.category);
    props.setSearchingToFalse();
  };

  return (
    <div className="search-result-wrapper" onClick={handleClick}>
      <div className="search-result-category-name">{props.todo.category.name}</div>
      <div className="todoList-entry">
        <div
          className={props.todo.isComplete ? 'search-label-complete' : 'search-label-inComplete'}
        ></div>
        <p className="todoList-text">{props.todo.text}</p>
      </div>
    </div>
  );
};

export default SearchListEntry;
