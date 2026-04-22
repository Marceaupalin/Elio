import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtRmkvCqM2UXpXl_RCdi-sfKURM9veCEA",
  authDomain: "elio-robotique.firebaseapp.com",
  projectId: "elio-robotique",
  storageBucket: "elio-robotique.firebasestorage.app",
  messagingSenderId: "264863779912",
  appId: "1:264863779912:web:b0939d30739f5198091c7d",
  measurementId: "G-5TCFTP36BM",
};

// Prevent duplicate initialization in Next.js dev mode
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { app, firebaseConfig };
