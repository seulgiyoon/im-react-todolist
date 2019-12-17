import React from 'react';
import CategoryEntry from './CategoryEntry';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      categories: ['분류하지 않은 할일'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  updateCategory(text) {
    this.setState({
      categories: this.state.categories.concat(text)
    });
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.updateCategory(this.state.text);
      this.props.viewCurrentCategoryTodoList(this.state.text);
      this.setState( { text: '' });
    }
  }

  handleBlurEvent(e) {
    if (this.state.text) {
      this.updateCategory(this.state.text);
      this.props.viewCurrentCategoryTodoList(this.state.text);
      this.setState( { text: '' });
    }
  }

  removeCategory(name) {
    const removedArr = this.state.categories.filter(category => category !== name)
    this.setState({
      categories: removedArr
    })
    this.props.removeCategory(name);
  }

  render() {
    return (
      <div id="category-wrapper">
        <button id="category-add-btn">카테고리 추가</button>
        {this.state.categories.map(category =>
          <CategoryEntry
            key={category}
            category={category}
            viewCurrentCategoryTodoList={this.props.viewCurrentCategoryTodoList}
            removeCategory={this.removeCategory}
          />
        )}
        <div id="category-default-form">
          <label></label>
          <input 
            type="text" 
            id="category-default-input"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterEvent}
            onBlur={this.handleBlurEvent}
          />
      </div>
    </div>
    )
  }

}

// 카테고리 만들기 버튼 만들기 -> 누르면 인풋에 커서 위치하도록... 이거 어떻게 하는거임..? 쿼리셀렉터로 특정 인풋 지정을 못하는데..?
// categoryEntry에서 생성되면 여기에서 state로 목록을 관리, 그 목록 안의
// categoryNames를 다시 categoryEntry로 뿌림... 이 아니고... 이것도 인풋 있어야겠는데.
// 아니면 추가버튼. TodoList랑 상황이 같음.


export default Category;