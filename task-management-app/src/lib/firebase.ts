// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
    PUBLIC_VITE_APIKEY,
    PUBLIC_VITE_AUTH_DOMAIN,
    PUBLIC_VITE_PROJECT_ID,
    PUBLIC_VITE_STORAGE_BUCKET,
    PUBLIC_VITE_MESSAGING_SENDER_ID,
    PUBLIC_VITE_APP_ID,
    PUBLIC_VITE_MEASUREMENT_ID
} from '$env/static/public';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: PUBLIC_VITE_APIKEY,
    authDomain: PUBLIC_VITE_AUTH_DOMAIN,
    projectId: PUBLIC_VITE_PROJECT_ID,
    storageBucket: PUBLIC_VITE_STORAGE_BUCKET,
    messagingSenderId: PUBLIC_VITE_MESSAGING_SENDER_ID,
    appId: PUBLIC_VITE_APP_ID,
    measurementId: PUBLIC_VITE_MEASUREMENT_ID
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)