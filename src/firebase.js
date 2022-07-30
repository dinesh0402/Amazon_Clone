// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC1YlipODhgFcLrh8Kiz1T8y9DxO8ANZHA",
    authDomain: "clone-e755c.firebaseapp.com",
    projectId: "clone-e755c",
    storageBucket: "clone-e755c.appspot.com",
    messagingSenderId: "86091264032",
    appId: "1:86091264032:web:38eccc5dafbd1c04240c45",
    measurementId: "G-HTZK6CDRGD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};