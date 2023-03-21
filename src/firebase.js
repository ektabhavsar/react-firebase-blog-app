import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIt4hsJEB1ytKkXMvECK2B6JI8h10zgO8",
  authDomain: "react-blogs-app-8694c.firebaseapp.com",
  projectId: "react-blogs-app-8694c",
  storageBucket: "react-blogs-app-8694c.appspot.com",
  messagingSenderId: "800220800110",
  appId: "1:800220800110:web:47cccd6eb36effb0d9b27f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
