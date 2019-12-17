import React from 'react';
import CompletedListEntry from './CompletedListEntry';

const CompletedList = (props) => {
  // console.log(props.completedTodoList)
  return (
    <div id="completed-list" className={props.completedTodoList.length !== 0 ? "active" : ''}>
      {props.completedTodoList.length > 0 ? 
        <div className="completed-list-info">
          <p>{`완료한 일과 ${props.completedTodoList.length}개`}</p>
          {/* <button className="btn complete-list-open">보기</button> */}
        </div> 
        : ''}
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
