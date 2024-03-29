import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import EnterInfo from './EnterInfo';
import { Button, Spin, Row, Col} from 'antd';
import firebase from '../components/Firebase';
// import { database } from 'firebase';
import firestoreDb from '../components/Firestore';

class Home extends React.Component{

   constructor(props){
      super(props);
      this.state = {
         isLoggedIn:true,
         showEnterInfo:true,
         email:'',
         userType:undefined,
         loaded:false
      }

   }

   componentDidMount(){
      var that =this;
      
      firebase.onAuthStateChanged(function (user) {
         if (user) {
            // User is signed in.
            that.setState({isLoggedIn:true,email:user.email})
            
            firestoreDb.collection("banks").get()
            .then((querySnapshot) => {
               querySnapshot.forEach((doc) => {
                  var data = doc.data();
                  // console.log(data);
                  if(data.email === user.email)
                     that.setState({ showEnterInfo: false, userType: 'bank', loaded: true})
               });
            });

            firestoreDb.collection("donors").get()
            .then((querySnapshot) => {
               querySnapshot.forEach((doc) => {
                  var data = doc.data();
                  // console.log(data);
                  if (data.email === user.email)
                     that.setState({ showEnterInfo: false, userType: 'donor', loaded: true })
               });
            });
            
         } else {
            that.setState({ isLoggedIn: false, loaded: true})
            // No user is signed in.
         }
      });

      this.setState({isLoggedIn:false})
   }

   onEnterInfo = (data) => {
      console.log(data.type);
      
      if (data.type === "Blood Doner"){
         firestoreDb.collection("donors").add({
            name: data.name,
            age: data.age,
            blood_type: data.bloodType,
            city:data.city,
            gender:data.gender,
            phone:data.phone,
            email:this.state.email
         })
         .then(docRef => this.setState({ showEnterInfo: false, userType: 'donor'}))
         .catch(err => console.log(err))
      }
      else{
         firestoreDb.collection("banks").add({
            name: data.name,
            city: data.city,
            phone: data.phone,
            email:this.state.email
         })
         .then(docRef => this.setState({ showEnterInfo: false, userType: 'bank' }))
         .catch(err => console.log(err))
      }
      
      this.setState({
         showEnterInfo:false
      })
   } 

   render(){

      if(!this.state.loaded){
         return (
            <Row>
               <Col>
                  {/* <span>Loading ..</span> */}
                  <Spin />
               </Col>
            </Row>
         )
      }

      if(!this.state.isLoggedIn)
         return(
            <Login />
         );

      if(this.state.isLoggedIn && this.state.showEnterInfo){
         return (<EnterInfo onEnterInfo={this.onEnterInfo}/>);
      }

      return(
         <div>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Button onClick={console.log("pressed")
                  }>press</Button>
               </li>
            </ul>

         </div>
      )
   }
}

export default Home;