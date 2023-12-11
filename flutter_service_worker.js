'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "92fe184c1c49a98281fa387249f0a968",
"assets/AssetManifest.bin.json": "47224822a79510406943b0167a440f93",
"assets/AssetManifest.json": "85fd5306fc4ec0a09d65bca526c6d29d",
"assets/assets/get_widget/fonts/gfFontIcon.ttf": "91fe441cc105d2ac3d99dac6b72e0356",
"assets/assets/get_widget/fonts/gfFontIcons2.ttf": "c9ef8acf5e1ace6c92a0e10a248d1301",
"assets/assets/get_widget/fonts/gfIconFonts.ttf": "91fe441cc105d2ac3d99dac6b72e0356",
"assets/assets/get_widget/fonts/gfSocialFonts.ttf": "5a1143342f752421c630287be36ae69f",
"assets/assets/get_widget/fonts/loader.ttf": "9396dc647e6477f7cda08a483e15ef22",
"assets/assets/get_widget/fonts/new.ttf": "ccaf51a99c12842917c815105e0e2254",
"assets/assets/get_widget/fonts/newcomp.ttf": "53913d674b8d188b08746ef81dfe1931",
"assets/assets/get_widget/gif/success1.gif": "7bd1c7b13375ee3f3a920813e7542777",
"assets/assets/get_widget/icons/allign.png": "baa83ecfb8090f30bf47920d2e824be5",
"assets/assets/get_widget/icons/gflogo.png": "5aae5e6009c7edd48cfc3a87dbafbb8d",
"assets/assets/get_widget/icons/Rotation.png": "eefd5fb7e73232129fb9a62d2d794009",
"assets/assets/get_widget/icons/scaling.png": "0a7d35039a84218dd4b21d0860c7f1f5",
"assets/assets/get_widget/icons/size.png": "7cba1be9a69efa2a89264a05c4408da7",
"assets/assets/get_widget/icons/slide.png": "33dc78e8959bbde2f23ff21bfd6283fa",
"assets/assets/get_widget/images/avatar.png": "160bace2c15c0975e7460e2e26d1a2ef",
"assets/assets/get_widget/images/avatar1.png": "417ca1e7c2e4c314e3cc5158f28f868e",
"assets/assets/get_widget/images/avatar10.png": "6c877e7e4f78b781542cc1799d649226",
"assets/assets/get_widget/images/avatar11.png": "395b633f4e79f932d44d3e98bd0a8f08",
"assets/assets/get_widget/images/avatar12.png": "3f37d9e56589b3e2322d1be7057d61d8",
"assets/assets/get_widget/images/avatar2.png": "a511346e698e2db2321a93f02f152bc3",
"assets/assets/get_widget/images/avatar3.png": "087106515e87184cfe61d7b2fb69d204",
"assets/assets/get_widget/images/avatar4.png": "e81e2572ed424f60ab58d3f3c0341920",
"assets/assets/get_widget/images/avatar5.png": "7f7d935b024eceaf622cfe15b0251458",
"assets/assets/get_widget/images/avatar6.png": "3a14e44027a207806742fc267e896997",
"assets/assets/get_widget/images/avatar7.png": "5fb1556b2db6068fbb156f27189fe7ba",
"assets/assets/get_widget/images/avatar8.png": "1c8a9564f422f21cb2795e1b61535004",
"assets/assets/get_widget/images/avatar9.png": "048cbe49fe8510b74b6edf900ed50c2a",
"assets/assets/get_widget/images/card.png": "9f9e951085c76c9bc78e22e3011b0e3d",
"assets/assets/get_widget/images/card1.png": "567236e50514346cf68c33eb87f7482b",
"assets/assets/get_widget/images/card2.png": "9970da5163bf4e64bd34092ac6a5dcaa",
"assets/assets/get_widget/images/card3.png": "67e41d3a7039cc457ebc8ee43173779b",
"assets/assets/get_widget/images/card4.png": "040d69ccd720f48f647a0e053535bc4a",
"assets/assets/get_widget/images/card5.png": "d511850917d87790ba9a952b01ff8df6",
"assets/assets/get_widget/images/e1.png": "4f15642bd2e7971af55ce4d8f1ce75b2",
"assets/assets/get_widget/images/e2.png": "33bd98f5f1ca9346d0d51291f634acb6",
"assets/assets/get_widget/images/e3.png": "7d40970fa613789fe5f6d85f0ef60656",
"assets/assets/get_widget/images/e4.png": "e96a6b484658ef4d78e442970617a5a4",
"assets/assets/get_widget/images/e5.png": "f7c688dfa6e42b5c119d1652fabb61c4",
"assets/assets/get_widget/images/gflogo.png": "3de21daa0f3786271be9ebf504585fdc",
"assets/assets/get_widget/images/i1.png": "0c177ef172fddb4d28c8ef0102f88425",
"assets/assets/get_widget/images/i2.png": "c3a4c555a3f22ec8721d97b04116e003",
"assets/assets/get_widget/images/i3.png": "30c4aac4f475af62da292d9b49255c63",
"assets/assets/get_widget/images/i4.png": "6aebf6e04ccc484fcc4cf20fb808e192",
"assets/assets/get_widget/images/image.png": "3eb34f864965bfaf9160f826440a607f",
"assets/assets/get_widget/images/image1.png": "56aa3e67728dd2d07d925de31aaa1714",
"assets/assets/get_widget/images/image2.png": "6a00bfe0b0c50f0be10830c5026baea9",
"assets/assets/get_widget/images/img.png": "b0b8ee63d4f6d910a28ade1b5beb9bad",
"assets/assets/get_widget/images/img1.png": "292096bb7c7d6f825ddf075fad0ff05c",
"assets/assets/get_widget/images/img2.png": "969ca951b459278ace4ba486cf5cfcef",
"assets/assets/get_widget/images/orange.png": "86e7cfb109b64c5789d947e11b221076",
"assets/assets/get_widget/images/pink.png": "0664cd7e75c65f931da7c3c483f489bc",
"assets/assets/get_widget/images/purple.png": "029dd59f2ae8341fc5d640fcccbe1447",
"assets/assets/get_widget/images/red.png": "8a6a835dd2526ef01aec07f4ca8792d8",
"assets/assets/get_widget/images/s1.png": "c4bed48b6d6bc21248ef5c53c97dc82f",
"assets/assets/get_widget/images/s2.png": "8e49821a4b3b885dfdf0d5c6035c1534",
"assets/assets/get_widget/images/s3.png": "7def28d2cef6c4a6807845102b525475",
"assets/assets/get_widget/images/s4.png": "065d2f8890d084214d5fe25506bf16c1",
"assets/assets/get_widget/images/s5.png": "bac18c287da83eb39be609153c29aa33",
"assets/assets/get_widget/images/story.jpg": "f9ae374b68fa428428853ac3ffb871e2",
"assets/assets/images/png/bg.png": "a7ba7a41e1adaf53a018ddc0cfb5621f",
"assets/assets/images/png/cover_audio_default.png": "7569a8aa08adef2f75c38b200854b504",
"assets/assets/images/png/cover_audio_trivia.png": "95b0e3902a2db12cc33825c847204980",
"assets/assets/images/png/Facebook.png": "f56462b45707e0ce2d5df258e84a508a",
"assets/assets/images/png/google.png": "1b943d724cb2d7c49f888f750ce3a479",
"assets/assets/lottie/404.json": "e8362828f9a7b18198f4a6669da99c34",
"assets/assets/lottie/developing.json": "ab5e7a4957ff4a25ef4da6cc5a41db76",
"assets/assets/media/audio/audio.m4a": "046109fd7416d114e70e1d38674cd0af",
"assets/assets/media/audio/audio2.m4a": "fcd9ff8368f1afeefba91f29b9c4e681",
"assets/assets/media/video/video.mp4": "a72870d76582fc5e994ebecb80e4fba4",
"assets/assets/media/video/video2.mp4": "f41e4c699b21d0d2d26d44f70a5f30ac",
"assets/assets/spectrum/bored.png": "2d862c09beb63156da9eba2e24ee26f9",
"assets/FontManifest.json": "b66964971321d2cd77aed523e91aca0b",
"assets/fonts/MaterialIcons-Regular.otf": "aca17d4d7351ddc7b5802123b693145f",
"assets/NOTICES": "6c808af27a9c6560ba40bf8fe6feb3c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "9e96d8940f514213a73840721f0b5c1d",
"assets/packages/flutter_osm_web/src/asset/map.js": "c69b4d778b3081d4d3b353d1786a9ea8",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22c8237320f7d5f67f1199ec9147ea60",
"/": "22c8237320f7d5f67f1199ec9147ea60",
"main.dart.js": "a0007cce1c45597115ec0b99e85cc3b0",
"manifest.json": "702ba0f9e25dc70f6094da332bedfcf0",
"version.json": "0d1027b8a8cdcfd16c916b708a4805a4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
