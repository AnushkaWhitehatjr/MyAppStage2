import firebase from 'firebase';
import { initializeApp } from "@firebase/app"; 
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
//require("@firebase/firestore") 
//require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBAxY2Lxe5AQKSsJcaviOG5AU8KDxVIamE",
  authDomain: "myapp-67813.firebaseapp.com",
  databaseURL: "https://myapp-67813-default-rtdb.firebaseio.com",
  projectId: "myapp-67813",
  storageBucket: "myapp-67813.appspot.com",
  messagingSenderId: "1017008098847",
  appId: "1:1017008098847:web:c951763bedc6f65af70f2a"
};

if (firebase.apps.length === 0) 
{ 
  firebase.initializeApp(firebaseConfig); 
} 
var db = firebase.firestore();
 export default db;