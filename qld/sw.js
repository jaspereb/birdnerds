// Bird Nerd · Birds of Queensland — offline service worker
const VERSION = 'cc9115ca91';
const CACHE = 'qldbirds-' + VERSION;
const SHELL = ["./", "index.html", "manifest.webmanifest", "LICENSE.txt"];
const ASSETS = ["icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "img/australasian-darter.3b03af05.webp", "img/australian-brush-turkey-inset.fcdd7486.webp", "img/australian-brush-turkey.53a608a1.webp", "img/australian-king-parrot-inset.d544b9b8.webp", "img/australian-king-parrot.01871683.webp", "img/australian-masked-owl.1342b205.webp", "img/australian-owlet-nightjar.93f976f9.webp", "img/australian-ringneck.16c6bd64.webp", "img/barking-owl.e9abe069.webp", "img/barred-cuckoo-shrike.7d840f3f.webp", "img/bell-miner.6003f8d8.webp", "img/black-breasted-buttonquail-inset.32c1eb6f.webp", "img/black-breasted-buttonquail.8f0afeea.webp", "img/black-chinned-honeyeater.9d162a23.webp", "img/black-faced-cuckoo-shrike.88321686.webp", "img/black-kite.2ecea1cd.webp", "img/black-necked-stork.b04c4da4.webp", "img/black-shouldered-kite.9a1ebd24.webp", "img/blue-faced-honeyeater.86e9dd4a.webp", "img/brahminy-kite.aa0907bc.webp", "img/brolga.e28e2082.webp", "img/brown-gerygone.636c8c8e.webp", "img/brown-honeyeater.3cbe57af.webp", "img/brown-quail.892ebd47.webp", "img/brown-treecreeper.41bdbff8.webp", "img/budgerigar.5247e767.webp", "img/buff-breasted-paradise-kingfisher.708386d0.webp", "img/bush-stone-curlew.cd722664.webp", "img/cockatiel.6f9502b8.webp", "img/comb-crested-jacana.da6c3715.webp", "img/common-bronzewing.d308a259.webp", "img/crested-pigeon.15b174ff.webp", "img/crimson-chat-inset.3e49d870.webp", "img/crimson-chat.18dba43b.webp", "img/diamond-dove.241861f4.webp", "img/dollarbird.0df75921.webp", "img/eastern-barn-owl.ba6ff82e.webp", "img/eastern-curlew.93306fef.webp", "img/eastern-grass-owl.a27ae3ce.webp", "img/eastern-rosella.be2f2cb2.webp", "img/eastern-whipbird.c1535745.webp", "img/eastern-yellow-robin.3618795e.webp", "img/eclectus-parrot.1c6f1de7.webp", "img/fairy-gerygone.b556d444.webp", "img/galah.aa325b78.webp", "img/glossy-black-cockatoo.03ac714c.webp", "img/golden-bowerbird.ba292e14.webp", "img/golden-shouldered-parrot.2fa4f00b.webp", "img/great-egret-inset.5e839da3.webp", "img/great-egret.ed7d851b.webp", "img/grey-crowned-babbler.e8797e44.webp", "img/grey-fronted-honeyeater.c84a2b89.webp", "img/ground-cuckoo-shrike.f0d9d8be.webp", "img/helmeted-friarbird.3c48cf2a.webp", "img/large-tailed-nightjar.54fcb655.webp", "img/laughing-kookaburra.fac152e6.webp", "img/lewins-honeyeater.fb9699c6.webp", "img/little-buttonquail.fd2e08d7.webp", "img/little-corella.0ca904b1.webp", "img/little-egret-inset.b948dff8.webp", "img/little-egret.3c56b58d.webp", "img/little-friarbird.23f57110.webp", "img/little-lorikeet.1e135d82.webp", "img/long-billed-corella.89a8b3d3.webp", "img/lovely-fairywren.20fe26b9.webp", "img/magpie-goose.7359faad.webp", "img/major-mitchells-cockatoo.00b3d539.webp", "img/musk-lorikeet.6e93dc32.webp", "img/noisy-friarbird.1a037429.webp", "img/noisy-miner.e55aef5a.webp", "img/noisy-pitta.46468a03.webp", "img/orange-footed-scrubfowl.80e0e415.webp", "img/pacific-baza.287e63cc.webp", "img/pacific-koel.408aa3c8.webp", "img/painted-buttonquail-inset.a754cb49.webp", "img/painted-buttonquail.005c4759.webp", "img/pale-headed-rosella.f21595c2.webp", "img/palm-cockatoo.fc2bae59.webp", "img/peaceful-dove.baa92d50.webp", "img/pheasant-coucal-inset.c4a2d7b8.webp", "img/pheasant-coucal.c9462e1f.webp", "img/pied-heron.26e24b7c.webp", "img/powerful-owl.9d23a389.webp", "img/rainbow-lorikeet.59108aa4.webp", "img/red-browed-pardalote.38a26848.webp", "img/red-browed-treecreeper.a1abc6c7.webp", "img/red-chested-buttonquail-inset.edcb07b8.webp", "img/red-chested-buttonquail.4eda94eb.webp", "img/red-tailed-black-cockatoo-inset.23f80d1f.webp", "img/red-tailed-black-cockatoo.caa40cab.webp", "img/red-winged-parrot-inset.3c385930.webp", "img/red-winged-parrot.04ce2463.webp", "img/regent-honeyeater.ff0aa7d2.webp", "img/royal-spoonbill-inset.3daea79c.webp", "img/royal-spoonbill.93cb6826.webp", "img/scaly-breasted-lorikeet.0f46d196.webp", "img/singing-honeyeater.fbc0e633.webp", "img/southern-boobook.106b3c6f.webp", "img/southern-cassowary.4ba76662.webp", "img/spinifex-pigeon.3fd80d88.webp", "img/spiny-cheeked-honeyeater.6dabd1b3.webp", "img/spotted-harrier.e8da70de.webp", "img/spotted-nightjar.21fa33cb.webp", "img/spotted-pardalote.b628c3b3.webp", "img/squatter-pigeon.d179e5ae.webp", "img/striated-pardalote.b8ae1758.webp", "img/striped-honeyeater.f7a02ca1.webp", "img/stubble-quail.3874d481.webp", "img/sulphur-crested-cockatoo.f996c9f0.webp", "img/swift-parrot.823a839c.webp", "img/tawny-frogmouth.47767a59.webp", "img/varied-sittella.0043fa6f.webp", "img/varied-triller.ca695c88.webp", "img/victorias-riflebird.b73b894c.webp", "img/wedge-tailed-eagle.de58289b.webp", "img/western-gerygone.5631d442.webp", "img/whistling-kite.ddb9962c.webp", "img/white-bellied-cuckoo-shrike.f0d1a7df.webp", "img/white-bellied-sea-eagle.7e372e82.webp", "img/white-browed-babbler.01876eba.webp", "img/white-eared-honeyeater.c970431b.webp", "img/white-faced-heron.9a1646de.webp", "img/white-necked-heron.f1269026.webp", "img/white-plumed-honeyeater.a63a1024.webp", "img/white-throated-gerygone.18972261.webp", "img/white-throated-honeyeater.11d9bdc9.webp", "img/white-throated-nightjar.873d5869.webp", "img/white-winged-triller-inset.9ba0f136.webp", "img/white-winged-triller.2bf7a0f5.webp", "img/wompoo-fruit-dove.aeb7ee68.webp", "img/yellow-faced-honeyeater.28c560e0.webp", "img/yellow-honeyeater.1d825e78.webp", "img/yellow-tailed-black-cockatoo.6225b4c9.webp", "img/yellow-throated-miner.11b183d6.webp", "img/yellow-throated-scrubwren.8fce1d50.webp", "img/yellow-tufted-honeyeater.f70b8354.webp"];   // content-hashed file names: safe to serve cache-first forever

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    // images: fetch in small batches so one slow file doesn't fail the whole install
    for (let i = 0; i < ASSETS.length; i += 12) {
      await Promise.all(ASSETS.slice(i, i + 12).map(u =>
        caches.match(u).then(hit => hit ? c.put(u, hit) : c.add(u)).catch(() => {})));
    }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('qldbirds-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate' || req.url.endsWith('/index.html') || req.url.endsWith('.webmanifest')) {
    // page: network first (picks up deck updates), cached copy when offline
    e.respondWith((async () => {
      const cached = async () => (await caches.match(req, {ignoreSearch: true})) || (await caches.match('./')) || (await caches.match('index.html'));
      const net = fetch(req).then(async res => {
        if (res.ok) { const copy = res.clone(); const c = await caches.open(CACHE); await c.put(req.mode === 'navigate' ? './' : req, copy); }
        return res;
      });
      // weak signal in the field: fall back to the cached page after 3 s
      const slow = new Promise(r => setTimeout(r, 3000)).then(cached);
      try { return (await Promise.race([net, slow])) || (await net); }
      catch (_) { return (await cached()) || Response.error(); }
    })());
    return;
  }
  // everything else: cache first
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
