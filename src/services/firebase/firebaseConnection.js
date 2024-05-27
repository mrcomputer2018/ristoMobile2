import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "sua api key",
  
    authDomain: "seu auth",
  
    projectId: "seu project id",
  
    storageBucket: "storageBucket",
  
    messagingSenderId: "messagingSenderId",
  
    appId: "appId"
  
  };

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
  