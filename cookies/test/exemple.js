// Créer un cookie
document.cookie = "username=AmineSlimani; expires=Thu, 4 Feb 2025 12:00:00 UTC; path=/";

// Lire un cookie
const cookies = document.cookie;
console.log(cookies);

// Supprimer un cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";