// Import the functions you need from the SDKs you need
import { initializeApp ,getApps , getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBxJBh8lPZ8SjXMDOUFZlVkyXFpsGoEi_E",
  authDomain: "insta-2-yt-9c659.firebaseapp.com",
  projectId: "insta-2-yt-9c659",
  storageBucket: "insta-2-yt-9c659.appspot.com",
  messagingSenderId: "297176793660",
  appId: "1:297176793660:web:6d2d7aa271a4539bd2b939"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) 
: getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage};
