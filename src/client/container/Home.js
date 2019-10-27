import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import EnterInfo from './EnterInfo';

import Firebase from '../components/Firebase';
import { Button } from 'antd';

class Home extends React.Component{

   constructor(props){
      super(props);
      this.state = {
         isLoggedIn:true,
         showEnterInfo:true,
      }

   }

   componentDidMount(){
      console.log("home mounted");
      this.setState({isLoggedIn:false})
   }

   onEnterInfo = (data) => {
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