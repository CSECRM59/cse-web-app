// Importation des modules Firebase
//import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
//import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Configuration Firebase
// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyApHjGTVTJNxuQEtsb6vkOAeuHwjBBwqnM",
  authDomain: "cse-app-e6aa9.firebaseapp.com",
  projectId: "cse-app-e6aa9",
  storageBucket: "cse-app-e6aa9.firebasestorage.app",
  messagingSenderId: "1075354004245",
  appId: "1:1075354004245:web:a28a5e3128f7a9780fd71c"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// Initialisation de Firebase
//const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);
//export const storage = getStorage(app);
