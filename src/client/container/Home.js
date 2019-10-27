import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import EnterInfo from './EnterInfo';
import { Button } from 'antd';
import firebase from '../components/Firebase';
import { database } from 'firebase';


class Home extends React.Component{

   constructor(props){
      super(props);
      this.state = {
         isLoggedIn:true,
         showEnterInfo:true,
      }
      

   }

   componentDidMount(){
      var that =this;
      
      firebase.onAuthStateChanged(function (user) {
         if (user) {
            // User is signed in.
            that.setState({isLoggedIn:true})
            
         } else {
            that.setState({isLoggedIn:false})
            // No user is signed in.
         }
      });

      this.setState({isLoggedIn:false})
   }

   onEnterInfo = (data) => {
      // console.log(data, database )
      var rootRef = database().ref();

      console.log(rootRef);
      rootRef.once("value")
      .then(function (snapshot) {
         var val = snapshot.val; // null
         console.log("val:", val);
         
      });

      var out = database().ref("/rubin");
      var obj = {
         mitali:'Fuck You!'
      }
      out.push(obj);
      // out.set(obj);
      // out.update(obj);
      
      this.setState({
         showEnterInfo:false
      })
   } 

   render(){

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