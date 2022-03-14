import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCLm42fkE46ribo8bezSJWDiEH7Y2Sxc4M",
    authDomain: "project-71-e9e0c.firebaseapp.com",
    projectId: "project-71-e9e0c",
    storageBucket: "project-71-e9e0c.appspot.com",
    messagingSenderId: "105032941577",
    appId: "1:105032941577:web:6432c581e5aa753d93b8d8"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
