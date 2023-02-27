import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAQzjqYC3aHSLPPyJK66RAYoU0bca-Q_9c",
  
    authDomain: "ristomobile-a8c6f.firebaseapp.com",
  
    projectId: "ristomobile-a8c6f",
  
    storageBucket: "ristomobile-a8c6f.appspot.com",
  
    messagingSenderId: "837205652335",
  
    appId: "1:837205652335:web:0fc515fe80b760df28ee9a"
  
  };

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
  