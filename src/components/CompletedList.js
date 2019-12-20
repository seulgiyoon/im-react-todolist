import React from 'react';
import CompletedListEntry from './CompletedListEntry';

class CompletedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowList: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return {
        isShowList: !state.isShowList,
      };
    });
  }

  setIsShowListFalse() {
    this.setState({
      isShowList: false,
    })
  }

  componentWillUnmount() {
    this.setIsShowListFalse();
  }

  render() {
    return (
      <div
        id="completed-list"
        className={this.props.completedTodoList.length !== 0 ? 'active' : ''}
      >
        {this.props.completedTodoList.length > 0 ? (
          <div className="completed-list-info" onClick={this.handleClick}>
            <p>{`완료한 일과 ${this.props.completedTodoList.length}개`}</p>
            <button className="btn complete-list-open">
              {this.state.isShowList ? '닫기' : '보기'}
            </button>
          </div>
        ) : (
          ''
        )}
        {this.state.isShowList
          ? this.props.completedTodoList.map(todo => (
              <CompletedListEntry
                key={todo.id}
                todo={todo}
                completed={'completed'}
                removeTodo={this.props.removeTodo}
                toggleTodoComplete={this.props.toggleTodoComplete}
              />
            ))
          : ''}
      </div>
    );
  }
}

export default CompletedList;
