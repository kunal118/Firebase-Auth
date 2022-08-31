import {initializeApp} from "firebase/app"

import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_Config } from "./firebaseConfig";


const firebaseConfig = firebase_Config

const app = initializeApp(firebaseConfig)
export const auth =  getAuth()
// createUserWithEmailAndPassword(auth,'test@test2.com','qwerty123');
export default app