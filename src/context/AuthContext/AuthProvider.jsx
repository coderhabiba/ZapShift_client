import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from './../../firebase/firebase.config';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user,setUser] = useState();
  const [loading,setLoading] = useState(true);
  
  // register
  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  // sign in
  const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  // google signin
  const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // observe
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInGoogle,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;