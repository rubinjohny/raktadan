// var firebase = require("firebase/app");
import app from 'firebase/app';
import "firebase/auth";

const config = {
   apiKey: "AIzaSyCV5FVLofMPLUOSGwo3M8aCf_yFq7ToMYE",
   authDomain: "raktadan-7e042.firebaseapp.com",
   databaseURL: "https://raktadan-7e042.firebaseio.com",
   projectId: "raktadan-7e042",
   storageBucket: "raktadan-7e042.appspot.com",
   messagingSenderId: "546200176339",
};



class f {
   constructor(){
      app.initializeApp(config);
      this.auth = app.auth();
      console.log("constructor with auth " + this.auth);
      
   }

   x = function doCreateUserWithEmailAndPassword(email,password){
      console.log("calling create user with email:" + email + " password:" + password);
      
      this.auth.createUserWithEmailAndPassword(email,password);
   }

}
export default f;