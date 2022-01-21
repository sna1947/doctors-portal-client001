import { useState, useEffect } from "react";
import initializeAuthencation from "../Pages/Login/Firebase/firebase.initialize";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//initializeAuthentication app of firebase
initializeAuthencation();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoding, setIsLoding]=useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

// REGISTER USER=================================
  const registerUser = (email, password) => {
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        // Signed in 
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);

        // ..
      })
      .finally(()=>setIsLoding(false));
  };
//LOGIN USER=========================================
  const loginUser =(email, password,location, navigate)=>{
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location?.state?.from || '/';
                navigate(destination);
      setAuthError('');
      // Signed in 
      // const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      setAuthError(error.message);
    })
    .finally(()=>setIsLoding(false));
  };
// SIGN IN WITH GOOGLE:===============================
  const signInWithGoogle =(location, navigate)=>{
    setIsLoding(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const destination = location?.state?.from || '/';
      navigate(destination);
      setAuthError('');
    }).catch((error) => {
      setAuthError(error.message);
    }).finally(()=>setIsLoding(false));
  
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
    isLoding,
    authError,
    registerUser,
    loginUser,
    logOut,
    signInWithGoogle
  }
}
export default useFirebase;
