import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuvFY2geZWCJ6iWfWUPec2TB8qmxuKba0",
    authDomain: "proyecto06-4143b.firebaseapp.com",
    projectId: "proyecto06-4143b",
    storageBucket: "proyecto06-4143b.appspot.com",
    messagingSenderId: "173030865294",
    appId: "1:173030865294:web:51a8f7d343cce6b2eeccdf",
    measurementId: "G-QJ3B6VCFBP"
};

initializeApp(firebaseConfig);
export const database = getFirestore();

