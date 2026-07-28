// Firebase client (web) SDK.
// NOTE: this config is PUBLIC by design — it ships in the browser bundle and is
// safe to expose. Security is enforced by Firestore rules, not by hiding this.
// The Admin service-account key is a DIFFERENT, secret credential and must never
// live in this repo.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH9s4TNFYlb4I0LP3E6kYSR_1iJ9JqKV4",
  authDomain: "share-calculator-768c0.firebaseapp.com",
  projectId: "share-calculator-768c0",
  storageBucket: "share-calculator-768c0.firebasestorage.app",
  messagingSenderId: "940212101506",
  appId: "1:940212101506:web:be9bbf44fda9ae5e70af9b",
  measurementId: "G-QW9RW4S47F",
};

// Reuse the app across hot reloads / repeated imports instead of re-initializing.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
