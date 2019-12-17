import React from 'react';

class CategoryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      isEditable: true,
      isHover: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.handleOnClickButton = this.handleOnClickButton.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  handleDoubleClick(e) {
    this.setState = ({
      isEditable: false
    })
  }

  handleClick(e) {
    this.props.viewCurrentCategoryTodoList(e.target.value);
  }

  handleOnMouseEnter(e) {
    this.setState({
      isHover: true
    })
  }

  handleOnMouseLeave(e) {
    this.setState({
      isHover: false
    })
  }

  handleOnClickButton(e) {
    this.props.removeCategory(this.props.category)
  }

  render() {
    return (
      <div 
        className="category-entry"
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <input
          type="text"
          value={this.props.category}
          onChange={this.handleChange}
          onDoubleClick={this.handleDoubleClick}
          onClick={this.handleClick}
        />
        {this.state.isHover && this.props.category !== '미분류' ?
          <button className="btn delete" onClick={this.handleOnClickButton}>×</button> 
          : ''
        }
    </div>
    )
  }
}

// disabled={this.state.isEditable} 이걸 걸면 클릭이 안되는것..? 헉............... 그럼 뭘로 이벤트를 걸어??
// value를.. 위에서 가져와서 인식해야하나?? onchange시 위의 state를 변경해서 여기에 반영되도록?
// 이름 클릭 시 카테고리명을 app에서 받은 함수에 넘겨서 currentCategoryTodoList 업데이트
// 이름 더블클릭 시 수정 가능해야함
// 수정 후 엔터치면 정정되도록

export default CategoryEntry;