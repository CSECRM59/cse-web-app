import { db, storage } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

// Fonction pour uploader une image et publier l'actualité
document.getElementById("uploadBtn").addEventListener("click", async () => {
    const titre = document.getElementById("titre").value;
    const contenu = document.getElementById("contenu").value;
    const fileInput = document.getElementById("imageUpload");
    const file = fileInput.files[0];

    if (!titre || !contenu || !file) {
        alert("Remplis tous les champs !");
        return;
    }

    const storageRef = ref(storage, "images/" + file.name);

    try {
        await uploadBytes(storageRef, file);
        const imageURL = await getDownloadURL(storageRef); // 🔥 Assure-toi que cette ligne fonctionne !

        await addDoc(collection(db, "actualites"), {
            titre: titre,
            contenu: contenu,
            imageURL: imageURL,
            date: new Date()
        });

        alert("Actu publiée !");
        afficherActualites();
    } catch (error) {
        console.error("Erreur :", error);
    }
});

// Fonction pour afficher les actualités
async function afficherActualites() {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "<p>Chargement...</p>";

    const querySnapshot = await getDocs(collection(db, "actualites"));
    newsContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const article = document.createElement("div");
        article.classList.add("news-item");
        article.innerHTML = `
            <h3>${data.titre}</h3>
            <p>${data.contenu}</p>
            <img src="${data.imageURL}" style="max-width: 200px;">
        `;
        newsContainer.appendChild(article);
    });
}

// Charger les actus au démarrage
document.addEventListener("DOMContentLoaded", afficherActualites);
