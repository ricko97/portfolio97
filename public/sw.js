// Importation des scripts Workbox depuis un CDN
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6-1.5/workbox-sw.js");

// Activer les logs de Workbox en mode développement
workbox.setConfig({ debug: true});

// Ajout d'une route pour les images
workbox.routing.registerRoute(
  ({request}) => request.destination === "image",
  new workbox.strategies.NetworkFirst()
);

