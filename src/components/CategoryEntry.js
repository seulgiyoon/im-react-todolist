import React from 'react';
import Input from './Input';

class CategoryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      isEditable: false,
      isHover: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
    this.handleOnDoubleClickText = this.handleOnDoubleClickText.bind(this);
    this.changeEditableState = this.changeEditableState.bind(this);
  }

  handleClick() {
    this.props.viewCurrentCategoryTodoList(this.props.category);
    this.props.setSearchingToFalse();
  }

  handleOnMouseEnter() {
    this.setState({
      isHover: true,
    });
  }

  handleOnMouseLeave() {
    this.setState({
      isHover: false,
    });
  }

  handleOnClickButton() {
    this.props.removeCategory(this.props.category);
  }

  handleOnDoubleClickText() {
    this.setState({
      text: this.props.category.name,
      isEditable: true,
    });
  }

  changeEditableState() {
    this.setState({
      isEditable: false,
    });
  }

  render() {
    return (
      <div
        className="category-entry"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        {this.state.isEditable ? (
          <Input
            text={this.state.text}
            calledByCategory="category"
            updateCategoryName={this.props.updateCategoryName}
            category={this.props.category}
            changeEditableState={this.changeEditableState}
          />
        ) : (
          <p
            className="category-text"
            onClick={this.handleClick}
            onDoubleClick={this.handleOnDoubleClickText}
          >
            {this.props.category.name}
          </p>
        )}
        {this.state.isHover && this.props.category.name !== '미분류' ? (
          <button className="btn delete" onClick={this.handleOnClickButton}>
            ×
          </button>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default CategoryEntry;
