import {initializeApp} from "firebase/app"

import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC0-Ty-J2XA5PX5B4IWC-wd_fbF5ROZuhs",
    authDomain: "fir-uiauth-34a15.firebaseapp.com",
    projectId: "fir-uiauth-34a15",
    storageBucket: "fir-uiauth-34a15.appspot.com",
    messagingSenderId: "479316709585",
    appId: "1:479316709585:web:4b001982339d7e6246f5f0",
    measurementId: "G-BYM1DNQQNP"
  };

const app = initializeApp(firebaseConfig)
export const auth =  getAuth()
// createUserWithEmailAndPassword(auth,'test@test2.com','qwerty123');
export default app