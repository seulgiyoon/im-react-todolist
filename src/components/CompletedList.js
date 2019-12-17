import React from 'react';
import CompletedListEntry from './CompletedListEntry';

const CompletedList = (props) => {
  // console.log(props.completedTodoList)
  return (
    <div id="completed-list">
      {props.completedTodoList.map(todo =>
        <CompletedListEntry
          key={todo.id}
          todo={todo}
          completed={'completed'}
          removeTodo={props.removeTodo}
          toggleTodoComplete={props.toggleTodoComplete}
        />
      )}
    </div>
  )
}

export default CompletedList;
