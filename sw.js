
const vgames = "dev-vsgames";

const assets = [
    "/",
    "index.html",
    "/assets/img/cod.webp",
    "/assets/img/cp.webp",
    "/assets/img/crash.webp",
    "/assets/img/diablo.webp",
    "/assets/img/mon.webp",
    "/assets/img/rab.webp",
    "/assets/img/wwe.webp",
    "/assets/img/ojo-abierto.png"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(vgames)
            .then( cache => {
                cache.addAll( assets );
            })
    );
});

self.addEventListener("activate", (event) => {
    const cacheAllowlist = ["v2"];

    event.waitUntil(
        caches.forEach((cache, cacheName) => {
            if (!cacheAllowlist.includes(cacheName)){
                return caches.delete(cacheName);
            }
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request)
            .then(res => {
                return res || fetch(fetchEvent.request)
            })
    );
});