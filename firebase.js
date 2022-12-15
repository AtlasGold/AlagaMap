import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrGl_ciJHmHyA1UGDW4UfyQsO6sHPNWns",
  authDomain: "alagamap-88472.firebaseapp.com",
  projectId: "alagamap-88472",
  storageBucket: "alagamap-88472.appspot.com",
  messagingSenderId: "102152405639",
  appId: "1:102152405639:web:efd89bd0d8ccdb02c3ae22",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function signInAnon() {
  return signInAnonymously(auth);
}
