import { firebaseConfig } from "./config";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, Timestamp } from 'firebase/firestore/lite'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const app = initializeApp(firebaseConfig);
const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)