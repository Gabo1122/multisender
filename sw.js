importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/465792ee3cc4348cf8f2.js",
    "revision": "1b1fc8b5ab1efda6b68ec19dc2508e2b"
  },
  {
    "url": "/_nuxt/63c2938a24790670ec53.js",
    "revision": "fab64547c0b1258668eb383e53d9eb2e"
  },
  {
    "url": "/_nuxt/68ee6a548217c62188d8.js",
    "revision": "25f5e3b77cf2426d2ffb4fbe83e2d7ec"
  },
  {
    "url": "/_nuxt/70fdbde0a2c40bb86f04.js",
    "revision": "4e163e93fa99af52b0c70c5f896c3cda"
  },
  {
    "url": "/_nuxt/74c004f35f3b0a30631a.js",
    "revision": "f99888c9ba069018796c12f0f502d362"
  },
  {
    "url": "/_nuxt/7b4328de16fe71280dd2.js",
    "revision": "740867c1543101e28e6281fca36870fd"
  },
  {
    "url": "/_nuxt/80f6a8da594cf9ce3f69.js",
    "revision": "34deecbc3657739391351160f02462c5"
  },
  {
    "url": "/_nuxt/825d7fa1806d79f1deb8.js",
    "revision": "16cc679d096082be2de27478d54f22b2"
  },
  {
    "url": "/_nuxt/8ca306adf401ddba9d3f.js",
    "revision": "3949b060ed5d4cbd0885a3c416a44862"
  },
  {
    "url": "/_nuxt/934516786bf7a68ba1c9.js",
    "revision": "4d6eb09339c1d49a43e6c64548bad9ff"
  },
  {
    "url": "/_nuxt/bb6b90a096e47584d173.js",
    "revision": "51b4075f11b360c62e68f19e34012270"
  },
  {
    "url": "/_nuxt/bce39faf3aad0f76afd5.js",
    "revision": "4248543256184a7e3d18a4f14e4dc143"
  },
  {
    "url": "/_nuxt/e0ddb3b5a46feec8120c.js",
    "revision": "a65b1c2fe71f6e1f92b4ed2f9024251d"
  },
  {
    "url": "/_nuxt/e4e94911c9a355f87735.js",
    "revision": "f0e399eaf146f384946c1ac2708002c9"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
