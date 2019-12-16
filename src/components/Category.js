import React from 'react';
import CategoryEntry from './CategoryEntry';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNames: [],
    };
  }

  render() {
    return (
      <div>
        <CategoryEntry />
      </div>
    )
  }

}

// categoryEntry에서 생성되면 여기에서 state로 목록을 관리, 그 목록 안의
// categoryNames를 다시 categoryEntry로 뿌림... 이 아니고... 이것도 인풋 있어야겠는데.
// 아니면 추가버튼. TodoList랑 상황이 같음.


export default Category;