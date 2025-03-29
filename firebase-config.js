// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Configuration Firebase
// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Configuration Firebase
const firebaseConfig = {

 apiKey: "AIzaSyBcQq4aJIYA3IiqkNs9L6CUHJ7BsJdkVqI",

 authDomain: "cse-web-app-42a80.firebaseapp.com",

 projectId: "cse-web-app-42a80",

 storageBucket: "cse-web-app-42a80.firebasestorage.app",

 messagingSenderId: "1042278300922",

 appId: "1:1042278300922:web:2948e23daa93193b365d43"

};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
