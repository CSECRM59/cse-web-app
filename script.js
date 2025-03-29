import { db, collection, getDocs } from "./firebase-config.js";


async function loadNews() {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "<p>Chargement des actualités...</p>";

    const querySnapshot = await getDocs(collection(db, "actualites"));
    newsContainer.innerHTML = ""; 

    querySnapshot.forEach((doc) => {
        const article = document.createElement("div");
        article.classList.add("news-item");
        article.innerHTML = `<h3>${doc.data().titre}</h3><p>${doc.data().contenu}</p>`;
        newsContainer.appendChild(article);
    });
}

document.addEventListener("DOMContentLoaded", loadNews);
