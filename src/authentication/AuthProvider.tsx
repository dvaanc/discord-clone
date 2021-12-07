import React from 'react'
import app from '../firebase/firebase'
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { create } from 'domain';
interface AuthProviderProps {
  children: any,
  value: any;
}
interface UserProps {

}
const AuthContext = React.createContext('' as string);

export function useAuth() {
  return React.useContext(AuthContext);
}
export function AuthProvider({ children}: AuthProviderProps) {
  const [currentUser, setCurrentUser] = React.useState('' as any);
  
  const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])


  const value = {
    currentUser,
    signUp,
  }
  return (
    // <AuthContext.Provider value={value}>
    //   {children}
    // </AuthContext.Provider>
    <div></div>
  )
}
