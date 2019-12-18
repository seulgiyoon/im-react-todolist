import React from 'react';
import Category from './Category';
import Search from './Search';

const Nav = (props) => {
  return (
    <nav>
      <Search />
      <Category 
        viewCurrentCategoryTodoList={props.viewCurrentCategoryTodoList}
        removeCategory = {props.removeCategory}
        updateCategoryName={props.updateCategoryName}
      />
    </nav>
  );
}

export default Nav;