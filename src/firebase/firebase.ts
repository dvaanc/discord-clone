import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, Timestamp } from 'firebase/firestore/lite'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
})

const auth = getAuth(app);
const db = getFirestore(app);
const login = async (email: string, password: string)=> {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message)
    }
    console.log(`couldn't catch error`);
  }
}  
const logout = async () => await signOut(auth);
export { login, logout, auth, db }
export default app;