// Desactivar redirección cuando ya estamos en la versión en inglés
var currentPath = window.location.pathname;
if (!currentPath.includes("/en-us/")) {
    var idioma = navigator.language || navigator.userLanguage; 
    if (idioma.startsWith('en')) {
        window.location.href = 'https://webcodem-srbig.github.io/en-us'; 
    }
}