import React from 'react';
import Category from './Category';
// import Search from '';

const Nav = (props) => {
  return (
    <nav>
      <Category viewCurrentCategoryTodoList={props.viewCurrentCategoryTodoList}/>
    </nav>
  );
}

export default Nav;