import React from 'react';

import { Input, Row, Col, Button, InputNumber, Menu, Dropdown } from 'antd';


const bloodTypes = ["A+", "A-", "O+", "O-", "B+", "B-", "AB+", "AB-"];
const gender = ["male", "female", "transgender", "refuse to specify"];


class EnterInfo extends React.Component{

   constructor(props){
      super(props);
      this.state = {
         bloodType: bloodTypes[0],
         gender: gender[0]
      }
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


      return(
         <div>
            Please enter all details to use Raktadan!

            <Row>
               <Col>
                  <Input placeholder="Name" style={{ margin: 10 }} />
               </Col>
               <Col>
                  <Input placeholder="address" style={{ margin: 10 }} />
               </Col>
               <Col>
                  <Input placeholder="phone" style={{ margin: 10 }} />
               </Col>
            </Row>

            <Row gutter={16} style={{display:'flex', alignItems:'center'}}>
               
               <Col span={10} className="gutter-row">
                  <div className="gutter-box">
                     <InputNumber min={18} max={40} defaultValue={18} style={{margin: 10}} />
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
            </Row>
            <Button onClick={() => this.props.onEnterInfo()}>Submit</Button>
         </div>
      )
   }
}
export default EnterInfo;