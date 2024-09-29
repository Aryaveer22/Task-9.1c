import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8UgEPTLebq218PXFwEgu4_tDvDYBmsxU",
  authDomain: "task-sit313.firebaseapp.com",
  projectId: "task-sit313",
  storageBucket: "task-sit313.appspot.com",
  messagingSenderId: "443294983837",
  appId: "1:443294983837:web:fd4d034279de2a8ca15674",
  measurementId: "G-E928W7VF5V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
export { auth, db };
