import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthencation =()=>{
    initializeApp(firebaseConfig);
}  

export default initializeAuthencation;
