import React, { Component } from 'react';

class PhoneInfo extends Component {
// info 가 undefined 일 때에는 비구조화 할당을 통해 내부의 값을 받아올 수 없기 때문에
//defaultProps 를 통하여 info 의 기본값을 설정해주었다.
  static defaultProps = {
    info: {
      name: '이름',
      phone: '010-0000-0000',
      id: 0
    }
  }
  state = {
    editing: false,
    name: '',
    phone: '',
}
  handleRemove = () => {
    // 삭제 버튼이 클릭되면 onRemove 에 id 넣어서 호출
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }
  // editing 값을 반전시키는 함수
  // true -> false, false -> true
  handleToggleEdit= ()=>{
    const{editing} =this.state;
    this.setState({
        editing: !editing
    });
   
}
// input 에서 onChange 이벤트가 발생 될 때
  // 호출되는 함수
  handleChange=(e)=>{
    const{name, value}= e.target;
    this.setState({
        [name]: value
    });
}
 componentDidUpdate(prevProps, prevState){
 // 여기서는 editing 값이 바뀔 때 처리 할 로직이 존재한다.
   // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
   // 수정을 적용할땐, input 의 값들을 부모한테 전달해준다.
      const { info, onUpdate } = this.props;
   if(!prevState.editing && this.state.editing) {
     // editing 값이 false -> true 로 전환 될 때
     // info 의 값을 state 에 넣어준다
     this.setState({
       name: info.name,
       phone: info.phone
     })
   }

   if (prevState.editing && !this.state.editing) {
     // editing 값이 true -> false 로 전환 될 때
     onUpdate(info.id, {
       name: this.state.name,
       phone: this.state.phone
     });
   }
     
 }

render() {
  const style = {
    border: '1px solid #fff',
    padding: '8px',
    margin: '8px',
    color: 'white',

  };
    const {editing} = this.state;
    
     //부모인 PhoneInfoList에서 props을 이용해 name, phone, id 값 가져옴
    if(editing){ //수정모드
          return (
    <div style={style}>
      <div>
          <input
            value={this.state.name}
            name="name"
            placeholder="이름"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            value={this.state.phone}
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
          />
        </div>
       <button onClick={this.handleToggleEdit}>적용</button>        
      <button className='removeBtn' onClick={this.handleRemove}>삭제</button>
    </div>
  );
    }
      
//일반모드
  const { 
    name, phone
  } = this.props.info;

  return (
    <div style={style}>
      <div><b>{name}</b></div>
      <div>{phone}</div>
       <button onClick={this.handleToggleEdit}>수정</button>
      <button className='removeBtn' onClick={this.handleRemove}>삭제</button>
    </div>
  );
}
}

export default PhoneInfo;