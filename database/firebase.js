import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBVzpHjrREkM7DPSCpixjDjoId-4NUzU1c",
    authDomain: "find-your-game-friends-622f4.firebaseapp.com",
    projectId: "find-your-game-friends-622f4",
    storageBucket: "find-your-game-friends-622f4.appspot.com",
    messagingSenderId: "223592715901",
    appId: "1:223592715901:web:7053409841a3898bab4314"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export default {
      firebase,
      db,
      auth
  }