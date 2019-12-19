import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEnterEvent = this.handleEnterEvent.bind(this);
  }

  handleChange(e) {
    this.props.searchTodo(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }

  handleEnterEvent(e) {
    if (e.key === 'Enter' && this.state.text) {
      this.props.searchTodo(e.target.value);
    }
  }

  render() {
    return (
      <input
        id="search-input"
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleEnterEvent}
        placeholder="검색"
      />
    );
  }
}

export default Search;
