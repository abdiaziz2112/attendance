import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyAXSWXoHIaYg-br527HW600VKQeG6tZ1cg",
    authDomain: "attendance-ddaae.firebaseapp.com",
    databaseURL: "https://attendance-ddaae-default-rtdb.firebaseio.com",
    projectId: "attendance-ddaae",
    storageBucket: "attendance-ddaae.appspot.com",
    messagingSenderId: "405479129077",
    appId: "1:405479129077:web:3db68a8845ef202305aabc"
  };

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
