import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBK1pWjGekmdOfJ98UFnNJELkElcXApqH4",
    authDomain: "ai-de85b.firebaseapp.com",
    projectId: "ai-de85b",
    storageBucket: "ai-de85b.appspot.com",
    messagingSenderId: "234508925539",
    appId: "1:234508925539:web:33c0698e1b378a6cfa1656",
    measurementId: "G-YXH7XB06TX"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth , app , googleProvider , fireDB , storage }