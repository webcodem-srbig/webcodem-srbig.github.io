var idioma = navigator.language || navigator.userLanguage;
var currentPath = window.location.pathname;

// Solo redirigir si no estamos ya en la versión en inglés
if (idioma.startsWith('en') && !currentPath.includes('/en-us/')) {
    window.location.href = 'https://webcodem-srbig.github.io/marketplace-en-us'; 
}