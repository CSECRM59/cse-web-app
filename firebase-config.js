// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// Your web app's Firebase configuration

const firebaseConfig = {

 apiKey: "AIzaSyBcQq4aJIYA3IiqkNs9L6CUHJ7BsJdkVqI",

 authDomain: "cse-web-app-42a80.firebaseapp.com",

 projectId: "cse-web-app-42a80",

 storageBucket: "cse-web-app-42a80.firebasestorage.app",

 messagingSenderId: "1042278300922",

 appId: "1:1042278300922:web:2948e23daa93193b365d43"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { collection, getDocs };
