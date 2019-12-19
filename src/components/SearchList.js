import React from 'react';
import SearchListEntry from './SearchListEntry';

const SearchList = props => {
  return (
    <section>
      <div id="todo-list-nav">
        <h2>{props.currentCategory.name}</h2>
      </div>
      {props.searchResult.map(todo => (
        <SearchListEntry
          key={todo.id}
          todo={todo}
          viewCurrentCategoryTodoList={props.viewCurrentCategoryTodoList}
          setSearchingToFalse={props.setSearchingToFalse}
        />
      ))}
    </section>
  );
};

export default SearchList;
