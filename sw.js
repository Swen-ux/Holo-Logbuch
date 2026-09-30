// Holo-Logbuch (Datenschutz-Version): alles liegt lokal, es gibt keine Anfragen an fremde Server.
// Bei jedem Update die Versionsnummer erhöhen.
const CACHE = "holo-logbuch-privat-v55";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-180.png", "CopyShader.js", "EffectComposer.js", "LuminosityHighPassShader.js", "RenderPass.js", "ShaderPass.js", "UnrealBloomPass.js", "three.min.js", "oxanium-latin-400-normal.woff2", "oxanium-latin-600-normal.woff2", "oxanium-latin-700-normal.woff2", "saira-latin-300-normal.woff2", "saira-latin-400-normal.woff2", "saira-latin-500-normal.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
