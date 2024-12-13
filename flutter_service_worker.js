'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6e592b1e3b9f9b4c637056a392c74c58",
"version.json": "c4619bed416b04cf60692fa3bb1d113b",
"index.html": "19f079607e351b9a34678aa8112db27e",
"/": "19f079607e351b9a34678aa8112db27e",
"favicon_io%20(3)/favicon-16x16.png": "f3ff6c4c5431230204e5c2358693f4c4",
"favicon_io%20(3)/favicon.ico": "317765039313161647485b8763aa6e68",
"favicon_io%20(3)/android-chrome-192x192.png": "1053be54e768984341176d0f0ef659ca",
"favicon_io%20(3)/apple-touch-icon.png": "c6d607b4cb58dfd0c56178ab98785d01",
"favicon_io%20(3)/android-chrome-512x512.png": "6095710e012a8006e23cea4e37b62b69",
"favicon_io%20(3)/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"favicon_io%20(3)/favicon-32x32.png": "0f3e00461e0d0ab584cf9169dae4d1ff",
"main.dart.js": "88aa67b9370941ec9d99b850cbd895fe",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "f3ff6c4c5431230204e5c2358693f4c4",
"icons/favicon-16x16.png": "f3ff6c4c5431230204e5c2358693f4c4",
"icons/apple-touch-icon.png": "c6d607b4cb58dfd0c56178ab98785d01",
"icons/Icon-192.png": "1053be54e768984341176d0f0ef659ca",
"icons/Icon-maskable-192.png": "1053be54e768984341176d0f0ef659ca",
"icons/Icon-maskable-512.png": "6095710e012a8006e23cea4e37b62b69",
"icons/Icon-512.png": "6095710e012a8006e23cea4e37b62b69",
"icons/favicon-32x32.png": "0f3e00461e0d0ab584cf9169dae4d1ff",
"manifest.json": "95d1de337e094894a638a7ceec316a99",
"assets/AssetManifest.json": "b2d140ba17de5294bf241971e1172a31",
"assets/NOTICES": "a9f2f2006ca15f610450a781b30f0b4c",
"assets/FontManifest.json": "0f210ceffb37f0c8cfcfc008ef6e56fe",
"assets/AssetManifest.bin.json": "2aade1a5ab7ec54708a2c3304fd4333c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "312a9fef6f169ee7138f66ab099bb3d6",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "6a62d1d91a4efcb29bd5b874136d7f93",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "28f95ee617af11068ff798e335171921",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "63735e76e5c58a5f282ef6d6332bcd6c",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9bd971c264023adf10a2903483647a6d",
"assets/fonts/MaterialIcons-Regular.otf": "68ffcc579ae69a351b280533613b2b09",
"assets/assets/images/music_dabang_icon.png": "e2e08a59d9a35b9154c1bbf1d70a4ad3",
"assets/assets/images/music_dabang_192_192.png": "a8e2122b2a3c025cb9e26ca9d22a6235",
"assets/assets/images/example_album_image.jpg": "41d1d7f23d428fe085753dba6f071fcb",
"assets/assets/images/music_dabang_icon_raw.png": "86c2e059a7f547d743f51cf340aa642c",
"assets/assets/images/music_dabang_icon2.png": "53def1f9d77a72822bad061689879f64",
"assets/assets/images/kakao_logo.png": "94ba81dba322ea5f244fe957f428279f",
"assets/assets/icons/music_video_icon.svg": "1a8a2ca3ffb6c646789213257909ee26",
"assets/assets/icons/shuffle_icon.svg": "96eb181da397736820cc8f32de075487",
"assets/assets/icons/repeat_icon.svg": "9184d1f183b10d3c323f85b2a2129b3d",
"assets/assets/icons/play_prev_icon.svg": "8446270b022c65c8b6b17e49829895eb",
"assets/assets/icons/music_lyric_icon.svg": "ed235cd69f5eab0f235cb3a494fec114",
"assets/assets/icons/playlist_icon.svg": "cd63c675f0b18ac2dfb6dffebf627e9e",
"assets/assets/icons/playlists_icon.svg": "6f2a03d5333b444f439dd864e801b268",
"assets/assets/icons/play_prev_icon_old.svg": "c9b5c562a11d18d1bd705ac08256581b",
"assets/assets/icons/play_next_icon.svg": "3fff245302dda39d7b550f0aa32336cf",
"assets/assets/fonts/ChangwonDangamAsac-Bold_0712.ttf": "8e6757e14336c70e6437d213f4e75426",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
