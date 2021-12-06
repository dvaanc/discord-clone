import React from 'react'
import app from '../firebase/firebase'
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { create } from 'domain';
interface AuthProviderProps {
  children: any,
}
interface UserProps {

}
const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
export function AuthProvider({ children}: AuthProviderProps) {
  const [currentUser, setCurrentUser] = React.useState();
  
  const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])


  const value = {
    currentUser,
    signUp,
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
