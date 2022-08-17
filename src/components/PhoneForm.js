import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    
    e.preventDefault();
    
    this.props.onCreate(this.state);
    
    //submit이 끝나면 다시 폼 값을 초기화 시킨다.
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    const style = {

        color: 'white',
    
      };
    return (
        <div style={style}>
      <form className='submitForm' onSubmit={this.handleSubmit}//submit 버튼 누르면 반응하여 부모인 App.js로 폼 값 전달
      >
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange} //폼 값 수정시 반응
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}  //폼 값 수정시 반응
          name="phone"
        />
        <button className='submitBtn'  type="submit" /*submiit 버튼 추가*/ >등록 </button  >
      </form>
      </div>
    );
  }
}

export default PhoneForm;