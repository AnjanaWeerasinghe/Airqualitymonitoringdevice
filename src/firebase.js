// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD26PwAmJ_HLxP76pz62qa7Dws6xpzpKbU",
  authDomain: "air-quality-monitoring-5ad17.firebaseapp.com",
  databaseURL: "https://air-quality-monitoring-5ad17-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "air-quality-monitoring-5ad17",
  storageBucket: "air-quality-monitoring-5ad17.appspot.com",
  messagingSenderId: "663488882232",
  appId: "1:663488882232:web:f8b9fbc479f3b57d7628cd",
  measurementId: "G-7E1TNCLD2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database, ref, onValue };
