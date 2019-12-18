import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.inputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
  }

  setDefaultText(text) {
    this.setState({
      text: text,
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  liftStates() {
    if (this.props.calledByCategory) {
      this.props.updateCategoryName(this.props.category, this.state.text);
    } else {
      this.props.updateTodoText(this.props.todo.id, this.state.text);
    }
    this.props.changeEditableState();
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.liftStates();
    }
  }

  handleBlurEvent() {
    if (this.state.text) {
      this.liftStates();
    }
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this.setDefaultText(this.props.text);
  }

  render() {
    return (
      <input
        ref={this.inputRef}
        type="text"
        className={this.props.calledByCategory ? 'category-input' : 'todoList-input'}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleEnterEvent}
        onBlur={this.handleBlurEvent}
      />
    );
  }
}

export default Input;
