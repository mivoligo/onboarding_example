'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"manifest.json": "c8a113d6372ce35dbccd1ea5c149c80c",
"flutter_bootstrap.js": "1f3f19564870e89d5a352d74a18f9057",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/5-f.png": "82bd6f311c752e0e0fa038beb1ea8fb2",
"assets/assets/images/1-f.png": "bef9bb7b8c7bb9585dd647d791a99031",
"assets/assets/images/2-f.png": "470e44b4766805df0c25f30695b261b7",
"assets/assets/images/0-f.png": "b48d9621cab4dd1626dbb123e2e1ba38",
"assets/assets/images/5-b.png": "6b3a40531cfa7ff68eac27d7ef561b06",
"assets/assets/images/2-b.png": "cc2a5c57ea79806fb66291b3ac169532",
"assets/assets/images/3-b.png": "a32f255eda87f5a5b78e362a6e8e5c63",
"assets/assets/images/4-b.png": "2d69a40f8481c333a68ac3e49f7919d7",
"assets/assets/images/decoration/star-6-green.png": "8fb81deea9ad2d1fe3006fb204970a1f",
"assets/assets/images/decoration/dots-small.png": "ab0505aa415d59b5fdde7d0da7a8b357",
"assets/assets/images/decoration/rocket.png": "a2e0eb3eb371f9245f891dc78db33e72",
"assets/assets/images/decoration/party.png": "34d57957b58a325581c5febc67d28feb",
"assets/assets/images/decoration/spark-2.png": "e98c1819b1459bea604ec2627daffef5",
"assets/assets/images/decoration/cross.png": "8d40271ce9a429b0ce4bee2a20a24edf",
"assets/assets/images/decoration/spark-1.png": "b059b0b4aa4b42720c2f9d5bc7673703",
"assets/assets/images/decoration/star-5-blue.png": "421565eead685848d3e669cfaa90d2b3",
"assets/assets/images/decoration/cloud-big.png": "99d6b403e202d9b415dda0a04fc44ede",
"assets/assets/images/decoration/star-4-white.png": "7864f12829a2cc5d8ae6429edf17c075",
"assets/assets/images/decoration/documents.png": "dafb2d47fe2595194716e2b5c4bc5a7b",
"assets/assets/images/decoration/moon.png": "337faeb8873694b988c6393ac5e650cf",
"assets/assets/images/decoration/ticket.png": "dfe186be2b6445df5a59bb43b707d889",
"assets/assets/images/decoration/mic.png": "030ce8021a0f36e407dc909f122215b9",
"assets/assets/images/decoration/bubbles.png": "bd4a7027f36f20f7c4b221aab797ce76",
"assets/assets/images/decoration/heart.png": "84ae35678fb04778f3a68aef18c11264",
"assets/assets/images/decoration/star-4-orange.png": "dbc292140e13dbc1a3f28502716425f7",
"assets/assets/images/decoration/cloud-small.png": "ef2c5172584e24e358b8e2685a336767",
"assets/assets/images/decoration/round-rect.png": "e4e41baf920a85a87a11e3ead3437a52",
"assets/assets/images/decoration/book.png": "1959d0f51906ed1730d90ed155338ef4",
"assets/assets/images/decoration/movie.png": "50e603c10b0308c2b2143af29cb23ed5",
"assets/assets/images/decoration/star-5-white.png": "943bb7c203ce702a80a5b931e023f5d4",
"assets/assets/images/decoration/star-6-orange.png": "852847806a2dc55284cb1b1d836ca864",
"assets/assets/images/decoration/dots-medium.png": "dfccdf1833cd573eba225713e2ac43b0",
"assets/assets/images/decoration/dots-big.png": "e24fb63b41aa747e262c5cbe6c83cf32",
"assets/assets/images/decoration/direction.png": "dcedfda1fd5fd106a38a677b49de4f9f",
"assets/assets/images/decoration/location.png": "cf58b51f8557057a01e14f5a6be0573b",
"assets/assets/images/decoration/star-6-white.png": "2d8dff284f8d3f0a6ccb9813b90be5d6",
"assets/assets/images/1-b.png": "6927194e4baa4e9fa0ba22684f131b05",
"assets/assets/images/0-b.png": "beadb547021790166177ba65435f057a",
"assets/assets/images/4-f.png": "cdccff7cf83d9b130355c418f929530a",
"assets/assets/images/3-f.png": "2793d907b4f82c7627ea2122f0c6b05b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "37298ca6aef113e15f7d968ef52a0390",
"assets/AssetManifest.bin.json": "143ff8167f8b86a0ffe8fce5fc23fce0",
"assets/AssetManifest.json": "c7c75bbee47966f5c0cd75ac73476542",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "151b0bacf84aaf6bbb1b0550962540f9",
"version.json": "847da68ee843ae20543aa6ce3c06cc38",
"main.dart.js": "dfb38cf7398dcb27babddf1dc0522c9c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "cb05088a9b64d7a95acd1f3facfc9e3d",
"/": "cb05088a9b64d7a95acd1f3facfc9e3d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
