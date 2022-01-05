
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore/lite';

const registerToAuth = async(userEmail: string, userPassword: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
    console.log(user);
    console.log('Successfully registered')
  } catch (error) {
    if(error instanceof Error) console.log(error.message);
  }
};

const uploadUserProfile = async(userID: string, image: string) => {
  const userRef = setDoc(doc(db, 'users', userID), { userProfile: image }, { merge: true });
}

export { registerToAuth }