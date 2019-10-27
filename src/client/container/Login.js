import React from 'react';
import { Input, Row, Col, Button } from 'antd';
import { Link} from 'react-router-dom';
import '../styles/login.css';
import firebase from '../components/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import FirestoreDb from '../components/Firestore';

class Login extends React.Component{


   constructor(props){
      super(props)
      this.state = {
         showForgotPassword:false,
         showRegister:true,
         showLogin:false,
         email:"",
         password:""
      }
      
   }

   componentDidMount(){
      console.log(this.props);

      // console.log("login mount");
   }

   onRegister = () => {

      // Firebase.doCreateUserWithEmailAndPassword(this.state.email,this.state.password);
      // this.setState({ showRegister: false, showLogin: true })

      firebase.createUserWithEmailAndPassword(this.state.email,this.state.password)
      .then( res => {
         console.log(res.user.uid);
         localStorage.token = res.user.uid;
         this.props.history.push("dashboard");
         // toast.success(res.message);

      })
      .catch( err => toast.error(err.message))

   }

   render(){

      return(
         <div>
            <ToastContainer />
            {this.state.showLogin && (
               <div className="outer animated headShake">
                  <span style={{fontSize:22}}>Login page</span>
                  <Row>
                     <Col><Input placeholder="Username" style={{margin:10}}/></Col>
                     <Col><Input placeholder="Password" type="password" style={{margin:10}}/></Col>
                  </Row>
                  <Row>
                     <Col span={12} className="link" onClick={()=>this.setState({showForgotPassword:true, showLogin:false})}>Forgot password</Col>
                     <Col span={12} className="link" onClick={() => this.setState({ showRegister: true, showLogin: false })}>New User? Sign Up</Col>
                  </Row>
                  <Row style={{marginTop:20}}>
                     <Link to="/dashboard"><Button>Log In</Button></Link>
                  </Row>
               </div>
               )}

            {this.state.showForgotPassword && (
               <div className="outer animated headShake">
                  <span style={{ fontSize: 22 }}>Forgot Password</span>
                  <Row>
                     <Col><Input placeholder="email" type="email" style={{ margin: 10 }} /></Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                     <Button onClick={()=>this.setState({showForgotPassword:false,showLogin:true})}>Go Back</Button>
                  </Row>
               </div>
            )}

            {this.state.showRegister && (
               <div className="outer animated headShake">
                  <span style={{ fontSize: 22 }}>Register As New User</span>

                  <Row>
                     <Col>
                        <Input placeholder="email" type="email" style={{ margin: 10 }} onChange={(e) => this.setState({email:e.target.value})} />
                     </Col>
                     <Col>
                        <Input placeholder="New Password" type="password" style={{ margin: 10 }} onChange={(e) => this.setState({ password: e.target.value })}/>
                     </Col>
                     <Col>
                        <Input placeholder="Confirm Password" type="password" style={{ margin: 10 }} onChange={(e) => this.setState({ password: e.target.value })}/>
                     </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                     <Button onClick={() => this.onRegister()}>Register and Log In</Button>
                  </Row>
               </div>
            )}

         </div>
      )
   }
}

const mapStateToProps = state => {
   return ({
      main: state.main
   })
}

const mapDispatchToProps = dispatch => ({
   
})
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(withRouter(Login))