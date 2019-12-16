import React from 'react';

class CategoryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ''
    }
  }

  render() {
    return (
      <div></div>
    )
  }
}

// 이름 클릭 시 카테고리명을 app에서 받은 함수에 넘겨서 currentCategoryTodoList 업데이트
// 이름 더블클릭 시 수정 가능해야함
// 수정 후 엔터치면 정정되도록

export default CategoryEntry;