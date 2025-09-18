// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhnXgGiAWMQHPR1bAvAqO_eg0dqJvTdHs",
  authDomain: "gold-assessoria-2.firebaseapp.com",
  databaseURL: "https://gold-assessoria-2-default-rtdb.firebaseio.com",
  projectId: "gold-assessoria-2",
  storageBucket: "gold-assessoria-2.firebasestorage.app",
  messagingSenderId: "420374479890",
  appId: "1:420374479890:web:63902e2f4d33b4f99804cb",
  measurementId: "G-70ZFR61DQD"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics };
