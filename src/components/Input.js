import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }

    this.inputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
    this.handleBlurEvent = this.handleBlurEvent.bind(this);
  }

  setDefaultText(text) {
    this.setState({
      text: text
    })
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.props.updateTodoText(this.props.todo.id, this.state.text);
      this.props.changeEditableState();
    }
  }

  handleBlurEvent() {
    if (this.state.text) {
      console.log(this.state.text);
      this.props.updateTodoText(this.props.todo.id, this.state.text);
      this.props.changeEditableState();
    }
  }

  componentDidMount() {
    this.inputRef.current.focus();
    this.setDefaultText(this.props.text); // 이것도 안티패턴인가? 바로 설정만 안하면 괜찮은건지??
  }

  render() {
    return (
      <input
        ref={this.inputRef}
        type="text"
        className="todoList-input"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleEnterEvent}
        onBlur={this.handleBlurEvent}
      />
    )
  }
}

export default Input;