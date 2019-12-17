import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('');
  }

  render() {
    return (
      <input 
        id="search-input"
        type="text"
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="검색"
      />
    )
  }
}

export default Search;
