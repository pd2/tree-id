const staticDev = "treeid"
const service_worker_version = "v1.041"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/trees.txt",
  "/script.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})