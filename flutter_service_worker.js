'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3de059016f03123f38b5f9fe996e9c58",
"version.json": "2a4bdd3370ee966319e180d97d91e050",
"index.html": "0a3f1af038a0a464c101e690a44715c4",
"/": "0a3f1af038a0a464c101e690a44715c4",
"main.dart.js": "6d63f9eeca36eeb8e103cef9093bf535",
"myLogo.png": "a25b95c18025c38256e0b308a5b8be23",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"loading.gif": "bfa70583dbc1fa268e83b63b43a8ce71",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "f7bf4b146db878dc33758510b59e9fb9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dc6043ecaaae9eb5f5d08e51cc7dda60",
"assets/NOTICES": "a3aba70e8c67943795081b9fc437b91e",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/AssetManifest.bin.json": "5b51bda3fd207cac17284554b420ebf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "f5ac46d679c49f8350c30dbeb8c03c99",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "63ab36e2b58f645ea24d20066bc4e765",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "51895e36b947257b380307f69381ca1f",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "46440225dee629c045f7bf0fc9d56008",
"assets/fonts/MaterialIcons-Regular.otf": "99091bed5bae6e2b8c2bb310becfbd85",
"assets/assets/images/me.png": "a02d1c81739fc87ff2cf2a6f732b339f",
"assets/assets/images/avatar.png": "7ff563404caafe50ef55695c11548d8a",
"assets/assets/images/me.jpeg": "c14d752bf0b177cfeb7a22366fc98079",
"assets/assets/Logos/resaltk%2520admin%2520logo.jpg": "01fe3ed94f21eea19a02a5836b6ad521",
"assets/assets/Logos/mhalatko.png": "5604efdacc36bc2e052289ab4f88ecff",
"assets/assets/Logos/whail_tail.png": "a6b419564f5bba883d8de9a48a794216",
"assets/assets/Logos/ios_logo.png": "1954545460a81a8462b2b459626047c0",
"assets/assets/Logos/match_egypt.png": "48cfecedd29428abd2ba91da4397a383",
"assets/assets/Logos/friends.png": "ac355204a9225c97cd441b69382dde3c",
"assets/assets/Logos/elakaber.jpg": "6dad1f508456bec9acbe923bbf532e3c",
"assets/assets/Logos/avocado.png": "9d0ef9aca9cc0281a3ff6ca632f19cc7",
"assets/assets/Logos/brofa.png": "e76bee1d3d3664ed88757dbf60c2367e",
"assets/assets/Logos/alalfy.png": "3026a723aeb1e17702dcfa345a0125b7",
"assets/assets/Logos/vegan_market.png": "9fe6010c0794014b4ca75c9f8e71e464",
"assets/assets/Logos/shopmart.png": "ebac2e690be59f9b920eac2fb04eefef",
"assets/assets/Mockups/school_finder_6.webp": "1d9e65fad802a80be5a35717ce092a23",
"assets/assets/Mockups/1_resaltk.png": "48684c0ec06d0ec475774150ceb18426",
"assets/assets/Mockups/al_alfy_2.webp": "468163e232433b53a9235afaae54c506",
"assets/assets/Mockups/whailTail_1.webp": "e91a9ee8b2285b1bb496f7f9b544a35f",
"assets/assets/Mockups/match_egypt_5.webp": "8db7a719c44ce66bfb69dc4d53ff32a0",
"assets/assets/Mockups/match_egypt_4.webp": "d0d1320d4e9aafddbcf3fdcc5b69d07d",
"assets/assets/Mockups/al_alfy_3.webp": "c227ddf0d02bcaf71305a87c2671a7f7",
"assets/assets/Mockups/4_resaltk.png": "ff04334fa7be5fad0eed4b9940a6523a",
"assets/assets/Mockups/elakaber_4.png": "7a6b08493742ef1820cf8968a64cd935",
"assets/assets/Mockups/elakaber_5.png": "2ed2a0ab3a07087dd8fec358bc8c9f04",
"assets/assets/Mockups/match_egypt_3.webp": "e9bbe0d581d71076c5c646837019e59b",
"assets/assets/Mockups/al_alfy_4.webp": "ba080baebfdfb9c80bc2e83734ed08e1",
"assets/assets/Mockups/elakaber_6.png": "1819b828a1bfab001a3fc4c707cc7fde",
"assets/assets/Mockups/elakaber_2.png": "e3166badabfa0b52885ae3582ec5d1df",
"assets/assets/Mockups/al_alfy_5.webp": "1cf461751c5cc5e80e8021c432dc087f",
"assets/assets/Mockups/school_finder_1.webp": "aa0465cdbedaa60bf00e425f06f4d8fb",
"assets/assets/Mockups/elakaber_3.png": "cda910e74ba93eb057c6ff1f749f862a",
"assets/assets/Mockups/match_egypt_2.webp": "83852fd35ceb4d9933e19a95ac598a3d",
"assets/assets/Mockups/elakaber_1.png": "315abfe799e6851b9c7fe1aea83a7dfa",
"assets/assets/Mockups/2_resaltk.png": "1db91240d2de6e01a5f03dd25e6dfa1f",
"assets/assets/Mockups/whailTail_6.webp": "5db1535711677a1c3e468f6f448dc0ff",
"assets/assets/Mockups/match_egypt_1.webp": "2ffd4b4be94586f9036e44d16eb8ecc6",
"assets/assets/Mockups/5_resaltk.png": "474043fc5e4ab7a85723b2cf39a34173",
"assets/assets/Mockups/whailTail_5.webp": "cfbdb6324043e1cbece92b4b4e79c2c1",
"assets/assets/Mockups/al_alfy_6.webp": "71498a652b9fa3d229b09cfd7cca7b8d",
"assets/assets/Mockups/school_finder_2.webp": "b458145e07dffa3a9f07a0bae41b885c",
"assets/assets/Mockups/school_finder_3.webp": "9b34705b516b9f730529da7f37f171cf",
"assets/assets/Mockups/whailTail_4.webp": "8dfd80a69067f3885b3b06dff24e0060",
"assets/assets/Mockups/school_finder_4.webp": "16a8b068ea5d0bd0fe55ca1a51eb1ddd",
"assets/assets/Mockups/3_resaltk.png": "c57efd84c8ab55ff8bbe4382dde0a177",
"assets/assets/Mockups/whailTail_3.webp": "3d82041a4c695f45e84f024bec9d2478",
"assets/assets/Mockups/whailTail_2.webp": "94322072c0ec58e87975b7ef68d6ccae",
"assets/assets/Mockups/match_egypt_6.webp": "fb06581a8817ec79b10a578a904333a2",
"assets/assets/Mockups/school_finder_5.webp": "f850ff9b1b7741e387278c140b67b182",
"assets/assets/Mockups/6_resaltk.png": "a6d57f6694823ed228727777981f33ca",
"assets/assets/Mockups/al_alfy_1.webp": "dbd61d329b201022fc2872d8ca4f3b29",
"assets/assets/videos/Shopmart.mp4": "8eb87cc325a5f1dbc8bcbd6d74b36513",
"assets/assets/videos/friends_yu4bzK1n.mp4": "46f1c88122f2f5bc0cc22d82f97ab7d4",
"assets/assets/videos/Avocado.mp4": "22c27210622fc642540a2141393e1cfd",
"assets/assets/Animation%2520-%25201737840934261.gif": "bfa70583dbc1fa268e83b63b43a8ce71",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
