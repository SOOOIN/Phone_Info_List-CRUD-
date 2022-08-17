import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {

static defaultProps = {
    data: []
  }

  render() {
    const { data, onRemove , onUpdate} = this.props; //부모인 App.js에서 props을 이용해 data 값 가져옴
    //PhoneInfoList 에서는 props 로 전달받은 onRemove 를 그대로 다시 자식인 PhoneInfo로 전달한다.
    const list = data.map( //map 메소드를 이용하여 조건대로 배열 list을 새롭게 배열화시킨다.
      info => (<PhoneInfo 
        key={info.id} 
        info={info}  
        onRemove={onRemove}
        onUpdate={onUpdate}
        />) //자식인 PhoneInfo로 props기능으로 전달
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default PhoneInfoList;
 