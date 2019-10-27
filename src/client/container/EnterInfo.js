import React from 'react';

import { Input, Row, Col, Button, InputNumber, Menu, Dropdown } from 'antd';
import { ToastContainer,toast } from 'react-toastify';

const bloodTypes = ["A+", "A-", "O+", "O-", "B+", "B-", "AB+", "AB-"];
const gender = ["male", "female", "transgender", "refuse to specify"];
const type = ["Blood Doner", "Blood Bank"];

class EnterInfo extends React.Component{

   constructor(props){
      super(props);
      this.state = {
         name:"",
         city:"",
         phone:"",
         bloodType: bloodTypes[0],
         gender: gender[0],
         age:18,
         type: type[0]
      }
   }

   onEnterInfo = () => {
      console.log("onEnterInfo");
      
      if(this.state.name === "" || this.state.city === "" || this.state.phone === "" || this.state.age === ""){
         toast.error("please enter all fields");
         return;
      }

      this.props.onEnterInfo({
         name: this.state.name,
         city: this.state.city,
         phone: this.state.phone,
         bloodType: this.state.bloodType,
         gender: this.state.gender,
         age: this.state.age,
         type:this.state.type
      })
   }

   render(){

      const bloodType = (
         <Menu>
            {bloodTypes.map(option => (
               <Menu.Item key={option} onClick={() => this.setState({ bloodType: option })}>
                  <span>{option}</span>
               </Menu.Item>
            ))}
         </Menu>
      );

      const genderOptions = (
         <Menu>
            {gender.map(option => (
               <Menu.Item key={option} onClick={() => this.setState({ gender: option })}>
                  <span>{option}</span>
               </Menu.Item>
            ))}
         </Menu>
      );
      const typeOptions = (
         <Menu>
            {type.map(option => (
               <Menu.Item key={option} onClick={() => this.setState({ type: option })}>
                  <span>Register as {option}</span>
               </Menu.Item>
            ))}
         </Menu>
      );


      return(
         <div>
            <ToastContainer/>
            Please enter all details to use Raktadan!
            <Row>
               <Col span={24}>
                  <Dropdown overlay={typeOptions} placement="bottomLeft">
                     <Button>As {this.state.type}</Button>
                  </Dropdown>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Input placeholder="Name" style={{ margin: 10 }} onChange={e=>this.setState({name:e.target.value})} />
               </Col>
               <Col>
                  <Input placeholder="city" style={{ margin: 10 }} onChange={e => this.setState({ city: e.target.value })}/>
               </Col>
               <Col>
                  <Input placeholder="phone" style={{ margin: 10 }} onChange={e => this.setState({ phone: e.target.value })}/>
               </Col>
            </Row>

            { this.state.type === "Blood Doner" && (<Row gutter={16} style={{display:'flex', alignItems:'center'}}>
               
               <Col span={10} className="gutter-row">
                  <div className="gutter-box">
                     <InputNumber min={18} max={40} defaultValue={18} style={{ margin: 10 }} onChange={e => this.setState({ age: e })}/>
                  </div>
               </Col>
               <Col span={7} className="gutter-row">
                  <div className="gutter-box">
                     <Dropdown overlay={bloodType} placement="bottomLeft">
                        <Button>{this.state.bloodType}</Button>
                     </Dropdown>
                  </div>
               </Col>
               <Col span={7} className="gutter-row">
                  <div className="gutter-box">
                     <Dropdown overlay={genderOptions} placement="bottomLeft">
                        <Button>{this.state.gender}</Button>
                     </Dropdown>
                  </div>
               </Col>
            </Row>)}

            <Row>
               <Col span={24} style={{marginTop:50}}>
                  <Button type="primary" onClick={() => this.onEnterInfo() }>Submit</Button>
               </Col>
            </Row>
         </div>
      )
   }
}
export default EnterInfo;