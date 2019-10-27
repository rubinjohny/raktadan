
import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyCV5FVLofMPLUOSGwo3M8aCf_yFq7ToMYE",
   authDomain: "raktadan-7e042.firebaseapp.com",
   databaseURL: "https://raktadan-7e042.firebaseio.com",
   projectId: "raktadan-7e042",
   storageBucket: "raktadan-7e042.appspot.com",
   messagingSenderId: "546200176339",
};

const FbApp = firebase.initializeApp(config)

export default FbApp.auth();