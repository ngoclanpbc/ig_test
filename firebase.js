// Import the functions you need from the SDKs you need
import { initializeApp ,getApps , getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCu3Zh0_Dd6PJ6a_vOeKpifGmr2CwInddo",
  authDomain: "insta-2-lan.firebaseapp.com",
  projectId: "insta-2-lan",
  storageBucket: "insta-2-lan.appspot.com",
  messagingSenderId: "679457696014",
  appId: "1:679457696014:web:fb93e4052d58b433fc4f5f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) 
: getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};
