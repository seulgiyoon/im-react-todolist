import React from 'react';
import CategoryEntry from './CategoryEntry';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      categories: [{ id: 0, name: '미분류' }],
    };

    this.textInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.updateCategoryName = this.updateCategoryName.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  id = 2;

  updateCategory(text) {
    const newCategory = {
      id: this.id,
      name: text,
    };

    this.setState({
      categories: this.state.categories.concat(newCategory),
    });

    this.props.viewCurrentCategoryTodoList(newCategory);
    this.setState({ text: '' });
    this.id = this.id + 1;
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.updateCategory(this.state.text);
    }
  }

  handleBlurEvent(e) {
    if (this.state.text) {
      this.updateCategory(this.state.text);
    }
  }

  removeCategory(targetCategory) {
    const removedArr = this.state.categories.filter(
      category => category.name !== targetCategory.name,
    );
    this.setState({
      categories: removedArr,
    });
    this.props.removeCategory(targetCategory);
  }

  updateCategoryName(targetCategory, newName) {
    targetCategory.name = newName;
    const changedArr = this.state.categories
      .filter(category => category.id !== targetCategory.id)
      .concat(targetCategory);

    changedArr.sort((a, b) => a.id - b.id);

    this.setState({
      categories: changedArr,
    });
    this.props.updateCategoryName(targetCategory);
  }

  render() {
    return (
      <div id="category-wrapper">
        <button className="btn add-category" onClick={() => this.textInput.current.focus()}>
          카테고리 추가
        </button>
        {this.state.categories.map(category => (
          <CategoryEntry
            key={category.id}
            category={category}
            viewCurrentCategoryTodoList={this.props.viewCurrentCategoryTodoList}
            removeCategory={this.removeCategory}
            updateCategoryName={this.updateCategoryName}
            setSearchingToFalse={this.props.setSearchingToFalse}
          />
        ))}
        <div id="category-default-form">
          <input
            ref={this.textInput}
            type="text"
            id="category-default-input"
            value={this.state.text}
            onChange={this.handleChange}
            onKeyPress={this.handleEnterEvent}
            onBlur={this.handleBlurEvent}
          />
        </div>
      </div>
    );
  }
}

export default Category;
