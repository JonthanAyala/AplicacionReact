// Import the functions you need from the SDKs you need
import { getApp, initializeApp, isInitialized } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXHBK8-TUk5Bdx0rZVtHAOVxfMoUOm7t0",
  authDomain: "dmm5cayala.firebaseapp.com",
  projectId: "dmm5cayala",
  storageBucket: "dmm5cayala.appspot.com",
  messagingSenderId: "803851520441",
  appId: "1:803851520441:web:e55bb621cf162312644e68",
  measurementId: "G-CYN6RNYZTM"
};

export const Firebase = () =>{
  const [appFirebase, setApp] = useState();
  useEffect(() =>{
    if(!isInitialized){
      setApp(initializeApp(firebaseConfig));
    }else{
      const app = getApp();
      setApp(app);
    }
    return()=>{};
  }, [])
  return {appFirebase, setApp};
}