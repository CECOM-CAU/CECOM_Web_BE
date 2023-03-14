import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { collection, doc, Firestore, getDoc, getDocs, getFirestore } from "firebase/firestore";

import dotenv from "dotenv";

dotenv.config();
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    appId: process.env.FB_APP_ID
};

let firebaseApp: FirebaseApp;
let firebaseDB: Firestore;

export const initFirebase = () => {
    firebaseApp =  initializeApp(firebaseConfig);
    firebaseDB = getFirestore();
};