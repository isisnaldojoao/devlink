// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCysU2pCY8woicChjlHixgvvpLgicgLyiM",
  authDomain: "reactlinks-1f434.firebaseapp.com",
  projectId: "reactlinks-1f434",
  storageBucket: "reactlinks-1f434.appspot.com",
  messagingSenderId: "941556109105",
  appId: "1:941556109105:web:cad28ff0fb46758e53ea10"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth,db};