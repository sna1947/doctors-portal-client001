import { useState, useEffect } from "react";
import initializeAuthencation from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

//initializeAuthentication app of firebase
initializeAuthencation();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoding, setIsLoding]=useState(true);

  const auth = getAuth();
// REGISTER USER=================================
  const registerUser = (email, password) => {
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=>setIsLoding(false));
  };
//LOGIN USER=========================================
  const loginUser =(email, password)=>{
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(()=>setIsLoding(false));
  };

  //LOGOUT USER=========================================
  const logOut =()=>{
    setIsLoding(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=>setIsLoding(false));
  };

  //OBSERVER USER STATE================================
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        
      } else {
        setUser({});
      }
      setIsLoding(false);
    });
    return ()=>unsubscribe;
  },[]);

  return {
    user,
    registerUser,
    loginUser,
    logOut,
  }
}
export default useFirebase;
