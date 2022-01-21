import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { doc, addDoc, setDoc, Timestamp, collection, query, where, getDocs, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore/lite';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { templates } from '../utility/serverTemplates';
import { ServerChannelList } from '../styles/appStyles/ServerContainer/ServerSidebarStyles';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
export interface serverProps {
  serverName: string,
  serverProfile: any,
  creationDate: any,
  serverTemplate: string,
  serverType: string,
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


const login = async (email: string, password: string)=> {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    if(error instanceof Error) return console.log(error);
  }
}

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    if(error instanceof Error) return console.log(error);
  }
}

const createServerFirebase = async(server: serverProps, userID: string): Promise<void> => {
  const newUUID = uuidv4();
  try {
    const newServerRef: any = await setDoc(doc(db, 'servers', newUUID), {
      serverName: server.serverName,
      creationDate: Timestamp.now(),
      serverTemplate: server.serverTemplate,
      serverType: server.serverType,
      serverID: newUUID,
    })
    createChannelsFirebase(newUUID, server.serverTemplate);
    uploadServerProfile(server, newUUID);
    addServerToUserServerList(userID, newUUID);
    
  } catch(error) { if(error instanceof Error) return console.log(error) };
}

const createChannelsFirebase = async(docID: string, serverTemplate: string): Promise<void> => {
  try {
    await setDoc(doc(db, `servers/${docID}/textChannels/`, 'no category'), { 
      categoryID: `${uuidv4()}` 
    });
    for (const item of templates[serverTemplate].textChannels) {
      await setDoc(doc(db, `servers/${docID}/textChannels/`, `${item.category}`), {
        categoryID: `${uuidv4()}`,
      });
      for (const channelItem of item.channels) {
        await setDoc(doc(db, `servers/${docID}/textChannels/${item.category}/channels/`, `${channelItem}`), {
          messages: [],
          archived: [],
          userPermissions: {},
          channelID: `${uuidv4()}`,
          channelName: `${channelItem}`,
          category: item.category,
        });
      }
    }
    for (const item of templates[serverTemplate].voiceChannels) {
      await setDoc(doc(db, `servers/${docID}/voiceChannels/`, item.category), {
        categoryID: `${uuidv4()}`,
      });       
      for (const channelItem of item.channels) {
        await setDoc(doc(db, `servers/${docID}/voiceChannels/${item.category}/channels/`, `${channelItem}`), {
          currentUsers: [],
          userPermissions: [],
          channelID: `${uuidv4()}`,
        });
      };
    }
  } catch(error) { if (error instanceof Error) return console.log(error) };
}

const uploadServerProfile = async(server: serverProps, serverID: string): Promise<void> => {
  try {
    const storageRef = ref(storage, `serverAssets/${serverID}/serverProfile.png`);
    await uploadBytes(storageRef, server.serverProfile).then(() => {
      fetchServerImage(serverID).then((res) => {
        const serverRef = setDoc(doc(db, 'servers', serverID), { serverProfile: res }, { merge: true });
      })
    })
  } catch(error) { if(error instanceof Error) return console.log(error) };
}

const addServerToUserServerList = async(userID: string, serverID: string) => {
  const userRef = doc(db, 'users', userID);
  await updateDoc(userRef, { serverList: arrayUnion(`${serverID}`) });
}

const fetchUserServerList = async(userID: string) => {
  const userRef = doc(db, 'users', userID);
  const userSnap = await getDoc(userRef);
  if(userSnap.exists()) {
    const serverList = userSnap.data().serverList;
    return serverList;
  }
}
const fetchServers = async(serverList: Array<string>) => {
  const serversRef = collection(db, 'servers');
  const q = query(serversRef, where('serverID', 'in', [...serverList]))
  const snapshot = await getDocs(q);
  const serverArr: Array<object> = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    serverArr.push(data)
  })
  return serverArr;
}

const fetchServerImage = async(serverID: string) => {
  const storageRef = ref(storage, `serverAssets/${serverID}/serverProfile.png`);
  const serverImage = await getDownloadURL(storageRef)
  return serverImage;
}

const newChatMessage = async(serverID: string, categoryName: string, channelName: string, userID: string, message: string) => {
  const uuid = uuidv4();
  try {
    const channelRef = await setDoc(doc(db,
      `servers/${serverID}/textChannels/${categoryName}/channels/${channelName}/chatMessages/${uuid}`, uuid), {
        chatID: uuid,
        userID,
        message,
      });
  } catch(err) { if(err instanceof Error) console.error(err) }
    // try {
    //   const newServerRef: any = await setDoc(doc(db, 'servers', newUUID), {
    //     serverName: server.serverName,
    //     creationDate: Timestamp.now(),
    //     serverTemplate: server.serverTemplate,
    //     serverType: server.serverType,
    //     serverID: newUUID,
    //   })

      
    // } catch(error) { if(error instanceof Error) return console.log(error) };
}
const fetchChannels = async (serverID: string) => {
  try {
    const categoriesRef = collection(db, `servers/${serverID}/textChannels`);
    const categoriesQuerySnapshot = await getDocs(categoriesRef);
    const channelData: Array<any> = []; 
      categoriesQuerySnapshot.forEach((doc) => {
        // console.log(doc.id, '==>', doc.data())
        const data = doc.data()
        const child = { categoryName: doc.id, categoryID: data.categoryID }
        const channelsRef = collection(db, `servers/${serverID}/textChannels/${data.id}`)
        // add another forEach loop for channels and push to array in category obj
        channelData.push(child)
      })
      return channelData
  } catch(err) { if(err instanceof Error) console.error(err) }
}

const fetchTextChannels = async(serverID: string, categoryName: string) => {
  try {
    const textChannelsRef = collection(db, `servers/${serverID}/textChannels/${categoryName}`)
  } catch(err) { if(err instanceof Error) console.error(err) }
}

export { 
  login,
  logout, 
  auth,
  db, 
  storage, 
  createServerFirebase, 
  createChannelsFirebase, 
  uploadServerProfile, 
  fetchUserServerList,
  fetchServers,
  fetchServerImage,
  fetchChannels
}
export default app;