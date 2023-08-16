
import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
 import {getDatabase} from 'firebase/database'
// import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnZf0MKXcRJp2_szgK5Xv0wJBQac12-vQ",
  authDomain: "olxdata-63c3a.firebaseapp.com",
  projectId: "olxdata-63c3a",
  storageBucket: "olxdata-63c3a.appspot.com",
  messagingSenderId: "235700044454",
  appId: "1:235700044454:web:8c5b97a53d52351057aa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getDatabase(app)
const auth =getAuth(app)


export {auth,db}