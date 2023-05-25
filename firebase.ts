// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-cdReqyEZjFt14ASKtS0-wRV0CbPVt90",
  authDomain: "netflix-clone-9ca34.firebaseapp.com",
  projectId: "netflix-clone-9ca34",
  storageBucket: "netflix-clone-9ca34.appspot.com",
  messagingSenderId: "528310966723",
  appId: "1:528310966723:web:4cd768b219a53b05c8c576",
  measurementId: "G-FY05SDHBN4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }