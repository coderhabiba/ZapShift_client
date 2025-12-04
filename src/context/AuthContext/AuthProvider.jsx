import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from './../../firebase/firebase.config';
const AuthProvider = ({children}) => {
  
  // register
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  // sign in
  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = () => {
    createUser,
    signInUser
  }

  return (
    <AuthContext value={authInfo}>
       {children}
    </AuthContext>
  );
};

export default AuthProvider;