import React, { Component } from 'react';
import PhoneForm from "./components/PhoneForm";
import './App.css';
import PhoneInfoList from "./PhoneInfoList";

class App extends Component {
id =2 
state = {
    information:[
        {
            id: 0,
            name: '안수인',
            phone: '010-0000-0000'
        },
        {
          id: 1,
            name: '청아',
            phone: '010-0000-0000'  
        }
    ]
}
handleCreate = (data)=>{
    const {information} = this.state;
    this.setState({
        information: information.concat({ id: this.id++, ...data }) //concat을 이용하여 배열을 조절
    })                                                              //여기서 id 값은 각 데이터를 식별하기 위함이다.
    
}
handleRemove = (id) => {
  const { information } = this.state;
  this.setState({
    information: information.filter(info => info.id !== id)
  })
}
handleUpdate = (id, data) =>{
  const {information} = this.state;
  this.setState({
      information: information.map(info => id === info.id ? { ...info, ...data }
      // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
      : info // 기존의 값을 그대로 유지
      )
      
  })
  
}

render() {
 // const { information } = this.state;
  return (
    <div className='app'>
      <PhoneForm
        onCreate={this.handleCreate}
      />
      <PhoneInfoList data={this.state.information}
       onRemove={this.handleRemove} 
      //id 를 파라미터로 받아오는 handleRemove 라는 함수를 만들어,porps로 PhoneInfoList 로 전달
      onUpdate={this.handleUpdate}
      />
      
    </div>
  );
}
}
export default App;