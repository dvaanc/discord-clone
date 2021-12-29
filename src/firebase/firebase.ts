import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
// const firebaseConfig = {
//   apiKey: "AIzaSyDrif9JoSYSy18RRrFRFeVa1IUoc7sGmrA",
//   authDomain: "discord-app-8dc20.firebaseapp.com",
//   databaseURL: "https://discord-app-8dc20-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "discord-app-8dc20",
//   storageBucket: "discord-app-8dc20.appspot.com",
//   messagingSenderId: "536449829954",
//   appId: "1:536449829954:web:226f932be21dbe1771f1db"
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
console.log(db )
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
export { login, logout, auth, db, storage }
export default app;