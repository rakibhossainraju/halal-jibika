'use client';

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "halal-jibika-c0499.firebaseapp.com",
  projectId: "halal-jibika-c0499",
  storageBucket: "halal-jibika-c0499.appspot.com",
  messagingSenderId: "958809224045",
  appId: "1:958809224045:web:314625886dfb3873e76064",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
