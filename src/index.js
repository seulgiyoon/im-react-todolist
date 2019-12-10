import React from 'react';
import ReactDOM from 'react-dom';

// index.js에서 2가지 grocery품이 들어있는 GroceryList component를 생성하고 
// index.html에 render되게 해보세요!
// 2가지 grocery품목은 cucumbers와 kale입니다. 
// 먼저 GroceryList의 <li>안에 nested 시킬 각각의 품목을 React Component로 만들어서 완성해보세요.

// const Cucumbers = () => <li>Cucumbers</li>;
// const Kale = () => <li>Kale</li>;


// const GroceryList = () => {
//   return (
//     <ul>
//       <Cucumbers />
//       <Kale />
//     </ul>
//   );
// }

// const TodoList = (props) => {
//   const onListItemClick = (event) => {
//     console.log('클릭 이벤트 생성 테스트');
//   }
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// }

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <li>{this.props.todo}</li>
//   }
// }

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       done: false
//     };
//   }

//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//       // done이 false면 true로, true면 false로 바꿈
//     })
//   }
  
//   render() {
//     const style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     return <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//   }
// }

// const TodoList = (props) => {
//   return (
//     <ul>
//       {props.todos.map(todo =>
//         <TodoListItem key={todo} todo={todo} />
//       )}
//     </ul>
//   )
// }

// GroceryListItem의 list들 즉,
// 들은 클릭을 했을 때 state가 변해서 crossed-out style이 되게끔 작성을 해주세요.
// list들을 hover 했을 때에 글자가 bold가 되게도 해주세요.


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    const style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    }
    return (
    <li style = {style} 
    onClick={this.onListItemClick.bind(this)} 
    onMouseOver={this.onListItemHover.bind(this)}
    onMouseOut={this.onListItemHover.bind(this)}>{this.props.item}</li>
    // https://reactjs.org/docs/events.html#mouse-events
    )
  }
}

const GroceryList = (props) => {
  return (
    <ul>
      {props.grocery.map(item =>
        <GroceryListItem
          key={item} 
          item={item} 
        />
      )}
    </ul>
  )
}

const App = () => {
  return (
    <div>
      <h1>My GroceryList</h1>
      <GroceryList 
        grocery={[
          'Cucumbers',
          'Kale'
        ]} 
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
